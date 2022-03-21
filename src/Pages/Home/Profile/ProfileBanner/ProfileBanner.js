import { Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BannerUpload from "./BannerUpload";



const ProfileBanner = () => {

  const [cover, setCover] = useState("");
  const [roomName, setRoomName] = useState("");
  const [profile, setProfile] = useState("");

  const user = useSelector((state) => state.firebase.user);
  useEffect(() => {
    fetch(
      `https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        
        setRoomName(data.room.roomName)
        setCover(data.room.cover)
        setProfile(data.room.profile)
      });
  }, [user?.email, cover, profile, roomName]);

  const currentURL = window.location.href

  let theme;
  theme = localStorage.getItem("theme");
  const card = theme === "light" ? "moreLight" : "moreDark";
  const text = theme === "light" ? "black" : "darkLight" 

  
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
            icon={<SpeedDialIcon  openIcon={<EditIcon />} />}
          >
            <SpeedDialAction
            icon={<BannerUpload cover={cover} roomName={roomName} profile={profile} user={user?.email}/>}
            tooltipTitle={"Edit Cover"}
            />
            <SpeedDialAction
            target="_blank"
            href={cover}
            download
            icon={<SaveIcon />}
            tooltipTitle={"Save"}
            />
            <SpeedDialAction
            onClick={() => {navigator.clipboard.writeText(currentURL)}}
            icon={<ContentCopyIcon />}
            tooltipTitle={"Copy URL"}
            />

          </SpeedDial>
        </Box>
      </Grid>
    </div>
  );
};

export default ProfileBanner;
