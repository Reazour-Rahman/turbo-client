import React from 'react';
import "./AnalyticPage.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AnalyticPage = () => {
    return (
        <div className="containers">

            <div className="page-containers">
                <div className="visited-pages">
                    <p>Most visited pages</p>
                    <div className="rooms">
                        <div className="room">
                            <div>
                                <p className="p-header">Home</p>
                                <p>/app/home</p>
                            </div>
                            <div>
                                <p className="p-view">2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p className="p-header">Home</p>
                                <p>/app/home</p>
                            </div>
                            <div>
                                <p className="p-view">2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p className="p-header">Home</p>
                                <p>/app/home</p>
                            </div>
                            <div>
                                <p className="p-view">2342</p>
                            </div>
                        </div>
                        <hr />

                        <div className="room">
                            <div>
                                <p className="p-header">Home</p>
                                <p>/app/home</p>
                            </div>
                            <div>
                                <p className="p-view">2342</p>
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
                                <p className="p-header">Facebook</p>
                                <p>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view">63%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <TwitterIcon style={{color: "#1774EB", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header">Twitter</p>
                                <p>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view">53%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <YouTubeIcon style={{color: "#FF0000", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header">YouTube</p>
                                <p>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view">34%</p>
                            </div>
                        </div>
                        <hr />
                        <div className="room">
                            <div className="room-i">
                                <div>
                                    <LinkedInIcon style={{color: "#0077B4", fontSize:"50px", marginRight: 15}}/>
                                </div>
                                <div>
                                <p className="p-header">LinkedIn</p>
                                <p>Total: 342</p>
                                </div>
                            </div>
                            <div>
                                <p className="p-view">23%</p>
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