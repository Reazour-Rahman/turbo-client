import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExploreIcon from "@mui/icons-material/Explore";
import RestoreIcon from "@mui/icons-material/Restore";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import GridViewIcon from '@mui/icons-material/GridView';
import {
  Link,
  NavLink,
  NavNavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Drawer.css";
import NavigationBar from "../Home/NavigationBar/NavigationBar";
import Home from "../Home/Home";
import Details from "../Home/Details/Details";
import DarkMode from "../Theme/DarkMode";
import { useSelector } from "react-redux";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RecommendedRoom from "./RecommendedRoom";
const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "auto",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "auto",
  width: `calc(${theme.spacing(7)} - 21px)`,
  [theme.breakpoints.up("xs")]: {
    width: `calc(${theme.spacing(9)} - 21px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.firebase.user)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /*modemode */
  let mode;
  mode = localStorage.getItem("theme");
  // const hard = "Mode"

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar id={mode === "light" ? "moreLight" : "moreDark"} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            className="nav-btn"
            id={mode === "light" ? "black" : "darkLight"}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <CodeOffIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div"> */}
          {/* <img width={150} src={logo} alt="" /> */}
          {/* </Typography> */}
          <div></div>
          <NavigationBar user={user}></NavigationBar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="side-navigation" >
        <DrawerHeader id={mode === "light" ? "moreLight" : "moreDark"} className="no-border">
          <IconButton className="nav-btn" id={mode === "light" ? "black" : "darkLight"} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List id={mode === "light" ? "moreLight" : "moreDark"} style={{  border: "0px", height:"100vh" }}>
          <Link className="no-link" to="/home">
            <NavLink selected className="nav-btn" id={mode === "light" ? "black" : "darkLight"} to="/">
              <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
                <ListItemIcon className="fs-6">
                  <HomeIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </NavLink>
          </Link>

          <NavLink className="nav-btn hoverAll" id={mode === "light" ? "black" : "darkLight"} to="/">
            <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
              <ListItemIcon className="fs-6">
                <ExploreIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" id={mode === "light" ? "black" : "darkLight"} to="/candyBlock">
            <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
              <ListItemIcon className="fs-6">
                <ConnectWithoutContactIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText primary={"Social Game"} />
            </ListItem>
          </NavLink>
          <NavLink className="nav-btn" id={mode === "light" ? "black" : "darkLight"} to="/breakOut">
            <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
              <ListItemIcon className="fs-6">
                <SportsTennisIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText primary={"Break It Out"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" id={mode === "light" ? "black" : "darkLight"} to="/multiplication">
            <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
              <ListItemIcon className="fs-6">
                <GridViewIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText primary={"ProPlayer"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" id={mode === "light" ? "black" : "darkLight"} to="/subscriptions">
            <ListItem className="nav-btn" id={mode === "light" ? "black" : "darkLight"} button>
              <ListItemIcon className="fs-6">
                <SubscriptionsIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText primary={"Followings"} />
            </ListItem>
          </NavLink>
          <Divider style={{ backgroundColor: "white" }} />

          {/* <NavLink className="nav-btn" id={mode=== "light" ? "black" : "darkLight" } to="/">
            <ListItem className="nav-btn" id={mode=== "light" ? "black" : "darkLight" } button>
              <ListItemIcon className="fs-6">
                <i class="fas fa-spinner" id={mode=== "light" ? "black" : "darkLight" }></i>
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" id={mode=== "light" ? "black" : "darkLight" } button>
              <ListItemIcon className="fs-6">
                <LibraryAddIcon className="nav-btn" id={mode=== "light" ? "black" : "darkLight" } />
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" id={mode=== "light" ? "black" : "darkLight" } button>
              <ListItemIcon className="fs-6">
                <i class="fas fa-spinner" id={mode=== "light" ? "black" : "darkLight" }></i>
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink> */}
          <RecommendedRoom />

          <Divider style={{ backgroundColor: "white" }} />
          <NavLink className="nav-btn" to="/">
            <ListItem button className="nav-btn" id={mode === "light" ? "black" : "darkLight"}>
              <ListItemIcon className="fs-6">
                <RestoreIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText id={mode === "light" ? "black" : "darkLight"} primary={"Watch letter"} />
            </ListItem>
          </NavLink>


          <NavLink className="nav-btn" to="/likes">

            <ListItem button className="nav-btn">
              <ListItemIcon className="fs-6">
                <SlowMotionVideoIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>

              <ListItemText id={mode === "light" ? "black" : "darkLight"} primary={"Liked videos"} />

            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/history">
            <ListItem button>
              <ListItemIcon className="fs-6">
                <RestoreIcon className="nav-btn" id={mode === "light" ? "black" : "darkLight"} />
              </ListItemIcon>
              <ListItemText id={mode === "light" ? "black" : "darkLight"} primary={"History"} />
            </ListItem>
          </NavLink>

          <Divider style={{ backgroundColor: "white" }} />

          <NavLink className='nav-btn' to='/yourVideos'>
          <ListItem button className="nav-btn" >
            <ListItemIcon className="fs-6">
              <FavoriteBorderIcon id={mode === "light" ? "black" : "darkLight"} />
            </ListItemIcon>
            <ListItemText id={mode === "light" ? "black" : "darkLight"} primary={"Your videos"} />
          </ListItem>
          </NavLink>
          

        </List>
      </Drawer>
      <Box

        component="main"
        className="main-color"
        id={mode === "light" ? "lightest" : "darkish"}
        sx={{ flexGrow: 1, p: 2, pt: 0 }}
      >
        <DrawerHeader />
        {/* :::::::::::::::::::::::::::
        Default Route in main page
        ::::::::::::::::::::::::::::*/}
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>

        <Outlet>
          <Routes> </Routes>
        </Outlet>
      </Box>
    </Box>
  );
}

