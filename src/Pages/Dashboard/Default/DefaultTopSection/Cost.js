import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../Default.css";

const Cost = ({cost}) => {
  /* Cost */
  const costChange = ((cost[1]?.cost - cost[0]?.cost) / cost[0]?.cost) * 100;

  console.log("CostPercentageChange", costChange,"%");

  const condition = costChange < 0 ? "danger" : "success"

  let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";


  return (
    <div>
      <section className="three-card-bg" id={card}>


        <p id={text}>Costs</p>

        <div className="top-align text-color-container">
          
            <h2 className="default-margin">${cost[1]?.cost}</h2>
            <h4 className={condition}>{costChange.toFixed(2)}%</h4>

            {costChange < 0 ? <ArrowDownwardIcon id={text} /> : <ArrowUpwardIcon id={text}/>}
        </div>

        <p className="paragraph-size" id={text}>Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Cost;