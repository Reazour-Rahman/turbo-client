import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import profile from "../../assets/default/profile.png";
import "./Notification.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import useFirebase from "../../Hooks/useFirebase";
import { fontSize } from "@mui/system";
import { useSelector } from "react-redux";

export default function Messaging() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    color: "white",
    marginLeft: 10,
    fontSize: "18px",
  };

  const iconStyle = {
    marginRight: 25,
  };
  const user = useSelector((state) => state.firebase.user)
  const [notification, setNotification] = React.useState({});
  const [myNot, setMyNot] = React.useState({});

  React.useEffect(()=>{
    fetch('https://grass-dour-wasp.glitch.me/notifications')
    .then(res => res.json())
    .then(data => {
      // data.map(d=> d.email === user.email && setNotification(d));
      
      for (const d of data) {
        setNotification(d)
      }
    })
  },[]);

  
  let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";


  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <NotificationsIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu 
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            // width: 350,
            opacity: 1,
            backgroundColor: "#091a2b",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              // width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: grey[900],
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="p-li">
            <p id={text} >Notifications</p>
        </MenuItem>


        <Divider className="dev" />

        {[1].map((element) => (
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem>
              <p style={{width:"100%"}}>Our User {notification?.displayName}'s Problem is "{notification?.title}" <br /> Admin Replied : {notification?.reply?.slice(0,50)}</p>
            </MenuItem>
          </Link>
        ))}

      </Menu>
    </React.Fragment>
  );
}
