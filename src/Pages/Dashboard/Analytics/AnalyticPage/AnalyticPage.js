import React from 'react';
import "./AnalyticPage.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AnalyticPage = () => {
    let mode;
    mode = localStorage.getItem("theme")
    const text= mode === "light" ? "black" : "darkLight" ;
    const card= mode === "light" ? "moreLight" : "moreDark";
    const bg= mode ==="light" ? "lightest" : "darkish";

    return (
        <div className="containers">

            <div className="page-containers" id={card}>
                <div className="visited-pages">
                    <p id={text}>Most visited pages</p>
                    <div className="rooms" id={text}>
                        <div className="room" id={text}>
                            <div >
                                <p className="p-header" id={text} >Home</p>
                                <p className="p-link" id={text}>dashboard/home</p>
                            </div>
                            <div>
                                <p className="p-view" id={text}>2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p  className="p-header" id={text}>Room</p>
                                <p className="p-link" id={text}>dashboard/room</p>
                            </div>
                            <div>
                                <p className="p-view" id={text}>2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p className="p-header" id={text}>Message</p>
                                <p className="p-link" id={text}>dashboard/message</p>
                            </div>
                            <div>
                                <p className="p-view" id={text}>2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p className="p-header" id={text}>Game</p>
                                <p className="p-link" id={text}>dashboard/game</p>
                            </div>
                            <div>
                                <p className="p-view" id={text}>2342</p>
                            </div>
                        </div>
                        <hr />

                    </div>

                </div>

{/* =========================================================== */}

                <div className="media-pages">
                <p>Social media referrals</p>
                    <div className="rooms">
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <FacebookIcon style={{color: "#1774EB", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header" id={text}>Facebook</p>
                                <p className="p-count" id={text}>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view" id={text}>63%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <TwitterIcon style={{color: "#1774EB", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header" id={text}>Twitter</p>
                                <p className="p-count" id={text}>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view" id={text}>53%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <YouTubeIcon style={{color: "#FF0000", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header" id={text}>YouTube</p>
                                <p className="p-count" id={text}>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view" id={text}>34%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <LinkedInIcon style={{color: "#0077B4", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header" id={text}>LinkedIn</p>
                                <p className="p-count" id={text}>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view" id={text}>23%</p>
                            </div>
                        </div>
                        <hr />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticPage;