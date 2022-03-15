import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Grid, TextField, Typography } from '@mui/material';
import MenuBar from '../../../../MenuBar/MenuBar/MenuBar';
import UploadPicture from '../UploadPicture/UploadPicture';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import useFirebase from '../../../../../Hooks/useFirebase';
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import {useState} from 'react'



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProfile({ handleOpenModal }) {
    const [open, setOpen] = React.useState(false);
    const [roomName, setRoomName] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openPictureModal, setOpenPictureModal] = React.useState(false);

    const handleOpenUpdatePicture = () => {
        setOpenPictureModal(true);
    };

    const handleCloseUpdatePicture = () => {
        setOpenPictureModal(false);
    };


    const handleOnSubmit = e => {      
        console.log(roomName)
        e.preventDefault();
    }



    /* :::::::::::::::::::::::::::::
    Send Data to Database
    :::::::::::::::::::::::::::::::*/
    // const { user } = useFirebase();
    const user = useSelector((state) => state.firebase.user)

    

    const bloggerName = user.displayName;
    const bloggerEmail = user.email;
    const bloggerPhoto = user.photoURL;
    const date = new Date();




    return (
        <div>
            <Dialog
                style={{ textAlign: 'center', }}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent sx={{ width: '600px', backgroundColor: '#091a2b' }}>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                        <Button onClick={handleClose}>
                            <ArrowBackIcon></ArrowBackIcon>
                        </Button>

                        <Button onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </Button>
                    </Grid>
                        <Box>
                            <img style={{ height: '200px', width: '100%' }} src="https://i.pinimg.com/736x/cc/4f/4a/cc4f4a21ed639f807585dfe2613adfd6.jpg" alt="" />
                        </Box>
                        <DialogTitle 
                        style={{ 
                            fontSize: '22px', 
                            fontWeight: 700, 
                            color: 'rgba(255, 255, 255, 0.905)' 
                            }}
                            >{"Create Your Channel Name"}
                            </DialogTitle>
                        <Typography 
                        style={{ 
                            fontWeight: 400 
                            }}>
                            <small style={{ fontWeight: 400 }}>Your profile picture appears next to your videos and comments, and in other places. It's your signature image on Por-Player.</small>
                        </Typography>
                        <br />
                        <TextField
                            style={{ width: '100%', marginTop: '20px', backgroundColor: 'rgba(221, 221, 201, 0.905)', marginBottom: '20px', borderRadius: '10px' }}
                            id="outlined-basic"
                            onBlur={e => setRoomName(e.target.value)}
                            placeholder="Your Room Name"
    
                            hiddenLabel
                            variant="filled"
                            type="text"
                            required
                        />
                        <Typography style={{ fontWeight: 400 }}>
                            <small style={{ fontWeight: 400 }}>I understand that I am creating a new Profile Account with its own settings, including Pro-Player search and watch history. Learn more</small>
                        </Typography>
                        <Button
                            onClick={handleOpenUpdatePicture}
                            sx={{ width: "25%", m: 1, mt: 3 }}
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>

                        <Button
                            sx={{ width: "25%", m: 1, mt: 3 }}
                            type="submit"
                            variant="contained"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                </DialogContent>
            </Dialog>
            <MenuBar handleClickOpen={handleClickOpen} ></MenuBar>
            <UploadPicture
                roomName = {roomName}
                openPictureModal={openPictureModal}
                handleClose = {handleClose}
                handleCloseUpdatePicture={handleCloseUpdatePicture}
            ></UploadPicture>
        </div>
    );
}





/* #102841
const {user} = useFirebase();
let userEmail= user.email; */