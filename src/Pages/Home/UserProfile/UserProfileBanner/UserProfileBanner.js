import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserProfileBanner = () => {
  const [cover, setCover] = useState('')
  const user = useSelector(state => state.firebase.user)
  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`)
    .then(res => res.json())
    .then(data => setCover(data.room.cover))
  },[user?.email])
  console.log(cover);

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
        </Box>
      </Grid>
    </div>
  );
};

export default UserProfileBanner;
