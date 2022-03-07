import { Grid } from '@mui/material';
import React from 'react';
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar';
import ProfileSearchBar from '../ProfileSearchBar/ProfileSearchBar';

const ProfileHeader = () => {
    return (
        <Grid>
            <ProfileSearchBar />
            <ProfileNavbar />
        </Grid>
    );
};

export default ProfileHeader;