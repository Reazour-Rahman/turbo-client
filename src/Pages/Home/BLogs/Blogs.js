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
    url = `https://api.jsonbin.io/b/6203768369b72261be560c47`;
  } else {
    url = `https://api.jsonbin.io/b/6203768369b72261be560c47?filter=${filter}`;
    console.log(url);
  }
  /*:: filter end ::*/

  useEffect(() => {
    const blogUrl = `https://aqueous-tor-77774.herokuapp.com/blogs`;
    setTimeout(() => {
      fetch(blogUrl)
        .then((response) => response.json())
        .then((data) => setBlogs(data.blogs));
      setLoading(true);
    }, 4000);
  }, []);
  console.log(blogs);

  return (
    <div>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {loading ? (
            blogs.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)
          ) : (
            <div>
              <Progress />
            </div>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Blogs;
