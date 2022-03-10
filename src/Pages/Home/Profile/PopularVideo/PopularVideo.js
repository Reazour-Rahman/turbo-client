import { Box, Card, CardActionArea, CardContent, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ContentVideos from '../Videos/ContentVideos/ContentVideos';

const PopularVideo = (props) => {
    const { _id, title, video, bloggerName, uploadTime } =
        props.popularVideo;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box>
                <Box>
                    <Card className="card-bg">
                        <CardActionArea>
                            <ContentVideos video={video}></ContentVideos>
                            <Link to={`details/${_id}`} style={{ textDecoration: "none", fontWeight: 500 }}>
                                <CardContent>
                                    <Typography
                                        sx={{fontWeight: 500, mb: 2}}
                                        className="card-color"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {title.slice(0, 53)}...
                                    </Typography>
                                    <small style={{fontWeight: 500}} className="date-color">
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