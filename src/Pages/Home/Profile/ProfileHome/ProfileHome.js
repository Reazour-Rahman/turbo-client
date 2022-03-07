import { Grid } from '@mui/material';
import React from 'react';
import FeaturedVideos from '../FeaturedVideos/FeaturedVideos';
import PopularVideos from '../PopularVideos/PopularVideos';
import RecentVideos from '../RecentVideos/RecentVideos';

const ProfileHome = () => {
    return (
        <Grid>
            <FeaturedVideos />
            <RecentVideos />
            <PopularVideos />
        </Grid>
    );
};

export default ProfileHome;