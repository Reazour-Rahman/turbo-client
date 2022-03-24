import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../Default.css";
import AsideActive from "./AsideActive.tsx";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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
mode = localStorage.getItem("theme");
const text = mode === "light" ? "black" : "darkLight";
const card = mode === "light" ? "moreLight" : "moreDark";
const bg = mode === "light" ? "lightest" : "darkish";

const DefaultAside = () => {
  const [cost, setCost] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-chamber-45567.herokuapp.com/cost")
      .then((res) => res.json())
      .then((data) => setCost(data));
  }, []);

  const [revenue, setRevenue] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-chamber-45567.herokuapp.com/revenue")
      .then((res) => res.json())
      .then((data) => setRevenue(data));
  }, []);

  /*last year Revenue */
  const lastYearRevenue = 2100 - 1000;

  const currentYearRevenue = revenue[0]?.netCashIF - cost[0]?.cost;

  console.log(currentYearRevenue, "rrb");
  const revenuePercentage =
    ((currentYearRevenue - lastYearRevenue) / lastYearRevenue) * 100;

  /* Last year cost */
  /* Cost */
  const costChange = ((cost[0]?.cost - 1000) / 1000) * 100;

  console.log("CostPercentageChange", costChange, "%");

  const condition0 = costChange < 0 ? "danger" : "success";

  const condition = revenuePercentage < 0 ? "danger" : "success";


  /* Achived */
  const thisYearRevenue =  revenue[1]?.netCashIF - cost[1]?.cost;
  console.log(thisYearRevenue)
  const thisYearGoal = revenue[1]?.revenueGoal;
  const growth = (thisYearRevenue/thisYearGoal) * 100;
  const fixedGrowth = growth.toFixed(2)


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
              value={fixedGrowth}
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
            Goal {thisYearGoal}
          </Button>
        </div>
      </section>

      {/* Active members */}
      <section className="aside-bg" id={card}>
        <div>
          <section
            className="three-card-bg"
            style={{ padding: "0px" }}
            id={card}
          >
            <p id={text}>2021 Revenue</p>

            <div className="top-align text-color-container">
              <h2 className="default-margin" id={text}>
                ${currentYearRevenue}
              </h2>
              <h4 className={condition}>{revenuePercentage.toFixed(2)}%</h4>
              {revenuePercentage < 0 ? (
                <ArrowDownwardIcon id={text} />
              ) : (
                <ArrowUpwardIcon id={text} />
              )}
            </div>

            <p className="paragraph-size" id={text}>
              Compare to last year 2020
            </p>
          </section>
        </div>
        <br /> <br /> <br />
        <section className="three-card-bg" style={{ padding: "0px" }} id={card}>
          <p id={text}>2021 Costs</p>

          <div className="top-align text-color-container">
            <h2 className="default-margin">${cost[0]?.cost}</h2>
            <h4 className={condition0}>{costChange.toFixed(2)}%</h4>

            {costChange < 0 ? (
              <ArrowDownwardIcon id={text} />
            ) : (
              <ArrowUpwardIcon id={text} />
            )}
          </div>

          <p className="paragraph-size" id={text}>
            Compare to last year 2020
          </p>
        </section>
      </section>
    </div>
  );
};

export default DefaultAside;
