import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const PlayList = () => {
    return (
        <div style={{paddingLeft:"72px"}}>
            <ProfileHeader/>
            <Grid>
                <Grid sx={{mt: '40px'}}>
                    <Typography 
                    style={{ 
                        fontWeight: 400, 
                        fontSize: 22 
                        }}
                        >
                        PlayList
                        </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default PlayList;