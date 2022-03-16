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
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${user?.email}`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setPopularVideos(data.blogs));
      setLoading(true);
    }, 4000);
  }, [user?.email]);

  console.log(popularVideos);

  return (
    <Box sx={{ mt: "50px", mb: 5, color: "inherit" }}>
      <Grid sx={{ mb: '20px' }}>
        <Typography style={{ fontWeight: 600 }}>
          All Videos
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {loading ? (
            popularVideos.map((popularVideo) => <PopularVideo key={popularVideo._id} popularVideo={popularVideo}></PopularVideo>)
          ) : (
            <div>
              <Progress />
            </div>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularVideos;
