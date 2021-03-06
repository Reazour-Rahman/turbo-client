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
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setUser } from "../../../reducers/slices/firebaseSlice";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

const cookies = new Cookies();

const logout = () => {
  cookies.remove("token");
  cookies.remove("userId");
  cookies.remove("username");
  cookies.remove("fullName");
  cookies.remove("avatarURL");
  cookies.remove("hashedPassword");
  cookies.remove("phoneNumber");

  window.location.reload();
};

export default function MenuBar({ handleClickOpen }) {
  const { signOut, auth } = useFirebase();
  const user = useSelector((state) => state.firebase.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
        logout();
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const style = {
    color: "#fff3e0",
    marginLeft: 10,
    fontSize: "16px",
    fontWeight: 300,
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

  const admin = useSelector((state) => state.firebase.admin);

  /* :::::::::::::::::::::::::::::::::
 location API
  ::::::::::::::::::::::::::::::::::::*/
  const [location, setLocation] = React.useState({});
  React.useEffect(() => {
    fetch(
      `https://geolocation-db.com/json/2d7a1090-a7e0-11ec-bb96-d99740183a81`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      });
  }, []);
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
              border: ".1px solid rgba(255, 255, 255, 0.309)",

              width: 350,
              opacity: 0.9,
              backgroundColor: "#18191A",
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
          <MenuItem sx={{ color: "white" }}>
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
          {admin && (
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <MenuItem className="menu-style" style={style}>
                <ListItemIcon style={style}>
                  <AdminPanelSettingsIcon style={iconStyle} />
                </ListItemIcon>
                Admin Panel
              </MenuItem>
            </Link>
          )}

          <Link style={{ textDecoration: "none" }} to="/profile">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <WorkspacesIcon style={iconStyle} />
              </ListItemIcon>
              Your room
            </MenuItem>
          </Link>

          <Button
            onClick={handleClickOpen}
            style={{ textDecoration: "none", color: "#f1f8e9" }}
          >
            <MenuItem className="menu-style" sx={{ fontSize: 14 }}>
              <ListItemIcon style={style}>
                <CreateNewFolderIcon style={iconStyle} />
              </ListItemIcon>
              {user?.room?.roomName ? "Edit Room" : "Create Room"}
            </MenuItem>
          </Button>

          {/* <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <ManageAccountsIcon style={iconStyle} />
              </ListItemIcon>
              Manage account
            </MenuItem>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to="/roomDashboard">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <YoutubeSearchedForIcon style={iconStyle} />
              </ListItemIcon>
              ProPlayer Studio
            </MenuItem>
          </Link>
          {/* <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <PersonAdd style={iconStyle} />
              </ListItemIcon>
              Add another account
            </MenuItem>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <LocationOnIcon style={iconStyle} />
              </ListItemIcon>
              {location.city}, {location.country_name}
            </MenuItem>
          </Link>
          <Button
            onClick={handleOpenModal}
            style={{ textDecoration: "none", color: "#f1f8e9" }}
          >
            <MenuItem className="menu-style" sx={{ fontSize: 14 }}>
              <ListItemIcon style={style}>
                <HelpOutlineIcon sx={{ mr: 4 }} />
              </ListItemIcon>
              Help center
            </MenuItem>
          </Button>
          {/* <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem className="menu-style" style={style}>
              <ListItemIcon style={style}>
                <Settings style={iconStyle} />
              </ListItemIcon>
              Settings
            </MenuItem>
          </Link> */}

          <MenuItem onClick={userLogOut} className="menu-style" style={style}>
            <ListItemIcon style={style}>
              <Logout style={iconStyle} />
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
