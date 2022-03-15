import { Grid } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserProfileBanner = () => {
  const [cover, setCover] = useState('')
  const user = useSelector(state => state.firebase.user)
  useEffect(() => {
    fetch(`http://localhost:5000/users/room/${user?.email}`)
    .then(res => res.json())
    .then(data => setCover(data.room.cover))
  },[user?.email])
  console.log(cover);
  return (
    <div>
      <Grid>
        <img
          style={{ width: "100%", height: "400px" }}
          src={cover}
          alt=""
        />
      </Grid>
    </div>
  );
};

export default UserProfileBanner;
