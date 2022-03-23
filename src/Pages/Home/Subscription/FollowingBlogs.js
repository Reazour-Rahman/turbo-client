import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import DotMenu from "./DotMenu";
import { Avatar, Box, Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FollowingBlogs = ({ b }) => {

  const [allViewers, setAllViewers] = useState([])
  const { _id, title, video, bloggerName, category, bloggerEmail, viewers, uploadTime, thumbnail, bloggerPhoto, views, description } =b;
  let theme;
  theme = localStorage.getItem("theme");
  const navigate = useNavigate()
  const user = useSelector(state => state.firebase.user)
  const matched = viewers?.find(v => v.viewerEmail === user.email)

  const singleBlog = async (id) => {
    navigate(`/details/${id}`)

    if (matched) {
      const viewsData = {
        views : views + 1,
        viewers : [...viewers]
      }
      await axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/views/${id}`, viewsData)
    }
    else {
      const viewerData = {viewerEmail :user.email}
      const viewsData = {
        views : views + 1,
        viewers : [...viewers,  viewerData]
      }
      await axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/views/${id}`, viewsData)
    }

    const data = {
      blogId : _id, viewerName:user.displayName, viewerEmail:user.email, title, video, bloggerName, category, bloggerEmail, uploadTime, thumbnail, bloggerPhoto, views, description
    }
    await axios.post('https://aqueous-chamber-45567.herokuapp.com/views', data)

  }
  const text = theme === "light" ? "black" : "darkLight";

  return (
    <Grid item xs={6} sm={4} md={3} lg={4} xl={2}>
      <Card
        style={{ backgroundColor: "transparent", color: "aliceblue" }}
        sx={{ boxShadow: 0 , marginY:'10px'}}
      >
        <CardActionArea>
          <video
            src={b.video}
            poster={b.thumbnail}
            controls
            type="video"
            style={{ width: "100%", height: "150px" }}
          ></video>
          <div onClick={() => singleBlog(_id)}  style={{textDecoration:"none"}}>
          <CardContent
            style={{ margin: "0px", padding: "0px", paddingTop: "5px" }}
          >
            <small id={text} gutterBottom>
              {b.title.slice(0, 40)}..
            </small>{" "}
            <br />
            <small>
              <strong id={text}>{b.bloggerName}</strong>
            </small>
          </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FollowingBlogs;
