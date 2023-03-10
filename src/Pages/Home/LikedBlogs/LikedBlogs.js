import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import LikedBlog from "./LikedBlog";

const LikedBlogs = () => {
  const user = useSelector((state) => state.firebase.user);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://grass-dour-wasp.glitch.me/users`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setUsers(data);
      });
  }, []);
  // console.log(users);
  const verifiedUser = users.filter((me) => me.email === user.email);
  //   console.log(verifiedUser, "THis is me")

  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://grass-dour-wasp.glitch.me/blogs`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setBlogs(data?.blogs);
      });
  }, []);
  // console.log(blog, "eta hocce blog");



  const likedBlogs = blog.filter(character => {
    return character?.likers?.find(f => {
        return f?.likerEmail?.includes(user.email)
    })
  });

  console.log('hello', likedBlogs, user.email, likedBlogs);
  return (
    // <Box sx={{ mt: 2 }} className="subscription-margin">
    <Grid className="subscription-margin">
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 12, sm: 12, md: 15, lg: 24, xl:14 }}
            //   key={i}
            >
              {likedBlogs.map(
                (bl) =>                 
                    <LikedBlog b={bl} />
                  
              )}
            </Grid>
    </Grid>
    // </Box>
  );
};

export default LikedBlogs;

