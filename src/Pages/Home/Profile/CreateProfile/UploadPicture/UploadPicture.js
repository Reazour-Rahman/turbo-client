import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Input, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';


export default function UploadPicture({ openPictureModal, handleCloseUpdatePicture}) {
  
  return (
    <div>
      <Dialog
        style={{ textAlign: "center" }}
        open={openPictureModal}
        onClose={handleCloseUpdatePicture}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent >
          <Box style={{ marginBottom: '40px' }}>
            <Typography style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>
              Nice work! <br /> Your channel 'Super Awesome Channel' has been created.
            </Typography>
            <Typography variant="small">
              Next, follow the steps to complete your channel. You can do these steps now or come back to them later.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img style={{ height: '200px', width: '100%'}} src="https://cdn2.f-cdn.com/contestentries/1683544/21556645/5dee7cd109617_thumb900.jpg" alt="" />
            </Box>
          </Box>

          <Box style={{ marginBottom: '40px' }}>
            <DialogTitle style={{ fontWeight: 600 }} id="alert-dialog-title">
              {"Upload Your Profile Picture"}
            </DialogTitle>
            <DialogContentText id="alert-dialog-description">
              Your profile picture appears next to your videos and comments, and in other places. It's your signature image on Por-Player.
            </DialogContentText>
            <Stack style={{ display: 'inline' }} direction="row" alignItems="center" spacing={2}>
              <label style={{ marginLeft: '30px' }} htmlFor="icon-button-file">
                <Input style={{ display: 'none', }} accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <img style={{ width: '150px', height: '150px', borderRadius: '75px', alignContent: 'center' }} src="https://static.remove.bg/remove-bg-web/59c96072ccf69a79c0e6dd85a2eac05ceb4d0784/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="" />
                </IconButton>
              </label>
            </Stack>
            <DialogContentText style={{ fontSize: 28, fontWeight: 900, color: green[700], marginBottom: '10px' }} id="alert-dialog-slide-description">
              Upload Image
            </DialogContentText>
            <Typography variant="small">
              Your profile picture is liked to your Google Account. And changes will be shown on your account and channel and may take a few minuites to be applied. We recommend a square and round that's 800*800 pixels use a PNG, GIF, BMP, JPEG file (2 mb or less) Makesure that  your picture follows the community Guidline.
            </Typography>
          </Box>

          <Box style={{ marginBottom: '30px' }}>
            <Typography style={{ fontWeight: 600, marginBottom: '10px' }} variant='h6'>Tell viewers about your channel</Typography>
            <Typography variant="small">
              Let viewers know what or whom your videos are about. Your description can appear in search results and other places.
            </Typography>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdatePicture}>Disagree</Button>
          <Button onClick={handleCloseUpdatePicture} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


// https://static.remove.bg/remove-bg-web/59c96072ccf69a79c0e6dd85a2eac05ceb4d0784/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png


