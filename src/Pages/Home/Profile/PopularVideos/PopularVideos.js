import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Progress from "../../BLogs/Progress";
import PopularVideo from "../PopularVideo/PopularVideo";

const PopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const contentUrl = `https://api.jsonbin.io/b/6203768369b72261be560c47`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setPopularVideos(data));
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <Box sx={{ mt: "50px", color: "inherit" }}>
      <Grid sx={{ mb: '20px' }}>
        <Typography style={{ fontWeight: 900 }}>
          Popular Video
        </Typography>
      </Grid>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {loading ? (
            popularVideos.slice(0, 8).map((popularVideo) => <PopularVideo key={popularVideo._id} popularVideo={popularVideo}></PopularVideo>)
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
