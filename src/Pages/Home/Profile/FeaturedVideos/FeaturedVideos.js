import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import video from "../../../../assets/gig.mp4";
import Videos from "../Videos/Videos";

const FeaturedVideos = () => {
  const [featuredVideos, setFeaturedVideos] = useState();

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setFeaturedVideos(data));
  }, []);

  return (
    <Box sx={{ mt: "50px", color: "inherit" }}>
      <Box sx={{ mb: "20px" }}>
        <Grid>
          <Typography style={{ fontWeight: 900 }}>
            Featured Videos
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, md: 12 }}
        >
          {Array.from(Array(2)).map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box>
              <Videos  video={video}></Videos>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <Typography style={{ fontWeight: 600 }}>Title:</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedVideos;
