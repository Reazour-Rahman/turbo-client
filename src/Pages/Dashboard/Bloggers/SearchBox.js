import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
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

const SearchBox = (blogger) => {
    const { roomName } = blogger;
    const [searchText, setSearchText] = useState('')
    const [bloggerSearchRoom, setBloggerSearchRoom] = useState([]);
    // useEffect(() => {
    //     const url = `https://proplayer-backend.vercel.app/users`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBloggerSearchRoom(data));
    // }, [searchText])
    const handleSearch = e => {

        const searchTextValue = e.target.value;
        console.log(searchTextValue)
        setSearchText(searchTextValue);
        const roomNameMatch = roomName.filter.includes(searchText);
        console.log(roomNameMatch);

    }
    return (

        <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', mb: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={8}>
                    <Search sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ color: "white" }}>
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