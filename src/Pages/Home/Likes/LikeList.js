import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Like from "./Like";
import LikedVideo from "./LikedVideo";

const LikeList = () => {
    const [likerLikes, setlikerLikes] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.firebase.user)

    useEffect(() => {
        const likersUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
        setLoading(true);
        fetch(likersUrl)
            .then((response) => response.json())
            .then((data) => {
                setlikerLikes(data.blogs);
                // console.log(data.blogs);
                // const a = data.blogs;
                // for (const likesdata of a) {
                //     setlikerLikes(likesdata);
                // }
            }
            );
        setLoading(false);
    }, []);

    console.log(likerLikes);


    const userLikes = likerLikes?.likers?.filter(h => h?.likerEmail === user?.email)
    console.log("asdasdasdas", userLikes);
    return (
        <div style={{ color: "white" }}>
            <Box>
                {!loading ? (
                    likerLikes?.map((like) => (
                        // console.log(like)
                        <LikedVideo like={like} video={likerLikes.video} title={likerLikes.title}></LikedVideo>

                    ))
                ) : (
                    <div></div>
                )}

            </Box>
        </div>
    );
};

export default LikeList;
