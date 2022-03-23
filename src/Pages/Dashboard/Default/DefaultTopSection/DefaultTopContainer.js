import React from "react";
import "../Default.css";
import DefaultTop from "./DefaultTop";
import DefaultAside from "./DefaultAside.js";
import Visitors from "./Visitors.tsx";

const DefaultTopContainer = () => {
  let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

  return (
    <div>
      <main className="default-top-container">
        {/* :::::::::::::::::::::::::::::
                Default top container left side
                :::::::::::::::::::::::::::::*/}
        <section className="column-width">

          <DefaultTop />
          {/* Views */}
          <div className="visitors-card-bg visitor-mt" id={card}>
            <div className="visitors-title text-color-container">
              <p id={text}>Unique Visitors</p>
              <small className="indicators">
                <small className="indicator-circle text-color-container" id={text}>
                  <span className="fullStop duration" ></span> &nbsp;Total Views
                </small>
                <small className="indicator-circle text-color-container" id={text}>
                  <span className="fullStop views"></span> &nbsp;Page Views
                </small>
              </small>
            </div>

            <Visitors id={text}/>
          </div>

        </section>

        {/* :::::::::::::::::::::::::::::
                Default top container Right side
                :::::::::::::::::::::::::::::*/}
        <section className="column-width">
          <DefaultAside/>
        </section>
      </main>
    </div>
  );
};

export default DefaultTopContainer;
