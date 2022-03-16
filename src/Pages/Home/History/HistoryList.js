import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import History from "./History";


const HistoryList = () => {

    const { _id, title, comment, username, userEmail, userImage, likes, views, viewers, viewerEmail, status, bloggerEmail, pending, approved } =
        History;

    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(false);
    // const historyUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
    useEffect(() => {
        setLoading(true);
        setTimeout(async () => {
            const response = await fetch(
                "https://aqueous-chamber-45567.herokuapp.com/blogs"
            );
            const data = await response.json();
            setLoading(false);
            for (const blog of data.blogs) {
                setHistories(blog);
            }
        });
    }, []);

    console.log(histories);

    return (

        <div style={{ color: "white" }}>
            <Box sx={{ m: 5 }}>



                {!loading ? (
                    histories?.viewers?.map((history) => <History key={history._id} history={history}></History>)
                ) : (
                    <div>

                    </div>
                )}
                {/* </Grid> */}


            </Box>
        </div>

    );
};

export default HistoryList;
