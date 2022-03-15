import { Grid } from '@mui/material';
import React from 'react';
import UserFeaturedVideos from '../UserFeaturedVideos/UserFeaturedVideos';
import UserPopularVideos from '../UserPopularVideos/UserPopularVideos';
import UserRecentVideos from '../UserRecentVideos/UserRecentVideos';


const UserProfileHome = ({email}) => {
    return (
        <Grid>
            <UserFeaturedVideos email={email}/>
            <UserRecentVideos email={email} />
            <UserPopularVideos email={email} />
        </Grid>
    );
};

export default UserProfileHome;