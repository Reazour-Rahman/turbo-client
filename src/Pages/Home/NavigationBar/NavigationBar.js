import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../../assets/logo.png";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import SignUp from "../../Authentication/SignUp/SignUp";
import useFirebase from "../../../Hooks/useFirebase";
import MenuBar from "../../MenuBar/MenuBar/MenuBar";
import HomeSearch from "../../Search/HomeSearch/HomeSearch";
import CreateProfile from "../Profile/CreateProfile/CreateProfile/CreateProfile";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up('md')]: {
    //   width: '50ch',
    // },
  },
}));

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { user, logOut } = useFirebase();
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleMenuClose();
    logOut();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ marginTop: "50px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        sx={{ paddingLeft: "50px ", paddingRight: "50px ", fontSize: "18px" }}
        onClick={handleMenuClose}
      >
        Profile
      </MenuItem>
      <MenuItem
        sx={{ paddingLeft: "50px ", paddingRight: "50px ", fontSize: "18px" }}
        onClick={handleMenuClose}
      >
        My account
      </MenuItem>
      <MenuItem
        sx={{ paddingLeft: "50px ", paddingRight: "50px ", fontSize: "18px" }}
        onClick={handleMenuClose}
      >
        Profile
      </MenuItem>
      <MenuItem
        sx={{ paddingLeft: "50px ", paddingRight: "50px ", fontSize: "18px" }}
        onClick={handleMenuClose}
      >
        My account
      </MenuItem>
      <MenuItem
        sx={{ paddingLeft: "50px ", paddingRight: "50px ", fontSize: "18px" }}
        onClick={handleLogOut}
      >
        <i
          style={{ fontSize: "25px", color: "red", marginLeft: "10px" }}
          className="fas fa-power-off"
        ></i>
      </MenuItem>
    </Menu>
  );

  return (
    <Toolbar className="nav-color" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}
      >
        <img width={150} src={logo} alt="" />
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <HomeSearch />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex" }}>
        {!user?.email ? (
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#102841",
              border: "2px solid white",
            }}
            variant="contained"
            size="small"
            onClick={handleOpen}
          >
            Sign In
          </Button>
        ) : (
          <div>
              <CreateProfile />
          </div>
        )}
      </Box>
      {renderMenu}
      <SignUp open={open} handleClose={handleClose}></SignUp>
    </Toolbar>
  );
}
