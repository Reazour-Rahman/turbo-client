import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../Default.css";

const Commission = () => {
  return (
    <div>
      <section className="three-card-bg">


        <p>Commissions</p>

        <div className="top-align text-color-container">
          <h2 className="default-margin">$2,543</h2>
          <h4 className="success">+11.4%</h4>
          <ArrowUpwardIcon />
        </div>

        <p className="paragraph-size">Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Commission;