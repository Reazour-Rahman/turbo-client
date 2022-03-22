import React from "react";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileHome from "../ProfileHome/ProfileHome";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AmazonProducts from '../AmazonProducts/AmazonProducts'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Profile = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let mode = localStorage.getItem("theme");
  const card = mode === "light" ? "moreLight" : "moreDark" ;
  const bg = mode === "light" ? "lightest" : "darkish";
  const text = mode === "light" ? "black" : "darkLight" ;

  return (
    <div style={{ paddingLeft: "51px" }}>
      <ProfileBanner />
      <ProfileHeader />
      <Box style={{width:"100%"}} id={bg}>
        <AppBar position="static" id={card}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{padding:"0px"}}
            id={text}
          >
            <Tab  label="Home" {...a11yProps(0)} />
            <Tab label="GamingConsole" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <ProfileHome />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <AmazonProducts/>
          </TabPanel>
        </SwipeableViews>
      </Box>
      
    </div>
  );
};

export default Profile;