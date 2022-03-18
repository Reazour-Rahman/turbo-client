import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import FollowingBlogs from "./FollowingBlogs.js";
import { useSelector } from "react-redux";
import './Subscription.css'

const Subscription = () => {
  const user = useSelector((state) => state.firebase.user);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://aqueous-chamber-45567.herokuapp.com/users`;
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
    const blogUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setBlogs(data?.blogs);
      });
  }, []);
  // console.log(blog, "eta hocce blog");

  return (
    // <Box sx={{ mt: 2 }} className="subscription-margin">
    <Grid className="subscription-margin">
      {verifiedUser?.map((item, index) => (
        <div key={index}>
          {item?.followers.map((c, i) => (
            <Grid
              container
              spacing={{ xs: 1, md: 1 }}
              columns={{ xs: 12, sm: 12, md: 15, lg: 24, xl:14 }}
            //   key={i}
            >
              {blog.map(
                (bl) =>
                  bl?.bloggerEmail === c?.followerEmail && (
                    <FollowingBlogs b={bl} />
                  )
              )}
            </Grid>
          ))}
        </div>
      ))}
    </Grid>
    // </Box>
  );
};

export default Subscription;
