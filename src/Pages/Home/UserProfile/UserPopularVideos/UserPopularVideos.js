import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Progress from "../../BLogs/Progress";
import { useSelector } from 'react-redux';
import PopularVideo from "../../Profile/PopularVideo/PopularVideo";

const UserPopularVideos = ({email}) => {
  const [popularVideos, setPopularVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `http://localhost:5000/blogs?email=${email.email}`;
    setTimeout(() => {
      fetch(contentUrl)
        .then((response) => response.json())
        .then((data) => setPopularVideos(data.blogs));
      setLoading(true);
    }, 4000);
  }, [email.email]);

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

export default UserPopularVideos;