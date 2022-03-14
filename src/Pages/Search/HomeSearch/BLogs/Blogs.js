import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Progress from "./Progress";
import "./Video.css";

const Blogs = ({ text }) => {
  /*:::::::::::::::::::::::::::::::::::::::::
                ALl states
    ::::::::::::::::::::::::::::::::::::::::::*/
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(filter) ;

  useEffect(() => {
    setLoading(true);
    const blogUrl = `https://aqueous-tor-77774.herokuapp.com/blogs`;

    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setBlogs(data.blogs);
      });
  }, []);
  console.log(blogs);

  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(blogs);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  if (text !== "") {
    const results = blogs.filter((user) => {
      return user.title.toLowerCase().startsWith(text.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
    setFoundUsers(results);
  } else {
    setFoundUsers(blogs);
    // If the text field is empty, show all users
  }

  setName(text);
  // };

  return (
    <div>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
        >
          {!loading ? (
            foundUsers.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)
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
