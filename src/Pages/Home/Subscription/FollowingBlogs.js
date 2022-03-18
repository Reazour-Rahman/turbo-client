import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import DotMenu from "./DotMenu";
import { Avatar, Box, Button, Grid } from "@mui/material";

const FollowingBlogs = ({ b }) => {
  let theme;
  theme = localStorage.getItem("theme");
  const text = theme === "light" ? "black" : "darkLight";

  return (
    <Grid item xs={6} sm={4} md={3} lg={4} xl={2}>
      <Card
        style={{ backgroundColor: "transparent", color: "aliceblue" }}
        sx={{ boxShadow: 0 }}
      >
        <CardActionArea>
          <video
            src={b.video}
            poster={b.thumbnail}
            controls
            type="video"
            style={{ width: "100%", height: "150px" }}
          ></video>
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
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FollowingBlogs;
