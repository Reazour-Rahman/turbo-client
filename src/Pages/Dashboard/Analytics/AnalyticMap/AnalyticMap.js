import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import "./AnalyticMap.css"

const AnalyticMap = () => {
    let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

    return (
        <div className="main">
            <div className="map" id={card}>
                <div className="pre">
                    <div>
                        <h6  id={text} className="header">Entrance of region</h6>
                    </div>
                    <div className="country-persentence">
                        <div className="throat">
                            <img className="banner-img" src="https://historicalmapchart.net/dist/img/og/logo-world-1815.png" alt="" />
                            <h2 className="header">37.39%</h2>
                            
                        </div>
                        <h4 id={text} className="banner-title">Top entrence region</h4>
                    </div>
                    <div className="country-persentence">
                        <li className="li">
                            <small id={text}>United States of America</small>37.39%
                            
                        </li>
                        <li className="li" id={text}>
                            <small>Brazil</small> 37.39%
                            
                        </li>
                        <li className="li" id={text}>
                            <small>India</small>37.39%
                            
                        </li> 
                        <li className="li" id={text}>
                            <small>China</small>37.39%
                            
                        </li>
                        <li className="li" id={text}>
                            <small>Malaysia</small>37.39%
                            
                        </li>
                        <li className="li" id={text}>
                            <small>Thiland</small>37.39%
                            
                        </li>
                        
                    </div>
                </div>

{/*============= Google map Added here ==============*/}

                <div className="google-map">
                <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default AnalyticMap;