import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, IconButton, Input, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useSelector } from 'react-redux';


/* Thumb */
import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../../firebase";
import "../../../../Upload/CloudStorage.css";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Progress from "../../../../Upload/Progress";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ImageIcon from '@mui/icons-material/Image';


export default function UploadPicture({ openPictureModal, handleCloseUpdatePicture, roomName,handleClose }) {

/* :::::::::::::::::::::::::::::
Thumbnail
:::::::::::::::::::::::::::::::*/
const [progressBar, setProgress] = useState(0);
const [title, setTitle] = useState("");
const [image, setImage] = useState("");

const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
};

const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
    "state_changed",
    (snapshot) => {
        const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
    },
    (error) => console.log(error),
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        setImage(downloadURL)
        });
    }
    );
};



  const [cover, setCover] = React.useState('https://timelinecovers.pro/facebook-cover/download/anime-one-piece-monkey-d-luffy-in-hat-facebook-cover.jpg')
  const [profile, setProfile] = React.useState('https://c4.wallpaperflare.com/wallpaper/535/25/215/anime-one-piece-monkey-d-luffy-wallpaper-preview.jpg')


  const user = useSelector((state) => state.firebase.user)
  console.log(user);

  const handleCreateRoom = () => {
    const data = {
      roomName  : roomName,
      cover : cover,
      profile : image
    }
    axios.put(`https://grass-dour-wasp.glitch.me/users/room/${user?.email}`, data) 
    console.log(data);
    handleCloseUpdatePicture()
    handleClose()
  }

  return (
    <div>
      <Dialog

        style={{ textAlign: "center" }}
        open={openPictureModal}
        onClose={handleCloseUpdatePicture}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent sx={{ backgroundColor: '#091a2b' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button onClick={handleCloseUpdatePicture}>
              <ArrowBackIcon></ArrowBackIcon>
            </Button>

            <Button onClick={handleCloseUpdatePicture}>
              <CloseIcon></CloseIcon>
            </Button>
          </Grid>
          <Box style={{ marginBottom: '40px' }}>
            <Typography style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>
              Nice work! <br /> Your channel 'Super Awesome Channel' has been created.
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.905)' }} variant="small">
              Next, follow the steps to complete your channel. You can do these steps now or come back to them later.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img style={{ height: '200px', width: '100%' }} src="https://cdn2.f-cdn.com/contestentries/1683544/21556645/5dee7cd109617_thumb900.jpg" alt="" />
            </Box>
          </Box>

          <Box style={{ marginBottom: '40px' }}>
            <DialogTitle 
            style={{ 
              fontWeight: 600, 
              color: 'rgba(255, 255, 255, 0.905)' 
              }} 
              id="alert-dialog-title"
              >
              {"Upload Your Profile Picture"}
            </DialogTitle>
            <DialogContentText 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.905)' 
              }} 
              id="alert-dialog-description">
              Your profile picture appears next to your videos and comments, and in other places. It's your signature image on Por-Player.
            </DialogContentText>
            <div style={{display:"flex", justifyContent:"center"}}>
            <form onSubmit={formHandler}>
                    <div class="file has-name is-boxed">
                        <label class="file-label">
                        <input
                        style={{padding:"0px"}}
                            class="file-input"
                            type="file"
                            accept="image/*"
                            name="resume"
                            // alt="thumbnail"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <span class="file-cta">
                            <span class="file-icon">
                            <ImageIcon/>
                            </span>
                            <span class="file-label">Choose a Thumbnail</span>
                        </span>
                        <span class="file-name">{title}</span>
                        </label>
                    </div>
                    {/* <button type="submit">Upload</button> */}

                    {progressBar < 0.1 ? null : <Progress progressBar={progressBar} />}


                    {progressBar === 100 ? (
                        <Button
                        variant="outlined"
                        color="success"
                        className={`full-width ${
                            title === "" ? "conditional-btn" : null
                        }`}
                        endIcon={<ArrowCircleDownIcon />}
                        >
                        Please scroll down
                        </Button>
                    ) : (
                        <Button
                        type="submit"
                        variant="outlined"
                        className={`full-width ${
                            title === "" ? "conditional-btn" : null
                        }`}
                        endIcon={<CloudCircleIcon />}
                        >
                        Upload
                        </Button>
                    )}
            </form>
            </div>
            <DialogContentText 
            style={{ 
              fontSize: 28, 
              fontWeight: 900, 
              color: "rgba(255, 255, 255, 0.905)",
              marginBottom: '10px' 
              }} 
              id="alert-dialog-slide-description">
              Upload Image
            </DialogContentText>
            <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.905)' 
              }} 
              variant="small">
              Your profile picture is liked to your Google Account. And changes will be shown on your account and channel and may take a few minuites to be applied. We recommend a square and round that's 800*800 pixels use a PNG, GIF, BMP, JPEG file (2 mb or less) Makesure that  your picture follows the community Guidline.
            </Typography>
          </Box>

          <Box style={{ marginBottom: '30px' }}>
            <Typography 
            style={{ 
              fontWeight: 600, 
              marginBottom: '10px', 
              color: 'rgba(255, 255, 255, 0.905)' 
              }} 
              variant='h6'
              >
                Tell viewers about your channel
              </Typography>
            <Typography 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.905)' 
              }} 
              variant="small"
              >
              Let viewers know what or whom your videos are about. Your description can appear in search results and other places.
            </Typography>
          </Box>

        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#091a2b' }}>
          <Button onClick={handleCloseUpdatePicture}>Disagree</Button>
          <Button onClick={handleCreateRoom} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


// https://static.remove.bg/remove-bg-web/59c96072ccf69a79c0e6dd85a2eac05ceb4d0784/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png


