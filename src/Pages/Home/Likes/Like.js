import { Grid } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Likes.css';
import LikeList from './LikeList';
import LeftSection from './LeftSection';


const Like = () => {

    const [likerLikes, setlikerLikes] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.firebase.user)

    useEffect(() => {
        const likersUrl = `https://grass-dour-wasp.glitch.me/blogs`;
        setLoading(true);
        fetch(likersUrl)
            .then((response) => response.json())
            .then((data) => {
                setlikerLikes(data.blogs);
            }
            );
        setLoading(false);
    }, []);


    let theme;
    theme = localStorage.getItem("theme");
    let text = theme === "light" ? "black" : "darkLight";

    return (
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className="like-container" style={{height:"100%"}}>
            {likerLikes.slice(0, 1).map((a)=>
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className='like-friction-element'>
                <LeftSection key={a._id} video={a.video} thumbnail={a.thumbnail} uploadTime={a.uploadTime} views={a.views} likes={a.likes}/>
            </div>
        </Grid>
            ) }
            <Grid item xs={12} sm={6} md={8} lg={8} id={theme === "light" ? "moreLight" : "moreDark"}>
                <div className='like-friction-element-2'>

                    <section >
                        <LikeList />
                    </section>

                </div>
            </Grid>

        </Grid>
    );
};

export default Like;