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
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="nav-color" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            className="nav-btn"
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div"> */}
          {/* <img width={150} src={logo} alt="" /> */}
          {/* </Typography> */}
          <div></div>
          <NavigationBar></NavigationBar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="side-navigation">
        <DrawerHeader className="nav-color">
          <IconButton className="nav-btn" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List className="nav-color" style={{ height: "100%" }}>
          <Link className="no-link" to="/home">
            <NavLink selected className="nav-btn" to="/">
              <ListItem className="nav-btn" button>
                <ListItemIcon className="ms-2 fs-5">
                  <HomeIcon className="nav-btn" />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </NavLink>
          </Link>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" button>
              <ListItemIcon className="ms-2 fs-5">
                <ExploreIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"Explore"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" button>
              <ListItemIcon className="ms-2 fs-5">
                <SubscriptionsIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"Subscriptions"} />
            </ListItem>
          </NavLink>
<Divider style={{backgroundColor:"white"}}/>
          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" button>
              <ListItemIcon className="ms-2 fs-5">
                <i class="fas fa-spinner"></i>
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" button>
              <ListItemIcon className="ms-2 fs-5">
                <LibraryAddIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/">
            <ListItem className="nav-btn" button>
              <ListItemIcon className="ms-2 fs-5">
                <i class="fas fa-spinner"></i>
              </ListItemIcon>
              <ListItemText primary={"Library"} />
            </ListItem>
          </NavLink>
          <Divider style={{backgroundColor:"white"}}/>
          <NavLink className="nav-btn" to="/v">
            <ListItem button className="nav-btn">
              <ListItemIcon className="ms-2 fs-5">
                <RestoreIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"Watch letter"} />
            </ListItem>
          </NavLink>

          <NavLink className="nav-btn" to="/v">
            <ListItem button className="nav-btn">
              <ListItemIcon className="ms-2 fs-5">
                <SlowMotionVideoIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"Liked videos"} />
            </ListItem>
          </NavLink>

          <span className="nav-btn">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5">
                <RestoreIcon className="nav-btn" />
              </ListItemIcon>
              <ListItemText primary={"History"} />
            </ListItem>
          </span>
          <Divider style={{backgroundColor:"white"}}/>
          <ListItem button className="nav-btn">
            <ListItemIcon className="ms-2 fs-5">
              <FavoriteBorderIcon className="nav-btn" />
            </ListItemIcon>
            <ListItemText primary={"Your videos"} />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        className="main-color main-bg"
        sx={{ flexGrow: 1, p: 2, pt: 0 }}
      >
        <DrawerHeader />
        {/* :::::::::::::::::::::::::::
        Default Route in main page
        ::::::::::::::::::::::::::::*/}
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>

        <Outlet>
          <Routes> </Routes>
        </Outlet>
      </Box>
    </Box>
  );
}
