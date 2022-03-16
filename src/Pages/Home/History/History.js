import { Grid } from '@mui/material';
import React, { useState } from 'react';
import './History.css';
import HistoryList from './HistoryList';
import HistoryRight from './HistoryRight';
import HistoryVideo from './HistoryVideo'


const History = () => {
   
    let theme;
    theme = localStorage.getItem("theme");
    let text = theme === "light" ? "black" : "darkLight" ;
    return (
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className="history-container">
            <Grid item xs={8} sm={8} md={9} lg={8} id={ theme === "light" ? "moreLight" : "moreDark" }>
                <div className='history-friction-element'>
                    <h5 id={text}>Watch history</h5>
                    <br />
                    <h5 id={text}>All time</h5>
                    <br />
                    <section >
                    {/* :::::::::::::::::::::::::::::::
                    Please Map here for Video dynamic
                    :::::::::::::::::::::::::::::::::*/}
                    <HistoryList/>
                    </section>

                </div>
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={4}>
                <div className='history-friction-element-2'>
                    <HistoryRight/>
                </div>
            </Grid>
        </Grid>
    );
};

export default History;