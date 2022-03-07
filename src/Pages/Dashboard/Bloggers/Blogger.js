import { Avatar, Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const Blogger = (props) => {

    const { _id, bloggerName, category, bloggerEmail } =
        props.blogger;

    return (
        <Grid item xs={2} sm={4} md={2}>
            <Box>
                <Box>
                    <Card className="card-bg card-hover">
                        <CardActionArea>
                            <CardContent className="pd">
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M="
                                    alt="Nate Alyn"
                                    sx={{ mb: 2 }}
                                />




                                <Grid container >
                                    <Grid item xs={12}>
                                        <div className="name-color" >

                                            <span style={{ display: "flex", alignItems: "center" }}>


                                                <span style={{ display: "flex", flexDirection: "column" }} >
                                                    <small style={{ fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                        {bloggerName}
                                                    </small>
                                                    <small style={{ paddingBottom: "3px" }} className="date-color">{bloggerEmail}</small>
                                                    <small style={{ fontWeight: "bold", paddingBottom: "5px", fontSize: "13px" }} className="date-color">{category}</small>
                                                </span>
                                            </span>


                                        </div>
                                    </Grid>


                                </Grid>










                            </CardContent>

                            <Link to={`profile/${_id}`} style={{ textDecoration: "none" }}>
                                {/* <CardContent>
                                    <Typography
                                        className="card-color"
                                        variant="body2"
                                        color="text.secondary"
                                    >

                                    </Typography>
                                </CardContent> */}
                            </Link>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </Grid>
    );
};

export default Blogger;

