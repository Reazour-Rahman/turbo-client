import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const About = () => {
    return (
        <Box sx={{ mt: '30px' }} style={{paddingLeft:"72px"}}>
            <ProfileHeader/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Box>
                            <Grid sx={{ mb: '20px' }}>
                                <Typography variant="h6">Description</Typography>
                            </Grid>
                            <Grid>
                                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed harum provident error et nihil modi eius molestiae aperiam quam, vel nemo itaque deleniti autem totam natus non? Perferendis, blanditiis ab?</Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, mt: "50px" }}>
                            <Grid sx={{ mb: '20px' }}>
                                <Typography variant="h6">Link</Typography>
                            </Grid>
                            <Grid container spacing={6}>
                                <Grid item spacing={6}>
                                    <Typography>Github link sdfklsdfjlksjdfkjsdklfjskldf</Typography>
                                    <Typography>Github link</Typography>
                                    <Typography>Github link</Typography>
                                </Grid>
                                <Grid item spacing={6}>
                                    <Typography>Github link</Typography>
                                    <Typography>Github link</Typography>
                                    <Typography>Github link</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ mt: "50px" }}>
                            <Grid sx={{ mb: '20px' }}>
                                <Typography variant="h6">Business enquiries</Typography>
                            </Grid>
                            <Grid>
                                <Typography>pro-player@gmail.com</Typography>
                                <Typography>pro-player@gmail.com</Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid sx={{ ml: '40px' }}>
                            <Grid sx={{ mb: '20px' }}>
                                <Typography variant="h6">Stats</Typography>
                            </Grid>
                            <Box>
                                <Typography>Joined julay 8, 2022</Typography>
                                <Typography>12312312 views</Typography>
                                <Typography>12312312 subscribers</Typography>
                                <Typography>123 videos</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;