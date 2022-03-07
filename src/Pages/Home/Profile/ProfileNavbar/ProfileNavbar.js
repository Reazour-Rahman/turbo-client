import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./ProfileNavbar.css"
import { Button } from "@mui/material";

const ProfileNavbar = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "inherit" }}>
          <Toolbar>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </Typography>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/content"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contents
              </Link>
            </Typography>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/playlist"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Playlist
              </Link>
            </Typography>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </Typography>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/amazon"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Amazon Products
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default ProfileNavbar;
