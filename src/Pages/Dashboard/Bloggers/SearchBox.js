import React, { useEffect, useState } from 'react';
import JSONDATA from './blogfakedata.JSON'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../../assets/logo.png'
import { Grid } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    justifyContent: "center",


    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(1),
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',



    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',

    },
}));

const SearchBox = () => {

    const [searchText, setSearchText] = useState('')
    const [bloggerSearchEmail, setBloggerSearchEmail] = useState([]);
    useEffect(() => {
        const url = `https://mocki.io/v1/24ee15c5-3e9e-401c-b397-06a8e56db4a5?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBloggerSearchEmail(data));
    }, [searchText])
    const handleSearch = e => {

        const searchTextValue = e.target.value;
        console.log(searchTextValue)
        setSearchText(searchTextValue);

    }
    return (

        <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', mb: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={8}>
                    <Search sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={handleSearch}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
                <Grid item xs={2}>

                </Grid>

            </Grid>

        </Box>


    );
};

export default SearchBox;