import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { grey } from "@mui/material/colors";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import { Link } from "react-router-dom";
import profile from "../../../assets/default/profile.png";
import "./MenuBar.css";
import useFirebase from "../../../Hooks/useFirebase";
import { Button, CircularProgress } from "@mui/material";
import HelpCenter from "../../Home/Profile/HelpCenter/HelpCenter/HelpCenter";

export default function MenuBar({ handleClickOpen }) {
  const { user, logOut } = useFirebase();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    color: "#fff3e0",
    marginLeft: 10,
    fontSize: "16px",
    fontWeight: 300
  };

  const iconStyle = {
    marginRight: 25,
  };

  /* :::::::::::::::::::::::::::::::::
  Help center Modal
  ::::::::::::::::::::::::::::::::::::*/
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  return (
    <>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 42, height: 42 }}>
                {!user.email ? (
                  <CircularProgress />
                ) : (
                  <img
                    style={{ width: 42, height: 42 }}
                    src={user.photoURL}
                    alt="profile"
                  />
                )}
              </Avatar>
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
              border: '.1px solid rgba(255, 255, 255, 0.309)',

              width: 350,
              opacity: 1,
              backgroundColor: "#091a2b",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
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
          <MenuItem sx={{ color: 'white'}}>
            <Avatar>
              <img
                style={{ width: 40, height: 40 }}
                src={user.photoURL}
                alt=""
              />
            </Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography>{user.displayName}</Typography>
              <Typography>{user.email}</Typography>
            </Box>
          </MenuItem>

          <Divider />
          <Link style={{ textDecoration: "none" }} to="/profile">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <ManageAccountsIcon style={iconStyle} />
              </ListItemIcon>
              Your room
            </MenuItem>
          </Link>

          <Button onClick={handleClickOpen} style={{ textDecoration: "none", color: '#f1f8e9'}}>
            <MenuItem className="menu-style" sx={{fontSize: 14,}}>
              <ListItemIcon style={style}>
                <ManageAccountsIcon style={iconStyle} />
              </ListItemIcon>
              Create room
            </MenuItem>
          </Button>

          <Link style={{ textDecoration: "none" }} to="/manage-account">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <ManageAccountsIcon style={iconStyle}/>
              </ListItemIcon>
              Manage account
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/roomDashboard">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <YoutubeSearchedForIcon style={iconStyle}/>
              </ListItemIcon>
              ProPlayer Studio
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/another-account">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <PersonAdd style={iconStyle}/>
              </ListItemIcon>
              Add another account
            </MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/location">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <LocationOnIcon style={iconStyle}/>
              </ListItemIcon>
              Location
            </MenuItem>
          </Link>
          <Button onClick={handleOpenModal} style={{ textDecoration: "none", color: '#f1f8e9'}}>
            <MenuItem className="menu-style"sx={{fontSize: 14,}}>
              <ListItemIcon style={style}>
                <HelpOutlineIcon sx={{mr: 4}} />
              </ListItemIcon>
              Help center
            </MenuItem>
          </Button>
          <Link style={{ textDecoration: "none" }} to="/setting">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <Settings style={iconStyle}/>
              </ListItemIcon>
              Settings
            </MenuItem>
          </Link>

          <MenuItem onClick={logOut} className="menu-style" style={style}>
            <ListItemIcon style={style}>
              <Logout style={iconStyle}/>
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
      <HelpCenter
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      ></HelpCenter>
    </>
  );
}
