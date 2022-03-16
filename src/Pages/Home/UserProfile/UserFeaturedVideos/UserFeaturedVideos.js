import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../../Profile/Videos/Videos";


const UserFeaturedVideos = ({email}) => {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const user = useSelector((state) => state.firebase.user)
  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/blogs?email=${email.email}`)
      .then((res) => res.json())
      .then((data) => setFeaturedVideos(data.blogs));
  }, [email]);

console.log('email paisi', email.email);
  return (
    <Box sx={{ mt: "50px", color: "inherit" }}>
      <Box sx={{ mb: "20px" }}>
        <Grid>
          <Typography style={{ fontWeight: 900 }}>
            Top Views Videos
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, md: 12 }}
        >
          {featuredVideos.sort((a, b) => b.views - a.views).slice(0,2).map( f =>  
            <Grid item xs={12} md={6} >
              <Box>
              <Videos  video={f.video} thumbnail={f.thumbnail}></Videos>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <Typography style={{ fontWeight: 600 }}>Title:{f.title}</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserFeaturedVideos;
