import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../Default.css";

const Commission = ({revenue, cost}) => {
  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";

  return (
    <div>
      <section className="three-card-bg" id={card}>


        <p id={text}>Commissions</p>

        <div className="top-align text-color-container">
          {/* <h2 className="default-margin">${(revenue[0].revenueGoal - revenue[0].netCashIF) - cost[0].cost}</h2> */}
          <h4 className="success">+11.4%</h4>
          <ArrowUpwardIcon id={text}/>
        </div>

        <p className="paragraph-size" id={text}>Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Commission;