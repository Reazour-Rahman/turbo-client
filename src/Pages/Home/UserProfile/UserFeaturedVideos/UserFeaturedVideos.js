import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../../Profile/Videos/Videos";
import CircularProgress from '@mui/material/CircularProgress';

const UserFeaturedVideos = ({email}) => {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const user = useSelector((state) => state.firebase.user)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/blogs?email=${email.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedVideos(data.blogs)
        setLoad(false)
      });
  }, [email]);

  let mode = localStorage.getItem("theme");
  const card = mode === "light" ? "moreLight" : "moreDark" ;
  const bg = mode === "light" ? "lightest" : "darkish";
  const text = mode === "light" ? "black" : "darkLight" ;
  const hr = mode === "light" ? "hr" : "hrm"

  return (
    <>
    {!load ? <Box sx={{ color: "inherit" }}>
      <Box sx={{ mb: "20px", mt:"10px" }}>
        <Grid>
          <p style={{ fontWeight: 600 }} className={hr}>
            MOST VIEWED VIDEO
          </p>
        </Grid>
      </Box>
      <Box >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, md: 12 }}
        >
          { featuredVideos.sort((a, b) => b.views - a.views).slice(0,2).map( f =>  
            <Grid item xs={12} md={6} >
              <Box>
              <Videos  video={f.video} thumbnail={f.thumbnail}></Videos>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <p style={{ fontWeight: 500, fontSize:"12px" }} id={text}>Title:  {f.title}</p>
              </Box>
            </Grid>
          ) 
          
          }
        </Grid>
      </Box>
    </Box> :
      <Grid style={{transform: `translate(100vh, 50vh)`}}>
      <CircularProgress />
    </Grid>
    }
    </>
  );
};

export default UserFeaturedVideos;
