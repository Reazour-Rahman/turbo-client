import React, { useState, useRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import { Button, Divider, Grid, ListItemIcon, MenuItem } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ChannelSetting from "../ChannelSetting/ChannelSetting";
import useFirebase from "../../../../../Hooks/useFirebase";
import { useForm } from "react-hook-form";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  backgroundColor: '#091a2b',
  color: 'white'
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const HelpCenter = ({ openModal, handleCloseModal }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const handleOpenSetting = () => setOpenSetting(true);
  const handleCloseSetting = () => setOpenSetting(false);

  /* :::: handle modal submit ::::::::: */
  const { register, handleSubmit, reset } = useForm();

  /* const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); */
  const { user } = useFirebase();
  const displayName = user?.displayName;
  const email = user?.email;

  const handleModalSubmit = (data) => {
    // console.log(data);
    let userHelp = { ...data, displayName, email };
    console.log(userHelp);

    fetch(`http://localhost:5000/userhelp`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userHelp),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>

          <Box sx={style}>
            <Grid 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '30px' 
              }}>
              <Button onClick={handleCloseModal}>
                <ArrowBackIcon></ArrowBackIcon>
              </Button>

              <Typography 
              sx={{ 
                fontWeight: 'bold', 
                color: 'rgba(255, 255, 255, 0.905)' 
                }} 
                variant="h4"
                >Help Center
              </Typography>

              <Button onClick={handleCloseModal}>
                <CloseIcon></CloseIcon>
              </Button>
            </Grid>
            <Search sx={{ borderRadius: "20px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search videos"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ mt: 3 }}>
              <Typography 
              variant="h6" 
              component="h2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.905)' 
                }}>
                Popular help resources
              </Typography>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <Button
                  onClick={handleOpenSetting}
                  sx={{ 
                    textDecoration: "none", 
                    color: "inherit" 
                  }}
                >
                  <MenuItem sx={{ fontSize: 15, fontWeight: 400 }}>
                    <ListItemIcon>
                      <DescriptionIcon 
                      sx={{ 
                        color: "skyBlue", 
                        fontSize: 18 
                        }} />
                    </ListItemIcon>
                    Manage clannel settings
                  </MenuItem>
                </Button>
                <Button
                  onClick={handleOpenSetting}
                  sx={{ 
                    textDecoration: "none", 
                    color: "inherit" 
                }}
                >
                  <MenuItem sx={{ fontSize: 15, fontWeight: 400 }}>
                    <ListItemIcon>
                      <DescriptionIcon 
                      sx={{ 
                        color: "skyBlue", 
                        fontSize: 18 
                        }} />
                    </ListItemIcon>
                    Manage clannel settings
                  </MenuItem>
                </Button>
                <Button
                  onClick={handleOpenSetting}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem sx={{ fontSize: 15, fontWeight: 400 }}>
                    <ListItemIcon>
                      <DescriptionIcon 
                      sx={{ 
                        color: "skyBlue", 
                        fontSize: 18 }} />
                    </ListItemIcon>
                    Manage clannel settings
                  </MenuItem>
                </Button>


              </Box>
              {/* :::::::::::::::::::::::::
                form starts        
                ::::::::::::::::::::::::*/}
              <form onSubmit={handleSubmit(handleModalSubmit)}>
                <TextField
                  sx={{ width: "100%", mt: 2 }}
                  id="outlined-multiline-static"
                  label="Title"
                  variant="outlined"
                  name="problemTitle"
                  required
                  multiline
                  //   onBlur={(e) => setTitle(e.target.value)}
                  {...register("title", { required: true })}
                />

                <TextField
                  sx={{ width: "100%", mt: 2 }}
                  id="outlined-multiline-static"
                  label="Description"
                  variant="outlined"
                  name="problemDescription"
                  multiline
                  rows={4}
                  required
                  {...register("description", { required: true })}

                //   onBlur={(e) => setDescription(e.target.value)}
                />
                <Button
                  sx={{ width: "100%", mt: 2 }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </form>
              {/* :::::::::::::::::::::::::
                form end        
                ::::::::::::::::::::::::*/}
            </Box>
          </Box>
        </Fade>
      </Modal>
      <ChannelSetting
        openSetting={openSetting}
        handleCloseSetting={handleCloseSetting}
      ></ChannelSetting>
    </div>
  );
};

export default HelpCenter;
