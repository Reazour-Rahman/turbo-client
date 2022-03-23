import { Grid } from '@mui/material';
import React from 'react';
import UserProfileNavbar from '../UserProfileNavbar/UserProfileNavbar';
import UserProfileSearchBar from '../UserProfileSearchBar/UserProfileSearchBar';


const UserProfileHeader = ({email}) => {
    return (
        <Grid>
            <UserProfileSearchBar email={email}/>
            {/* <UserProfileNavbar email={email} /> */}
        </Grid>
    );
};

export default UserProfileHeader;