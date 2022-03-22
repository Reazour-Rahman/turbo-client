import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Progress from "../../BLogs/Progress";
import { useSelector } from 'react-redux';
import RecentVideo from "../../Profile/RecentVideo/RecentVideo";
import CircularProgress from '@mui/material/CircularProgress';

const UserRecentVideos = ({email}) => {
  const [recentVideos, setRecentVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${email.email}`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setRecentVideos(data.blogs));
      setLoading(true);
    }, 4000);
  }, [email.email]);

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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {loading ? (
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

export default UserRecentVideos;
