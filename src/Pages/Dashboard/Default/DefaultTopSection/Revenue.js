import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../Default.css";

const Revenue = () => {
  return (
    <div>
      <section className="three-card-bg">


        <p>Revenue</p>

        <div className="top-align text-color-container">
          <h2 className="default-margin">$2,543</h2>
          <h4 className="danger">-11.4%</h4>
          <ArrowDownwardIcon />
        </div>

        <p className="paragraph-size">Compare to last year 2021</p>


      </section>
    </div>
  );
};

export default Revenue;
