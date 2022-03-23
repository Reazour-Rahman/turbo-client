import { Grid } from '@mui/material';
import React from 'react';
import ProfileSearchBar from '../ProfileSearchBar/ProfileSearchBar';

const ProfileHeader = () => {
    return (
        <Grid>
            <ProfileSearchBar />
        </Grid>
    );
};

export default ProfileHeader;