import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Divider, Typography } from "@mui/material";
import './Likes.css';
import { useSelector } from "react-redux";

const LeftSection = ({video, thumbnail, views, likes, uploadTime}) => {
    let pl;
    pl = localStorage.getItem("theme");
    let text = pl === "light" ? "black" : "darkLight";

    const [selectedValue, setSelectedValue] = React.useState("a");
    const user = useSelector((state) => state.firebase.user)
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [selectedValues, setSelectedValues] = React.useState("x");

    const handleChanges = (event) => {
        setSelectedValues(event.target.value);
    };


    if (selectedValue === "b") {

    }

    return (
        <div>
            <div>
                <video controls src={video} poster={thumbnail} type="video" className='like-video'></video>
            </div>

            <p id={text}>Liked Video</p>
            <br />
            <small id={text}>{views} views  Last updated on {uploadTime}</small>
            <br />
            <br />
            <Divider />
            <div style={{ display: "flex" }}>
                <Avatar className="mt-2">
                    <img
                        className="likeravatar"
                        src={user.photoURL}
                        alt="profile"
                    />
                </Avatar>
                <Box sx={{ ml: 2, mt: 2 }}>
                    <Typography className="likerFont" id={text}>{user.displayName}</Typography>

                </Box>
            </div>
        </div >
    );
};

export default LeftSection;

