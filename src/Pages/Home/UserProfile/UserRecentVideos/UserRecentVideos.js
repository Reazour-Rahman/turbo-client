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
    setLoading(true);
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${email.email}`;
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setRecentVideos(data.blogs)});
      
  }, [email.email]);


  let mode = localStorage.getItem("theme");
  const hr = mode === "light" ? "hr" : "hrm"

  return (
    <Box sx={{ mt: "10px", color: "inherit" }}>
      <Grid sx={{ mb: '20px' }}>
        <p style={{ fontWeight: 600 }} className={hr}>
          RECENT VIDEO
        </p>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 12, md: 3, lg: 2, xl: 1, xxl: 21 }}
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

export default UserRecentVideos;
