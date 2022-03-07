import { Box, Container, Grid, ListItemIcon, MenuItem, Typography } from '@mui/material';
import React from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <Grid sx={{ flexGrow: 1, backgroundColor: 'black', mt: 10 }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Grid sx={{ mt: 2 }}>
                                <img style={{ width: '250px' }} src={logo} alt="" />
                            </Grid>


                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid>
                            <Typography style={{ fontSize: "30px", fontWeight: "bold", color: 'yellow' }}>About Us</Typography>
                            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus?</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography style={{ fontSize: "30px", fontWeight: "bold", color: 'yellow' }}>Contact Us</Typography>
                        <Grid>
                            <MenuItem >
                                <ListItemIcon sx={{ color: 'yellow' }}>
                                    <PhoneInTalkIcon fontSize="medium" />
                                </ListItemIcon>
                                +008 978231
                            </MenuItem>
                            <MenuItem >
                                <ListItemIcon sx={{ color: 'yellow', }}>
                                    <AttachEmailIcon fontSize="medium" />
                                </ListItemIcon>
                                pro@player.com
                            </MenuItem>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Footer;

// https://i.pinimg.com/originals/4f/51/3e/4f513e2e6ebdd99d743b8925195f4bbf.jpg