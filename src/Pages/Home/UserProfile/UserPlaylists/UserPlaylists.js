import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProfileHeader from "../UserProfileHeader/UserProfileHeader";

const UserPlaylists = () => {
    return (
        <div style={{paddingLeft:"51px"}}>
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

export default UserPlaylists;