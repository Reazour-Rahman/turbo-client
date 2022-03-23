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
import { Button, Container } from "@mui/material";
import { green } from "@mui/material/colors";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import FollowingList from "./FollowingList";

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
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ProfileSearchBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [followed, setFollowed] = React.useState(false)

  const [profile, setProfile] = React.useState('')
  const [bloggerProfile, setBloggerProfile] = React.useState({})
  const [follow, setFollow] = React.useState(false)
  const [count, setCount] = React.useState(0)

  const user = useSelector(state => state.firebase.user)
  React.useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`)
    .then(res => res.json())
    .then(data => setProfile(data.room))
  },[user?.email, followed, count])

  React.useEffect(() => {
    const alreadyFollowed = bloggerProfile?.followers?.find(b => b?.followerEmail === user.email)
    console.log('already', alreadyFollowed);
    if (alreadyFollowed?.followerEmail === user.email) {
      setFollowed(true)
    }
    else{
      setFollowed(false)
    }
  },[user.email, bloggerProfile?.followers])

  React.useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setBloggerProfile(data)
    })
  },[user?.email, count])

  console.log(followed);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          style={{
            backgroundColor: green[900],
            borderRadius: "20px",
            paddingInline: "15px",
            color: "white",
            marginRight: "10px",
          }}
        >
          Donate
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          style={{
            backgroundColor: green[900],
            borderRadius: "20px",
            paddingInline: "15px",
            paddingTop: "0",
            paddingBottom: "0",
            color: "white",
          }}
        >
          Follow
        </Button>
      </MenuItem>
    </Menu>
  );

  const handleFollow = () => {
    console.log('follow clicked');
    const follower = {
      followersCount : bloggerProfile.followersCount + 1,
      followers : [{followerEmail : user.email}, ...bloggerProfile.followers]
    }
    setFollowed(true)
    setCount(count + 1)
    axios.put(`https://aqueous-chamber-45567.herokuapp.com/users/followers/${user?.email}`, follower)
  }

  const handleUnFollow = () => {
    console.log('unfollow clicked');
    const userWithdraw = bloggerProfile.followers.filter(l => l?.followerEmail !== user?.email)
    console.log(userWithdraw);
    const follower = {
      followersCount : bloggerProfile.followersCount - 1,
      followers : [...userWithdraw]
    }
    setFollowed(false)
    setCount(count + 1)
    axios.put(`https://aqueous-chamber-45567.herokuapp.com/users/followers/${user?.email}`, follower)
  }
  let mode = localStorage.getItem("theme");
  const card = mode === "light" ? "moreLight" : "moreDark" ;
  const bg = mode === "light" ? "lightest" : "darkish";
  const text = mode === "light" ? "black" : "darkLight" ;
  return (
    <Box>
      <Box sx={{ flexGrow: 1, mt: "25px" }}>
        <AppBar position="static" id={card}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <img
                style={{ width: "60px", height: "60px", borderRadius: "30px" }}
                src={profile.profile}
                alt=""
              />
            </IconButton>
            <Box>
              <Typography
               id={text}
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block", fontWeight: 500} }}
              >
                {profile.roomName}
              </Typography>
              <Typography style={{ fontSize: 12, fontWeight: 500, color: "rgba(255, 255, 255, 0.823)" }} id={text}>
              {bloggerProfile.followersCount} Followers
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Search sx={{ borderRadius: "20px" }} id={bg}>
                <SearchIconWrapper>
                  <SearchIcon id={text}/>
                </SearchIconWrapper>
                <StyledInputBase
                 id={text}
                  placeholder="Search videos"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <FollowingList></FollowingList>
              {/* {
                followed  ? <Button
                style={{
                  backgroundColor: green[900],
                  borderRadius: "20px",
                  paddingInline: "15px",
                  paddingTop: "0",
                  paddingBottom: "0",
                  color: "white",
                }}
                onClick={handleUnFollow}
              >
                UnFollow 
              </Button> : <Button
                style={{
                  backgroundColor: green[900],
                  borderRadius: "20px",
                  paddingInline: "15px",
                  paddingTop: "0",
                  paddingBottom: "0",
                  color: "white",
                }}
                onClick={handleFollow}
              >
                Follow
              </Button>
              } */}
              
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Box>
  );
}
