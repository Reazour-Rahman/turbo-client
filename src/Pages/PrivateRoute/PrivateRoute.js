import { CircularProgress, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import SignUp from '../Authentication/SignUp/SignUp';
import BufferSkeleton from '../Home/Details/BufferSkeleton';
import Details from '../Home/Details/Details';
import MiniDrawer from '../Shared/MiniDrawer';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.firebase.user)
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate()
    const handleClose = () => {
      setOpen(false)
      navigate('/')
    };
    const isLoading = useSelector(state => state.firebase.isLoading);
    let location = useLocation();
    if (isLoading) { return <Details></Details> }
    // if (isLoading) { return <Stack sx={{py:5}} alignItems="center">
    // <CircularProgress />
    // </Stack> }
    if (user.email) {
        return children;
    }
    return    <> 
     <MiniDrawer></MiniDrawer>
    <SignUp open={open} handleClose={handleClose}></SignUp>
    </>;
};
export default PrivateRoute;
