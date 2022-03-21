import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Progress from "./Progress";
import "./Video.css";

const Blogs = ({ filter }) => {
  /*:::::::::::::::::::::::::::::::::::::::::
                ALl states
    ::::::::::::::::::::::::::::::::::::::::::*/
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(filter) ;

  /*:: filter start (this block will be inside useEffect) ::*/
  let url;
  if (!filter) {
    url = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
  } else {
    url = `https://aqueous-chamber-45567.herokuapp.com/blogs?filter=${filter}`;
    console.log(url);
  }
  /*:: filter end ::*/

  useEffect(() => {
    setLoading(true);
    const blogUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setBlogs(data.blogs);
      });
  }, [url]);

  return (
    <div>
      <Box>
        <Grid
          container
          spacing={{ xs: 1, md: 3, lg: 2, xl: 1, xxl: 21 }}
          columns={{ xs: 12, sm: 8, md: 12, lg: 12, xl: 20 }}
        >
          {!loading
            ? blogs.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)
            : [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((s) => <Progress />)}
        </Grid>
      </Box>
    </div>
  );
};

export default Blogs;
