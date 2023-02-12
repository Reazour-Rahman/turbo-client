import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LikedVideo from "./LikedVideo";

const LikeList = () => {
    const [likerLikes, setlikerLikes] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = useSelector(state => state.firebase.user)

    useEffect(() => {
        const likersUrl = `https://proplayer-backend.vercel.app/blogs`;
        setLoading(true);
        fetch(likersUrl)
            .then((response) => response.json())
            .then((data) => {
                setlikerLikes(data.blogs);
            }
            );
        setLoading(false);
    }, []);

    console.log(likerLikes);

    const likedBlogs = likerLikes.filter(character => {
        return character?.likers?.find(f => {
            return f?.likerEmail?.includes(user.email)
        })
    });

    return (
        <div style={{ color: "white" }}>
            {likedBlogs.map(l => <LikedVideo like={l} video={l.video} title={l.title}></LikedVideo>)}
        </div>
    );
};

export default LikeList;
