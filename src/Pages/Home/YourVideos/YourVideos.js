import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FollowingBlogs from "../Subscription/FollowingBlogs.js";

const YourVideos = () => {
  const user = useSelector((state) => state.firebase.user);


  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://grass-dour-wasp.glitch.me/blogs?email=${user?.email}`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setBlogs(data?.blogs);
      });
  }, [user.email]);
  // console.log(blog, "eta hocce blog");
  let theme;
  theme = localStorage.getItem("theme");
  let text = theme === "light" ? "black" : "darkLight" ;
  return (
    // <Box sx={{ mt: 2 }} className="subscription-margin">
    <Grid className="subscription-margin">
      <div className=''>
                    <h5 id={text}>Your Uploaded Blogs</h5>
                    <br />
                    <h5 id={text}>All Blogs</h5>
                    <br />
                    <section >
                    </section>

                </div>

            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 12, sm: 12, md: 15, lg: 24, xl:14 }}
            //   key={i}
            >
              {blog.map( b => <FollowingBlogs b={b}></FollowingBlogs>
              )}
            </Grid>
    </Grid>
    // </Box>
  );
};

export default YourVideos;

