import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBox from "../Bloggers/SearchBox";

import Blogger from "./Blogger";


const Bloggers = () => {

    const [bloggers, setBloggers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const bloggerUrl = `https://mocki.io/v1/24ee15c5-3e9e-401c-b397-06a8e56db4a5`;
        setTimeout(() => {
            fetch(bloggerUrl)
                .then((response) => response.json())
                .then((data) => setBloggers(data));
            setLoading(true);
        }, 4000);
    }, []);
    console.log(bloggers);

    return (
        <div>

            <Box sx={{ m: 5, mt: 2 }}>
                <SearchBox></SearchBox>

                <Grid
                    container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 2, sm: 8, md: 8, lg: 14 }}
                >
                    {loading ? (
                        bloggers.map((blogger) => <Blogger key={blogger._id} blogger={blogger}></Blogger>)
                    ) : (
                        <div>

                        </div>
                    )}
                </Grid>


            </Box>
        </div>
    );
};

export default Bloggers;
