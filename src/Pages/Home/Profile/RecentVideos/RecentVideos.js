import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import RecentVideo from "../RecentVideo/RecentVideo";
import Progress from "../../BLogs/Progress";
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


const RecentVideos = () => {
  const [recentVideos, setRecentVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    setLoading(true);
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${user?.email}`;
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setRecentVideos(data.blogs)});
      
  }, [user?.email]);

  // const recentSomeVideos = recentVideos.sort()
  // console.log(recentSomeVideos);
  return (
    <Box sx={{ mt: "50px", color: "inherit" }}>
      <Grid sx={{ mb: '20px' }}>
        <Typography style={{ fontWeight: 900 }}>
          Recent Video
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 1, md: 3, lg: 2, xl: 1, xxl: 21 }}
          columns={{ xs: 12, sm: 8, md: 12, lg: 12, xl: 20 }}
        >
          {!loading ? (
            recentVideos.map((recentVideo) => <RecentVideo key={recentVideo._id} recentVideo={recentVideo}></RecentVideo>)
          ).reverse().slice(0,8) : (
            <Grid style={{transform: `translate(100vh, 50vh)`}}>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentVideos;
