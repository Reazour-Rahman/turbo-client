import React from 'react';
import './ChannelDashboard.css'
const ChannelDashboard = () => {
    return (
        <div>
            <div className='container'>
                <h2>Channel dashboard</h2>
                <div class="grid-container">
                    {/* 1st Column */}
                    <div className="first-column-size">

                        <div className="card">
                            <h6>Latest video performance</h6>
                            <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />
                            <div className="grid-carddetails-container">

                                <div class="grid-item">
                                    <p>Views</p>
                                    <p>Impressions click-through rate</p>
                                    <p>Average view duration</p>
                                </div>
                                <div class="grid-item " style={{ textAlign: "right" }}>
                                    <p>309</p>
                                    <p>12.4%</p>
                                    <p>1:05</p>
                                </div>

                                <a href="" style={{ textDecoration: "none" }}>GO TO VIDEO ANALYTICS</a><br />
                                <a href="" style={{ textDecoration: "none" }}>SEE COMMENTS </a>
                            </div>

                        </div>
                    </div>
                    {/* 2nd column */}
                    <div style={{ width: "100%" }}>
                        <div style={{ width: "100%", height: "450px" }}>
                            <div className="card">
                                <h6 style={{ paddingBottom: "0px" }}>Channel Analytics</h6>
                                <p >Current subscribers</p>
                                <h4>8</h4>
                                <hr />

                                <h6 style={{ paddingBottom: "0px" }}>Summary</h6>
                                <p>Last 28 days</p>
                                <div className="grid-carddetails-container">


                                    <div class="">

                                        <p>Views</p>
                                        <p>Watch time (hours)</p>
                                    </div>
                                    <div style={{ textAlign: "right" }} class="">

                                        <p>3</p>
                                        <p>0.0</p>
                                    </div>

                                </div>
                                <hr />
                                <p>Top videos</p>
                                <p>Last 48 hours-Views</p>

                                <a href="" style={{ textDecoration: "none" }}>GO TO CHANNEL ANALYTICS</a><br />
                            </div>
                        </div> <br />
                        <div style={{ width: "100%", backgroundColor: "green", height: "300px" }}>
                            <div className="card">
                                <h6>Latest Comments</h6>
                                <p>Channel comments that I haven't responded to</p>

                                <div className="grid-carddetails-container">
                                    <div class="">
                                        <p>Study Care - 1 week ago</p>
                                        <p>go ahead bro</p>
                                    </div>
                                    <div class="">
                                        <img style={{ width: "50%" }} src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />
                                    </div>
                                </div>
                                <hr />
                                <div className="grid-carddetails-container">
                                    <div class="grid-item">
                                        <p>Nillama som - 2 months ago</p>
                                        <p>Good Job</p>
                                    </div>
                                    <div class="grid-item">
                                        <img style={{ width: "50%" }} src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />
                                    </div>
                                </div>
                                <a href="" style={{ textDecoration: "none" }}>VIEW MORE</a><br />
                            </div>
                        </div>

                    </div>


                    {/* 3rd Column */}

                    <div style={{ width: "100%" }}>
                        <div className='third-column-second-row-size'>
                            <div className="card">
                                <h6>News</h6>
                                <img className="News-img" src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />
                                <div>


                                    <h6>We're back,Creators!</h6>
                                    <p>Take a look at the months creator roundup featuring all the latest ProPlayers news,updates and tips. All on the ProPlayers creators channel</p>



                                </div>
                                <a href="" style={{ textDecoration: "none" }}>WATCH NOW</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "25s0px" }}>
                            <div className="card">
                                <h6>Ideas for you</h6>

                                <div className="grid-carddetails-container">

                                    <div class="">
                                        <h6>Protect your channel</h6>
                                        <p>Your account is greater risk of attack without 2-step verification.</p>
                                        <p>Turn it on for extra security</p>
                                    </div>
                                    <div class="grid-item">
                                        <img style={{ width: "50%" }} src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />

                                    </div>
                                </div>
                                <a href="" style={{ textDecoration: "none" }}>GET STARTED</a>
                            </div>
                        </div>


                        <div style={{ width: "100%", height: "600px" }}>
                            <div className="card">
                                <h6>Creator Insider</h6>
                                <img className='third-column-third-row-img' src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="Pic" />
                                <div>


                                    <h6>This week at ProPlayers</h6>
                                    <p>Hello Insiders! we're back with a few launches this week</p>



                                </div>
                                <a href="" style={{ textDecoration: "none" }}>WATCH ON PRO-PLAYERS</a>
                            </div>
                        </div>

                    </div>






                </div>


            </div>
        </div >
    );
};

export default ChannelDashboard;