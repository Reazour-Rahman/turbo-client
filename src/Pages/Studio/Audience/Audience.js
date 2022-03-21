import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Graph from "../Graph/Graph";
import "./Audience.css";
const returningViewers = [
  {
    name: "Jan 2, 2022",
    yAxis: 4321,
  },
  {
    name: "Feb 1, 2022",
    yAxis: 1234,
  },
  {
    name: "Feb 5, 2022",
    yAxis: 5678,
  },
  {
    name: "Feb 6, 2022",
    yAxis: 8654,
  },
  {
    name: "Feb 7, 2022",
    yAxis: 2432,
  },
  {
    name: "Feb 8, 2022",
    yAxis: 4656,
  },
  {
    name: "Feb 10, 2022",
    yAxis: 2313,
  },
];

const uniqueViewers = [
  {
    name: "Jan 2, 2022",
    yAxis: 1342,
  },
  {
    name: "Feb 1, 2022",
    yAxis: 5765,
  },
  {
    name: "Feb 5, 2022",
    yAxis: 3242,
  },
  {
    name: "Feb 6, 2022",
    yAxis: 1232,
  },
  {
    name: "Feb 7, 2022",
    yAxis: 7897,
  },
  {
    name: "Feb 8, 2022",
    yAxis: 3242,
  },
  {
    name: "Feb 10, 2022",
    yAxis: 8675,
  },
];

const subscribers = [
  {
    name: "Jan 2, 2022",
    yAxis: 4344,
  },
  {
    name: "Feb 1, 2022",
    yAxis: 8967,
  },
  {
    name: "Feb 5, 2022",
    yAxis: 2131,
  },
  {
    name: "Feb 6, 2022",
    yAxis: 6886,
  },
  {
    name: "Feb 7, 2022",
    yAxis: 1233,
  },
  {
    name: "Feb 8, 2022",
    yAxis: 5355,
  },
  {
    name: "Feb 10, 2022",
    yAxis: 5903,
  },
];
const Audience = () => {
  const [graph, setGraph] = useState(returningViewers);
  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";

  return (
    <Box sx={{  }}>
      <Box
        sx={{ margin: "0 auto", width: "80%" }}
        className="chart-container overview-left"
        id={card} 
      >
        <Grid container sx={{ textAlign: "center" }}>
          <Grid
            tabIndex="0"
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 1,
            }}
            onClick={() => setGraph(returningViewers)}
            className={
              graph === returningViewers ? "studio-tab-clicked" : "studio-tab"
            }
          >
            <Box sx={{  }}>
              <h6 id={text} >Returning Viewers</h6>
              <h3 id={text} >100k</h3>
            </Box>
          </Grid>
          <Grid
            tabIndex="0"
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 1,
            }}
            onClick={() => setGraph(uniqueViewers)}
            className={
              graph === uniqueViewers
                ? "studio-tab-clicked studio-tab-mid"
                : "studio-tab studio-tab-mid "
            }
          >
            <Box sx={{ }}>
              <h6 id={text} >Unique Viewers</h6>
              <h3 id={text} >20k</h3>
            </Box>
          </Grid>
          <Grid
            tabIndex="0"
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 1,
            }}
            onClick={() => setGraph(subscribers)}
            className={
              graph === subscribers ? "studio-tab-clicked" : "studio-tab"
            }
          >
            <Box sx={{ }}>
              <h6 id={text} >Subscribers</h6>
              <h3 id={text} >326k</h3>
            </Box>
          </Grid>
        </Grid>
        <Graph data={graph}></Graph>
      </Box>

      <Box sx={{ margin: "0 auto", width: "80%", my: 5}}>
        <Grid container justifyContent="space-between">
          {/* left  */}
          <Grid xs={5.8}>
            <Box sx={{ p: 3, mb: 5 }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >When your viewers are on ProPlayers</h5>
                <p id={text}  className="card-text">
                  Your local time (GMT +0600) · Last 28 days
                </p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Not enough viewer data to show this report
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>See More</Button>
              </Box>
            </Box>
            <Box sx={{ p: 3, mb: 5 }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >Watch time from subscribers</h5>
                <p id={text}  className="card-text">Watch time · Last 28 days</p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Nothing to show for these dates
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>See More</Button>
              </Box>
            </Box>
            <Box sx={{ p: 3, mb: 5 }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >Age and gender</h5>
                <p id={text}  className="card-text">Views · Last 28 days</p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Not enough demographic data to show this report
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>See More</Button>
              </Box>
            </Box>
          </Grid>

          {/* right  */}
          <Grid xs={5.8}>
            <Box sx={{ p: 3, mb: 5  }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >Other channels your audience watches</h5>
                <p id={text}  className="card-text"> Last 28 days</p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Not enough eligible audience data to show this report.
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>Learn More</Button>
              </Box>
            </Box>
            <Box sx={{ p: 3, mb: 5 }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >Other videos your audience watched</h5>
                <p id={text}  className="card-text"> Last 7 days</p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Not enough eligible audience data to show this report.
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>Learn More</Button>
              </Box>
            </Box>
            <Box sx={{ p: 3, mb: 5 }} className="chart-container" id={card} >
              <Box>
                <h5 id={text} >Top geographies</h5>
                <p id={text}  className="card-text">Views · Last 28 days</p>
              </Box>
              <Box sx={{ my: 3 }}>
                <p id={text}  style={{ fontSize: "18px" }} className="card-text">
                  Not enough geography data to show this report
                </p>
              </Box>
              <Box>
                <Button sx={{ p: 0 }}>See More</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Audience;
