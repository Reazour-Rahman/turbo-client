import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import DotMenu from './DotMenu';

const Subscription = () => {
    let theme;
    theme = localStorage.getItem("theme");
    let text = theme === "light" ? "black" : "darkLight";
    return (
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} style={{ marginLeft: "70px" }}>
            <Grid item sx={{ display: 'flex' }} xs={4} sm={12} md={12} lg={12} id={theme === "light" ? "moreLight" : "moreDark"}>
                {[1, 2, 3, 4, 5, 6].map((c) =>
                    <div className='' >

                        <Card style={{ marginRight: "5px", marginTop: "15px" }}>

                            <CardMedia
                                component="img"

                                image="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M="
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">

                                    <div className='d-flex'>
                                        <div>                                <h2>This impressive paella is a</h2></div>
                                        <div><DotMenu></DotMenu></div>
                                    </div>
                                    <h6>Gaurav Sen</h6>
                                    <h6>125 watching</h6>

                                </Typography>

                            </CardContent>

                        </Card>



                    </div>
                )}
            </Grid>

        </Grid>
    );
};

export default Subscription;