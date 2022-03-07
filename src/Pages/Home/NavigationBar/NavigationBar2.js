import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Filter from "./Filter/Filter";

const pages = [
  "Products",
  "Pricing",
  "Blog",
  <FavoriteIcon></FavoriteIcon>,
  <WatchLaterIcon></WatchLaterIcon>,
  <PlayCircleIcon></PlayCircleIcon>,
  <WatchLaterIcon></WatchLaterIcon>,
];

const NavigationBar2 = ({ setFilter }) => {
  // console.log(setFilter);
  return (
    <AppBar
      position="static"
      sx={{ marginBottom: "15px" }}
      className="nav-color"
    >
      <Container maxWidth="xl" style={{ backgroundColor: "#102841" }}>
        <Toolbar disableGutters>
          {/* <Box sx={{  display:'flex'}} style={{height:"50px"}}>
            {pages.map((page) => (
              <Button
              style={{marginTop:"0px", marginBottom:"0px"}}
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <Filter setFilter={setFilter}></Filter>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar2;
