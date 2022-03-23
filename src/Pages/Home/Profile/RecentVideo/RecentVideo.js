import { Box, Card, CardActionArea, CardContent, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ContentVideos from '../Videos/ContentVideos/ContentVideos';

const RecentVideo = (props) => {
    const { _id, title, video, uploadTime, thumbnail } =
        props.recentVideo;

    let mode = localStorage.getItem("theme");
    const card = mode === "light" ? "moreLight" : "moreDark" ;
    const text = mode === "light" ? "black" : "darkLight" ;

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box>
                <Box>
                    <Card className="" id={card}>
                        <CardActionArea>
                            <ContentVideos video={video} thumbnail={thumbnail}></ContentVideos>
                            <Link to={`details/${_id}`} style={{ textDecoration: "none" }}>
                                <CardContent>
                                    <p
                                        style={{ fontWeight: 500, fontSize:"12px" }}
                                        id={text}
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

export default RecentVideo;