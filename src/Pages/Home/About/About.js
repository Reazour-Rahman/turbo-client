import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import img1 from '../../../assets/About/img (1).png'
import img2 from '../../../assets/About/img (2).png'
import img3 from '../../../assets/About/img (3).png'
import img4 from '../../../assets/About/img (4).png'
import './About.css'
const About = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box className='card'>
                        <img src={img1} alt="" />
                        <h3>Get Paid By Your Fans</h3>
                        <p>Accept Money From You Fans Through Tips</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                <Box className='card'>
                        <img src={img2} alt="" />
                        <h3>Grow Your Audience</h3>
                        <p>Join A Growing Community Of Young Millennials & Get New Fans </p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                <Box className='card'>
                        <img src={img3}  alt="" />
                        <h3>Transfer From YouTube</h3>
                        <p>Upload Your Videos From Youtube With An Easy Link Copy/Paste</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                <Box className='card'>
                        <img src={img4} alt="" />
                        <h3>Money From Social Site</h3>
                        <p>Sharing Your Blogs And Video Links On Other Sites You Can Make Money And Audience</p>
                    </Box>
                </Grid>
                </Grid>
        </div>
    );
};

export default About;