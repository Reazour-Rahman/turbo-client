import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Progress from '../../BLogs/Progress';
import Content from '../Content/Content';
import ProfileHeader from '../ProfileHeader/ProfileHeader';


const Contents = (props) => {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const contentUrl = `https://api.jsonbin.io/b/6203768369b72261be560c47`;
        setTimeout(() => {
            fetch(contentUrl)
                .then((response) => response.json())
                .then((data) => setContents(data));
            setLoading(true);
        }, 4000);
    }, []);
    return (
        <Box style={{paddingLeft:"72px"}}>
            <ProfileHeader/>
            <Grid sx={{ mb: '20px' }}>
                <Typography style={{ fontWeight: 900 }}>
                    Videos
                </Typography>
            </Grid>
            <Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 8, lg: 12 }}
                >
                    {loading ? (
                        contents.map((content) => <Content key={content._id} content={content}></Content>)
                    ) : (
                        <div>
                            <Progress />
                        </div>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default Contents;