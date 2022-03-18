import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBox from "../Bloggers/SearchBox";

import Blogger from "./Blogger";


const Bloggers = () => {

    const [bloggers, setBloggers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // const bloggerUrl = `https://mocki.io/v1/24ee15c5-3e9e-401c-b397-06a8e56db4a5`;
        const bloggerUrl = `http://localhost:5000/users`;
        fetch(bloggerUrl)
        .then((response) => response.json())
        .then((data) => {
            setBloggers(data)
        });
        setLoading(true);
    }, []);
    

    return (
        <div>

            <Box sx={{ m: 5, mt: 2 }}>
                <SearchBox ></SearchBox>

                <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 2, sm: 8, md: 8, lg: 14 }}
                >
                    {
                        bloggers?.map((blogger) => blogger?.room?.roomName ? <Blogger email={blogger?.email} followersCount={blogger?.followersCount} blogger={blogger?.room}></Blogger> : null)
                    }
                </Grid>


            </Box>
        </div>
    );
};

export default Bloggers;
