import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BookingProduct = ({handleCloseBookinModal, open}) => {
    


    return (
        <div>
            
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseBookinModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{textAlign: 'center'}}>{"Booking For Buy"}</DialogTitle>
                <DialogContent>
                <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Your Name"
                            type="text"
                            // onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Email"
                            type="text"
                            // onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Phone"
                            type="number"
                            // onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Product-Title"
                            type="text"
                            // onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseBookinModal}>Disagree</Button>
                    <Button onClick={handleCloseBookinModal}>Booking</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BookingProduct;