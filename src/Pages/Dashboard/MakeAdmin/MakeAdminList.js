import { Box, Container, Grid, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBox from "../Bloggers/SearchBox";
import MakeAdmin from "./MakeAdmin";


const MakeAdminList = () => {

    const [bloggers, setBloggers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const { _id, bloggerName, index, status, bloggerEmail, pending, approved } =
        MakeAdmin;

    useEffect(() => {
        // const bloggerUrl = `https://mocki.io/v1/24ee15c5-3e9e-401c-b397-06a8e56db4a5`;

        // const bloggerUrl = "https://aqueous-tor-77774.herokuapp.com/users/admin";
        const bloggerUrl = "http://localhost:5000/users";

//         const bloggerUrl = "https://aqueous-chamber-45567.herokuapp.com/users/admin";



            fetch(bloggerUrl, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bloggerEmail)
            })
                .then((response) => response.json())
                .then((data) => setBloggers(data));
            setLoading(true);
        
    }, [bloggers]);
    console.log(bloggers);

    return (
        <div style={{ color: "white" }}>
            <Box sx={{ m: 5 }}>
                <SearchBox></SearchBox>

                {/* <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 2, sm: 8, md: 8, lg: 10 }}
                > */}
                <Table size="small" >
                    <TableHead>
                        <TableRow >
                            <Grid container spacing={2}  >
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>Index</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>Blogger Name</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>Blogger Email</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>Role</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>Status</TableCell>
                                </Grid>

                            </Grid>


                        </TableRow>
                    </TableHead>
                </Table>
                {loading ? (
                    bloggers.map((blogger) => <MakeAdmin key={blogger._id} blogger={blogger}></MakeAdmin>)
                ) : (
                    <div>

                    </div>
                )}
                {/* </Grid> */}


            </Box>
        </div>
    );
};

export default MakeAdminList;
