import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import swal from "sweetalert";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const BookingProduct = ({ handleCloseBookinModal, open, product, time }) => {



    const user = useSelector((state) => state.firebase.user);
    const initialInfo = { clientName: user.displayName, clientEmail: user.email, }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }

        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {

        const bookingProduct = {

            ...bookingInfo,
            time,
            serviceName: product?.productTitle,
            date: new Date().toLocaleDateString()
        }

        fetch('https://proplayer-backend.vercel.app/bookingProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("server a gece");
                    swal(
                        "Good job!",
                        "Ordered Successfully",
                        "success"
                    );
                    handleCloseBookinModal();
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseBookinModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {product?.productTitle}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: "100%", m: 1 }}
                                label="Your name"
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: "100%", m: 1 }}
                                label="Your name"
                                name="clientName"
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                id="outlined-size-small"
                                size="small"
                            />
                            <TextField
                                sx={{ width: "100%", m: 1 }}
                                label="Size"
                                name="clientEmail"
                                onBlur={handleOnBlur}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: "100%", m: 1 }}
                                label="Phone"
                                type="number"
                                name="clientPhoen"
                                onBlur={handleOnBlur}
                                id="outlined-size-small"
                                size="small"
                            />
                            <Button
                                sx={{ m: 1 }}
                                type="submit"
                                variant="contained"
                            >Booking now</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingProduct;