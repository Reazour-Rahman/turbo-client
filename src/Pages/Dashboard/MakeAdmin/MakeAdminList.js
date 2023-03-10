import { Box, Grid, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MakeAdmin from "./MakeAdmin";

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

const MakeAdminList = () => {
    const [bloggers, setBloggers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchUser, setsearchUser] = useState([]);
    const { bloggerName, email } =
        MakeAdmin;

    useEffect(() => {
        const bloggerUrl = "https://grass-dour-wasp.glitch.me/users";
        fetch(bloggerUrl, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(email, bloggerName)
        })
            .then((response) => response.json())
            .then((data) => {
                setBloggers(data);
                setsearchUser(data)

            });
        setLoading(true);

    }, [bloggerName, email, searchUser]);

    const handleSearch = e => {
        const searchTextValue = e.target.value;
        const UserMatch = bloggers?.filter(blogger => (blogger?.email || blogger?.bloggerName)?.toLowerCase().includes(searchTextValue.toLowerCase()));
        setsearchUser(UserMatch);
    }



    let mode;
    mode = localStorage.getItem("theme")
    const text = mode === "light" ? "black" : "darkLight";
    const card = mode === "light" ? "moreLight" : "moreDark";
    const bg = mode === "light" ? "lightest" : "darkish";
    return (
        <div style={{ color: "white" }}>
            <Box sx={{ m: 5 }}>
                <div>
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
                </div>
                <Table size="small" >
                    <TableHead>
                        <TableRow >
                            <Grid container spacing={2}  >
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} id={text}>Index</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} id={text}>Blogger Name</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} id={text}>Blogger Email</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} id={text}>Role</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} id={text}>Status</TableCell>
                                </Grid>
                            </Grid>
                        </TableRow>
                    </TableHead>
                </Table>

                {searchUser?.map((blogger) => (blogger?.email || blogger.bloggerName) ? <MakeAdmin key={blogger?._id} blogger={blogger}></MakeAdmin> : null)}


            </Box>
        </div>
    );
};

export default MakeAdminList;
