import { Box, Card, CardActionArea, CardContent, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ContentVideos from '../Videos/ContentVideos/ContentVideos';

const PopularVideo = (props) => {
    const { _id, title, video, bloggerName, uploadTime ,thumbnail} =
        props.popularVideo;
        let mode = localStorage.getItem("theme");
        const card = mode === "light" ? "moreLight" : "moreDark" ;
        const bg = mode === "light" ? "lightest" : "darkish";
        const text = mode === "light" ? "black" : "darkLight" ;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box>
                <Box>
                    <Card id={card}>
                        <CardActionArea>
                            <ContentVideos video={video} thumbnail ={thumbnail}></ContentVideos>
                            <Link to={`details/${_id}`} style={{ textDecoration: "none", fontWeight: 500 }}>
                                <CardContent>
                                    <p id={text}
                                        sx={{fontWeight: 500, mb: 2}}
                                        style={{ fontSize:"12px" }}
                                    >
                                        {title.slice(0, 33)}...
                                    </p>
                                    <small id={text}>
                                        {uploadTime}
                                    </small>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Box>
            </Box>
        </Grid>
    );
};

export default PopularVideo;