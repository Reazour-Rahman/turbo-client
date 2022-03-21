import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import './RoomDashboard.css';
import './listItems.css';
import ArticleIcon from '@mui/icons-material/Article';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReportIcon from '@mui/icons-material/Report';
import { Avatar } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

let mode;
    mode = localStorage.getItem("theme")
    const text= mode === "light" ? "black" : "darkLight" ;
    const card= mode === "light" ? "moreLight" : "moreDark";
    const bg= mode ==="light" ? "lightest" : "darkish";

export const mainListItems = (

    <React.Fragment>
        <ListItemButton as={Link} component="a" to="/roomDashboard">
            <ListItemIcon>
            <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M=" />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Reazour Rahaman" />

        </ListItemButton>

        <ListItemButton as={Link} component="a"  to="/roomDashboard">
            <ListItemIcon >
                <DashboardIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Room Dashboard" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/">
            <ListItemIcon>
                <HomeIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Home" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/roomDashboard/content">
            <ListItemIcon>
                <ArticleIcon id={text}className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Content" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/roomDashboard/userAnalytics">
            <ListItemIcon>
                <BarChartIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Analytics" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="">
            <ListItemIcon>
                <InsertCommentIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Comments" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/roomDashboard/liquidity">
            <ListItemIcon>
                <MonetizationOnIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="liquidity" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <ReportIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Reports" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/roomDashboard/upload-products">
            <ListItemIcon>
                <FileUploadIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Gaming Console" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="">
            <ListItemIcon>
                <ChatBubbleOutlineIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Message" />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader className='dashboard-button' id={text} component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Another" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="Another" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon id={text} className='dashboard-button' />
            </ListItemIcon>
            <ListItemText id={text} className='dashboard-button' primary="LogOut" />
        </ListItemButton>
    </React.Fragment>
);