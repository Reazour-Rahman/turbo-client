import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./overview.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { height } from "@mui/system";
// import ClickableDiv from "react-clickable-div";
// import "react-clickable-div/dist/index.css";
import Graph from "../Graph/Graph";
const views = [
  {
    name: "Jan 2, 2022",
    yAxis: 4000,
  },
  {
    name: "Feb 1, 2022",
    yAxis: 3000,
  },
  {
    name: "Feb 5, 2022",
    yAxis: 2000,
  },
  {
    name: "Feb 6, 2022",
    yAxis: 2780,
  },
  {
    name: "Feb 7, 2022",
    yAxis: 1890,
  },
  {
    name: "Feb 8, 2022",
    yAxis: 2390,
  },
  {
    name: "Feb 10, 2022",
    yAxis: 3490,
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
const watchtime = [
  {
    name: "Jan 2, 2022",
    yAxis: 1234,
  },
  {
    name: "Feb 1, 2022",
    yAxis: 4645,
  },
  {
    name: "Feb 5, 2022",
    yAxis: 2432,
  },
  {
    name: "Feb 6, 2022",
    yAxis: 7978,
  },
  {
    name: "Feb 7, 2022",
    yAxis: 5344,
  },
  {
    name: "Feb 8, 2022",
    yAxis: 4343,
  },
  {
    name: "Feb 10, 2022",
    yAxis: 4235,
  },
];

const Overview = () => {
  // const [clickedTab, setClickedTab]
  const [graph, setGraph] = useState(views);
  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";
  //over view color css
  return (
    <Box >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        // columnSpacing={2}
        sx={{ m: 2 }}
        className="overview"
      >
        <Grid xs={7} className="overview-left" id={card}>
          <Box sx={{ mx: "auto", my: 2 }}>
            <h3 style={{ textAlign: "center"}} id={text} >
              <b>3M views in the last 28 days</b>
            </h3>
          </Box>
          <Box className="chart-container">
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
                onClick={() => setGraph(views)}
                className={
                  graph === views ? "studio-tab-clicked" : "studio-tab"
                }
              >
                <Box sx={{  }}>
                  <h6 id={text} >Views</h6>
                  <h3 id={text} >3M</h3>
                </Box>
              </Grid>
              <Grid
                tabIndex="0"
                xs={4}
                // className="studio-tab studio-tab-mid"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 1,
                }}
                onClick={() => setGraph(watchtime)}
                className={
                  graph === watchtime
                    ? "studio-tab-clicked studio-tab-mid"
                    : "studio-tab studio-tab-mid "
                }
              >
                <Box sx={{ }}>
                  <h6 id={text} >Watchtime (hours)</h6>
                  <h3 id={text} >125 Hours</h3>
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
                <Box sx={{  }}>
                  <h6 id={text} >Subscribers</h6>
                  <h3 id={text} >326k</h3>
                </Box>
              </Grid>
            </Grid>
            {/* chart starts  */}

            <Graph data={graph}></Graph>
          </Box>
        </Grid>
        {/* right side cards  */}
        <Grid item xs={4}>
          {/* card stats  */}
          <Card sx={{ width: "80%" }} className="overview-left" id={card}>
            <CardContent>
              <Box sx={{ py: 1, borderBottom: 1 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{}}
                  id={text} 
                >
                  Real Time
                </Typography>
                <Typography sx={{ mb: 1.5 }} id={text}  style={{ }}>
                  updating live
                </Typography>
              </Box>
              <Box sx={{ py: 1, borderBottom: 1, borderColor: "grey.500" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{mt: 1 }}
                  id={text} 
                >
                  326k
                </Typography>
                <Typography sx={{ mb: 1.5 }} style={{  }} id={text} >
                  Subscribers
                  <br />
                  <Button
                    sx={{
                      textAlign: "left",
                      marginLeft: "-7px",
                      // fontWeight: "bold",
                      fontSize: "16px",
                    }}
                    id={text} 
                  >
                    See Live Event
                  </Button>
                </Typography>
              </Box>
              <Box sx={{ py: 1, borderBottom: 1}}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{  mt: 1 }}
                  id={text} 
                >
                  3M
                </Typography>
                <Typography sx={{ mb: 5 }} style={{ }} id={text} >
                  Views · Last 48 hours
                  <br />
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  
                }}
                id={text} 
              >
                <Typography variant="body2" id={text} >-48hour</Typography>
                <Typography variant="body2" id={text} >now</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ fontSize: "16px" }}>
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
