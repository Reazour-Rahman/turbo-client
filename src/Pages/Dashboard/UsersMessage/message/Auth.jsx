import React from 'react';
import SignUp from '../../../Authentication/SignUp/SignUp';
import MiniDrawer from '../../../Shared/MiniDrawer';

const Auth = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <>
            <MiniDrawer></MiniDrawer>
            <SignUp open={open} handleClose={handleClose}></SignUp>
            </>
        </div>
    );
};

export default Auth;