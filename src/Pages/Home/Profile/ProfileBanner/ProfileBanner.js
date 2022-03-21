import { Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import axios from 'axios';

/* Thumb */
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase";
import "../../../Upload/CloudStorage.css";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Progress from "../../../Upload/Progress";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ImageIcon from '@mui/icons-material/Image';
import BannerUpload from "./BannerUpload";



const ProfileBanner = () => {

  /* :::::::::::::::::::::::::::::
  Cover
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



  const [cover, setCover] = useState("");
  const user = useSelector((state) => state.firebase.user);
  useEffect(() => {
    fetch(
      `https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCover(data.room.cover));
  }, [user?.email]);
  console.log(cover);
  
  return (
    <div>
      <Grid>
        <Box 
          style={{ 
            width: "100%",
            height: "400px", 
            backgroundImage: `url(${cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}

          sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          >
            <SpeedDialAction
            icon={<BannerUpload />}
            tooltipTitle={"Edit Cover"}
            />
            <SpeedDialAction
            icon={<SaveIcon />}
            tooltipTitle={"Save"}
            />
            <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle={"Share"}
            />

          </SpeedDial>
        </Box>
      </Grid>
    </div>
  );
};

export default ProfileBanner;
