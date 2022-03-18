import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../Default.css";

const Revenue = ({revenue, cost}) => {
  

const lastYearRevenue = (revenue[0]?.netCashIF - cost[0]?.cost) 
const lastYearRevenuePer  = (lastYearRevenue / cost[0]?.cost) * 100

const currentYearRevenue = (revenue[1]?.netCashIF - cost[1]?.cost) 
const currentYearRevenuePer  = (currentYearRevenue / cost[1]?.cost) * 100



const revenuePercentageChange = (currentYearRevenuePer - lastYearRevenuePer) / lastYearRevenue

console.log(currentYearRevenuePer, lastYearRevenuePer, revenuePercentageChange * 100);

  return (
    <div>
      <section className="three-card-bg">


        <p>Revenue</p>

        <div className="top-align text-color-container">
   
            <h2 className="default-margin">${revenue[1]?.netCashIF - cost[1]?.cost}</h2>
            <h4 className="danger">{}%</h4>        
          <ArrowDownwardIcon />
        </div>

        <p className="paragraph-size">Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Revenue;
