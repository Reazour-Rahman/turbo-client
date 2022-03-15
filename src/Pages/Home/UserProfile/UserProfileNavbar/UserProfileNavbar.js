import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import "./UserProfileNavbar.css"
import { Button } from "@mui/material";

const UserProfileNavbar = ({email}) => {
  console.log('email ar ki',email);

  const navigate = useNavigate()
  const handleHome = () => {
    navigate(`/userprofile/${email}`)

  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "inherit" }}>
          <Toolbar>
            <Typography sx={{ marginRight: "25px" }}>
              <div
              onClick={handleHome}
                style={{ textDecoration: "none", color: "inherit", fontWeight: 500 , cursor:'pointer'}}
              >
                Home
              </div>
            </Typography>

            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/about"
                style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}
              >
                About
              </Link>
            </Typography>
            <Typography sx={{ marginRight: "25px" }}>
              <Link
                to="/profile/amazon"
                style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}
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

export default UserProfileNavbar;
