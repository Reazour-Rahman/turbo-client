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
import './Dashboard.css';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton as={Link} component="a" to="/dashboard">
            <ListItemIcon>
                <DashboardIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Dashboard" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/">
            <ListItemIcon>
                <HomeIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Home" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <SubscriptionsIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Subscription" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/bloggerList">
            <ListItemIcon>
                <PeopleIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Bloggers" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/upload">
            <ListItemIcon>
                <CloudUploadIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Upload" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/makeAdmin">
            <ListItemIcon>
                <PeopleIcon className='dashboard-button'/>
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Make Admin" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/reports">
            <ListItemIcon>
                <BarChartIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Reports" />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <LayersIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Another" />
        </ListItemButton>

        <ListItemButton as={Link} component="a" to="/dashboard/message">
            <ListItemIcon>
                <ChatBubbleOutlineIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Message" />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader className='dashboard-button' style={{backgroundColor:"#102841"}} component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Another" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="Another" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon className='dashboard-button' />
            </ListItemIcon>
            <ListItemText className='dashboard-button' primary="LogOut" />
        </ListItemButton>
    </React.Fragment>
);