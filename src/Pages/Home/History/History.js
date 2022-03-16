import React, { useState } from 'react';


const History = ({ viewerEmail }) => {




    return (
        <div>
            <React.Fragment>
                <div style={{ color: "white", marginLeft: "150px", marginRight: "15px" }}>
                    <h2>Watch History</h2>
                    <div className="row">
                        <div className="col-sm-8 d-flex">
                            <div className="col-sm-2 col-lg-2 " style={{ marginLeft: "20px", marginRight: "20px" }} >
                                {/* <img src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" alt="" /> */}
                                {viewerEmail}
                            </div>
                            <div className="col-sm-6 col-lg-9">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi non eaque ratione modi voluptatum ipsam velit. Velit porro omnis nulla!
                                {viewerEmail}
                            </div>
                        </div>
                        <div className="col-sm-4 bg-primary  ">
                            Search

                        </div>
                    </div>

                </div >
            </React.Fragment>
        </div >
    );
};

export default History;