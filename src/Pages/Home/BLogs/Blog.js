import { Avatar, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Video from "./Video";
import "./Video.css";
import Setting from "./Setting";
import { Link } from "react-router-dom";

const Blog = (props) => {
  /*:::::::::::::::::::::::::::::::::::::::::
                Destructure the props
    ::::::::::::::::::::::::::::::::::::::::::*/
  const { _id, title, video, bloggerName, category, bloggerEmail, uploadTime, thumbnail, bloggerPhoto } =props.blog;
  console.log(thumbnail);
  let theme;
  theme = localStorage.getItem("theme");




  return (
    <Grid item xs={2} sm={4} md={4}>
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
                        style={{ fontWeight: "bold", paddingBottom: "5px" }}
                      >
                        {bloggerName.slice(0, 20)}..
                      </small>
                      <small className="date-color" id={ theme === "light" ? "black" : "darkLight" }>{uploadTime}</small>
                    </span>
                  </span>
                  <small>
                    <Setting />
                  </small>
                </div>
              </CardContent>
              <Video video={video} poster={thumbnail}></Video>
              <Link to={`details/${_id}`} style={{textDecoration:"none"}}>
              <CardContent>
                <Typography
                  id={ theme === "light" ? "black" : "darkLight" }
                  variant="body2"
                  
                >
                  {title.slice(0, 53)}...
                </Typography>
              </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
};

export default Blog;

