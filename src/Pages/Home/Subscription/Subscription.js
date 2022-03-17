import { Avatar, Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import DotMenu from "./DotMenu"


const Subscription = () => {


    return (
        <Box sx={{ m: 5, mt: 2 }} style={{ marginLeft: "70px" }}>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 2, sm: 8, md: 8, lg: 12 }}>

                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sm={4} md={2} >
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
                                                <div className="" >
                                                    <span style={{}}>
                                                        <span style={{ display: "", flexDirection: "column" }} >

                                                            <div>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={1} sm={7} md={7} lg={10}>
                                                                        <small style={{ color: "white", fontWeight: "bold", paddingBottom: "3px", fontSize: "14px" }} >
                                                                            title
                                                                        </small>
                                                                    </Grid>
                                                                    <Grid item xs={1} sm={1} md={1} lg={1} >
                                                                        <DotMenu />
                                                                    </Grid>

                                                                </Grid>

                                                            </div>

                                                            <small style={{ paddingBottom: "3px" }} className="date-color">bloggerName</small><br />
                                                            <small style={{ paddingBottom: "5px", fontSize: "13px" }} className="date-color">views</small>
                                                        </span>
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                </Grid>






            </Grid>
        </Box >
    );
};

export default Subscription;

