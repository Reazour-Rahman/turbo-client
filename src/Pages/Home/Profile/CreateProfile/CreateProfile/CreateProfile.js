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



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProfile({ handleOpenModal }) {
    const [open, setOpen] = React.useState(false);
    const [loadingData, setLoadingData] = React.useState({})

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


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoadingData = { ...loadingData };
        newLoadingData[field] = value;
        setLoadingData(newLoadingData);
    };

    const handleOnSubmit = e => {
        console.log(loadingData.userName)
        e.preventDefault();
    }


    
/* :::::::::::::::::::::::::::::
Send Data to Database
:::::::::::::::::::::::::::::::*/
const {user} = useFirebase();

const bloggerName = user.displayName;
const bloggerEmail = user.email;
const bloggerPhoto = user.photoURL;
const date = new Date();


// const commentPost = e => {
//     console.log(comment,blogId);
//     e.preventDefault()
//     const commentData = {
//       id: Math.random().toString(36).substring(2, 9),
//       comment : comment,
//       blogId: blogId,
//       username: user?.displayName,
//       userEmail: user?.email,
//       createdAt: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
//       userImage : user?.photoURL
//     }
//     if(comment){
//       axios.put(`https://aqueous-tor-77774.herokuapp.com/comment/${blogId}`, [commentData, ...backendComment])
//     .then(data => {
//       setBackendComment([commentData, ...backendComment]);
//       e.target.reset()
//       setComment('')
//     })
    
//     }
//     else{
//       return
//     }
    
//     console.log(comment,blogId);
//     console.log('backend', backendComment);
//   }




    return (
        <div>
            <Dialog
                style={{ textAlign: 'center', }}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent sx={{ width: '600px', opacity: 0.9 }}>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                        <Button onClick={handleClose}>
                            <ArrowBackIcon></ArrowBackIcon>
                        </Button>

                        <Button onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </Button>
                    </Grid>
                    <form onSubmit={handleOnSubmit}>
                        <Box>
                            <img style={{ height: '200px', width: '100%' }} src="https://i.pinimg.com/736x/cc/4f/4a/cc4f4a21ed639f807585dfe2613adfd6.jpg" alt="" />
                        </Box>
                        <DialogTitle style={{ fontSize: '22px', fontWeight: 700, }}>{"Create Your Channel Name"}</DialogTitle>
                        <Typography>
                            Your profile picture appears next to your videos and comments, and in other places. It's your signature image on Por-Player.
                        </Typography>
                        <br />
                        <TextField
                            style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}
                            id="outlined-basic"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="outlined"
                            name="userName"
                        />
                        <Typography>
                            I understand that I am creating a new Profile Account with its own settings, including Pro-Player search and watch history. Learn more
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
                            Cencle
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
            <MenuBar handleClickOpen={handleClickOpen} ></MenuBar>
            <UploadPicture
                openPictureModal={openPictureModal}
                handleCloseUpdatePicture={handleCloseUpdatePicture}
            ></UploadPicture>
        </div>
    );
}





/* #102841
const {user} = useFirebase();
let userEmail= user.email; */