import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase'
import { CircularProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const AdminRoute = ({children, ...rest}) => {
    const user = useSelector((state) => state.firebase.user)
    const admin = useSelector((state) => state.firebase.admin)
    const isLoading = useSelector((state) => state.firebase.isLoading)
    let location = useLocation();

    if (isLoading) { return  <Stack sx={{py:5}} alignItems="center">
    <CircularProgress />
    </Stack> }
    if (user?.email && admin) {
      return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
