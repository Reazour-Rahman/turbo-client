import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import "./AnalyticMap.css"

const AnalyticMap = () => {
    return (
        <div className="main">
            <div className="map">
                <div className="pre">
                    <div>
                        <h2 className="header">Entrance of region</h2>
                    </div>
                    <div className="country-persentence">
                        <div className="throat">
                            <img className="banner-img" src="https://historicalmapchart.net/dist/img/og/logo-world-1815.png" alt="" />
                            <h2 className="header">37.39%</h2>
                            
                        </div>
                        <h4 className="banner-title">Top entrence region</h4>
                    </div>
                    <div className="country-persentence">
                        <li className="li">
                            <small>United States of America</small>37.39%
                            
                        </li>
                        <li className="li">
                            <small>Brazil</small> 37.39%
                            
                        </li>
                        <li className="li">
                            <small>India</small>37.39%
                            
                        </li>
                        <li className="li">
                            <small>China</small>37.39%
                            
                        </li>
                        <li className="li">
                            <small>Malaysia</small>37.39%
                            
                        </li>
                        <li className="li">
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