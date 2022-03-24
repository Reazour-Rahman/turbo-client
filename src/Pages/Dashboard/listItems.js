import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import './Dashboard.css';
import Edit from './Edit';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

export const mainListItems = (
    <React.Fragment>

        <ListItemButton as={Link} component="a" to="/dashboard">
            <ListItemIcon>
                <AppRegistrationIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Default" />
        </ListItemButton>

        <Edit></Edit>

        <ListItemButton as={Link} component="a" to="/dashboard/home">
            <ListItemIcon>
                <DashboardIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Dashboard" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/allBlogs">
            <ListItemIcon>
                <DensitySmallIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="All Blogs" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/">
            <ListItemIcon>
                <HomeIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Home" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/analytics">
            <ListItemIcon>
                <SubscriptionsIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Analytics" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/bloggerList">
            <ListItemIcon>
                <PeopleIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Bloggers" />
        </ListItemButton>

        {/* <ListItemButton as={Link} component="a" to="/dashboard/upload">
            <ListItemIcon>
                <CloudUploadIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Upload" />
        </ListItemButton> */}

        <ListItemButton as={Link} component="a" to="/dashboard/makeAdmin">
            <ListItemIcon>
                <PeopleIcon id={text} className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Make Admin" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/reports">
            <ListItemIcon>
                <BarChartIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Reports" />
        </ListItemButton>


        <ListItemButton as={Link} component="a" to="/dashboard/message">
            <ListItemIcon>
                <ChatBubbleOutlineIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Message" />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* <ListSubheader className='dashboard-button' id={text} component="div" inset>
            Welcome To Pro Player
        </ListSubheader> */}

        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="LogOut" />
        </ListItemButton>
    </React.Fragment>
);