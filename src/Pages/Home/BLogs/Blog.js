import { Avatar, Box, createTheme, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea } from "@mui/material";
import Video from "./Video";
import "./Video.css";
import Setting from "./Setting";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { async } from "@firebase/util";
import { useSelector } from "react-redux";



const Blog = (props) => {
  /*:::::::::::::::::::::::::::::::::::::::::
                Destructure the props
    ::::::::::::::::::::::::::::::::::::::::::*/
    const [allViewers, setAllViewers] = useState([])
  const { _id, title, video, bloggerName, category, bloggerEmail, viewers, uploadTime, thumbnail, bloggerPhoto, views, description } =props.blog;
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
  




  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={4} xxl={3}>
      <Box>
        <Box>
          <Card id={ theme === "light" ? "moreLight" : "moreDark" }>
            <CardActionArea>
              <CardContent className="pd">
                <div id={`${ theme === "light" ? "black" : "darkLight" }`} className="name-color">

                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={bloggerPhoto}
                    />{" "}
                    &nbsp;&nbsp;
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      <small
                        style={{ fontWeight: "bold", paddingBottom: "5px", fontSize:"11px" }}
                      >
                        {bloggerName.slice(0, 15)}..
                      </small>
                      <small className="date-color" id={ theme === "light" ? "black" : "darkLight" }>{uploadTime}</small>
                    </span>
                  </span>
                  <small>
                    <Setting bloggerEmail={bloggerEmail} />
                  </small>
                </div>
              </CardContent>
              <Video video={video} poster={thumbnail}></Video>
              <div onClick={() => singleBlog(_id)}  style={{textDecoration:"none"}}>
              <CardContent>
                <p id={ theme === "light" ? "black" : "darkLight" } style={{fontSize:"13px"}}>{title.slice(0, 35)}...</p>
              </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
};

export default Blog;

