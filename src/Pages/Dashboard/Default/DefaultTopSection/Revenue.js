import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../Default.css";

const Revenue = ({revenue, cost}) => {
  
/* Revenue */
const lastYearRevenue = (revenue[0]?.netCashIF - cost[0]?.cost) 
const lastYearRevenuePer  = (lastYearRevenue / cost[0]?.cost) * 100

const currentYearRevenue = (revenue[1]?.netCashIF - cost[1]?.cost) 
const currentYearRevenuePer  = (currentYearRevenue / cost[1]?.cost) * 100

const revenuePercentage = ((currentYearRevenue - lastYearRevenue) / lastYearRevenue) * 100

console.log("RevenuePercentageChange", revenuePercentage,"%");


const condition = revenuePercentage < 0 ? "danger" : "success";

let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

  return (
    <div>
      <section className="three-card-bg" id={card}>


        <p id={text}>Revenue</p>

        <div className="top-align text-color-container">
   
            <h2 className="default-margin"  id={text}>${revenue[1]?.netCashIF - cost[1]?.cost}</h2>
            <h4 className={condition}>{revenuePercentage}%</h4>        
          {revenuePercentage < 0 ? <ArrowDownwardIcon  id={text}/> : <ArrowUpwardIcon id={text}/>}
        </div>

        <p className="paragraph-size"  id={text}>Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Revenue;
