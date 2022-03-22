import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './Likes.css';
import LikeList from './LikeList';
import LeftSection from './LeftSection';


const Like = () => {

    let theme;
    theme = localStorage.getItem("theme");
    let text = theme === "light" ? "black" : "darkLight";
    return (
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className="like-container">
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className='like-friction-element'>
                    <LeftSection />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={8} id={theme === "light" ? "moreLight" : "moreDark"}>
                <div className='like-friction-element-2'>

                    <section >
                        <LikeList />
                    </section>

                </div>
            </Grid>

        </Grid>
    );
};

export default Like;