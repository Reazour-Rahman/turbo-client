import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const AmazonProducts = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '30px' }} style={{paddingLeft:"72px"}}>
            <ProfileHeader/>
            <Box sx={{ mb: '10px' }}>
                <Typography>Use CODE: proPlayer23 for 10% Discount</Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(12)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={2} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                width="100%"
                                image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography style={{ fontWeight: 600 }} component="div">
                                    Lorem ipsum dolor
                                </Typography>
                                <Typography style={{ fontWeight: 600 }} component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    $3323.00
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AmazonProducts;