import React from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../Default.css";
import AsideActive from "./AsideActive.tsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{ color: "aliceblue", fontSize: "20px", fontWeight: "bold" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";
const DefaultAside = () => {
  return (
    <div className="aside-container">
      {/* Monthly target */}
      <section className="aside-bg " id={card}>
        <div className="aside-inner-element">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>Yearly Target</p>
            <br />
            <CircularProgressWithLabel
              variant="determinate"
              value={75}
              size={150}
              id={text}
            />{" "}
          </div>
          <br />
          <small
            className="text-color-container"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span id={text}>You need abit more effort to </span>
            <span id={text}>hit monthly target</span>
          </small>
          <br />
          <Button
            variant="outlined"
            className="text-color-container"
            size="small"
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Active members */}
      <section className="aside-bg" id={card} >
        <div style={{}}>
          <AsideActive />
          <div className="top-align text-color-container">
            <h2 id={text} className="default-margin">$2,543</h2>
            <h4 className="success">-11.4%</h4>
            <ArrowUpwardIcon id={text} />
          </div>

          <p id={text} className="paragraph-size">Active Members</p>
          <p id={text} className="paragraph-size">Status is almost ok</p>
          <p id={text} className="paragraph-size">Need To Apply Strategy</p>
        </div>
      </section>
    </div>
  );
};

export default DefaultAside;
