import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import RecentVideo from "../RecentVideo/RecentVideo";
import Progress from "../../BLogs/Progress";

const RecentVideos = () => {
  const [recentVideos, setRecentVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const contentUrl = `https://api.jsonbin.io/b/6203768369b72261be560c47`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setRecentVideos(data));
      setLoading(true);
    }, 4000);
  }, []);

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
            recentVideos.slice(0, 8).map((recentVideo) => <RecentVideo key={recentVideo._id} recentVideo={recentVideo}></RecentVideo>)
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

export default RecentVideos;
