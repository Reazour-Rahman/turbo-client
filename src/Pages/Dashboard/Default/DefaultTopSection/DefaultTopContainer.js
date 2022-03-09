import React from "react";
import "../Default.css";
import DefaultTop from "./DefaultTop";
import DefaultAside from "./DefaultAside.js";
import Visitors from "./Visitors.tsx";

const DefaultTopContainer = () => {
  return (
    <div>
      <main className="default-top-container">
        {/* :::::::::::::::::::::::::::::
                Default top container left side
                :::::::::::::::::::::::::::::*/}
        <section className="column-width">

          <DefaultTop />
          {/* Views */}
          <div className="visitors-card-bg visitor-mt">
            <div className="visitors-title text-color-container">
              <p>Unique Visitors</p>
              <small className="indicators">
                <small className="indicator-circle text-color-container">
                  <span className="fullStop duration"></span> &nbsp;Session
                  Duration
                </small>
                <small className="indicator-circle text-color-container">
                  <span className="fullStop views"></span> &nbsp;Page Views
                </small>
              </small>
            </div>

            <Visitors />
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
