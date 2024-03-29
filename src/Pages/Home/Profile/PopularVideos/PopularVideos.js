import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Progress from "../../BLogs/Progress";
import PopularVideo from "../PopularVideo/PopularVideo";
import { useSelector } from 'react-redux';

const PopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `https://grass-dour-wasp.glitch.me/blogs?email=${user?.email}`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setPopularVideos(data.blogs));
      setLoading(true);
    }, 4000);
  }, [user?.email]);

  console.log(popularVideos);

  let mode = localStorage.getItem("theme");
  const text = mode === "light" ? "black" : "darkLight" ;
  const hr = mode === "light" ? "hr" : "hrm"

  return (
    <Box sx={{ mt: "10px", mb: 5 }}>
        <p style={{ fontWeight: 600 }} className={hr}>
          ALL VIDEOS
        </p>
      <Grid sx={{ mb: '20px' }}>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {
            popularVideos.map((popularVideo) => <PopularVideo key={popularVideo._id} popularVideo={popularVideo}></PopularVideo>)
          }
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularVideos;
