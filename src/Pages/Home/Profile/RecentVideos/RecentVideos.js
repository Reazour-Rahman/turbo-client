import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import RecentVideo from "../RecentVideo/RecentVideo";
import Progress from "../../BLogs/Progress";
import { useSelector } from 'react-redux';

const RecentVideos = () => {
  const [recentVideos, setRecentVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${user?.email}`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setRecentVideos(data.blogs));
      setLoading(true);
    }, 4000);
  }, [user?.email]);

  // const recentSomeVideos = recentVideos.sort()
  // console.log(recentSomeVideos);
  return (
    <Box sx={{ mt: "30px", color: "inherit" }}>
      <Grid sx={{ mb: '20px' }}>
        <Typography style={{ fontWeight: 700 }}>
          Recent Video
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {loading ? (
            recentVideos.map((recentVideo) => <RecentVideo key={recentVideo._id} recentVideo={recentVideo}></RecentVideo>)
          ).reverse().slice(0,8) : (
            <div>
              <Progress />
            </div>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentVideos;
