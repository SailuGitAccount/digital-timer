import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Timer = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [ticking, setTicking] = useState(false);
  const title = "Stop Watch";

  useEffect(() => {
    let intervalId;
    if (ticking) {
      //setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [ticking, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setTicking(!ticking);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Card sx={{ width: "360px", padding: "20px", textAlign: "center" }}>
        <CardHeader
          title={title}
          titleTypographyProps={{
            align: "center",
            fontSize: "32px",
            sx: { backgroundColor: "#2196f3", color: "#fff" },
          }}
          subheaderTypographyProps={{ align: "center" }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography variant="h2" color="text.secondary">
              {`${hours}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box textAlign="center" sx={{ marginX: "auto" }}>
            <Button
              variant="contained"
              onClick={startAndStop}
              sx={{ marginRight: "15px", backgroundColor: "#2196f3" }}
            >
              {ticking ? "Stop" : "Start"}
            </Button>
            <Button
              variant="contained"
              onClick={reset}
              sx={{ backgroundColor: "#2196f3" }}
            >
              Reset
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Timer;
