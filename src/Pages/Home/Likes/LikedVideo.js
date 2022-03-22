import React from 'react';
import './Likes.css';
import video from '../../../assets/gig.mp4';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import axios from 'axios';


const LikedVideo = ({ like, title, video }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let theme;
    theme = localStorage.getItem("theme");
    let text = theme === "light" ? "black" : "darkLight";
    let muted = theme === "light" ? "black" : "muted";
    // backend is not created yet
    // const deleteFromHistory = (id) => {
    //     axios.delete(`https://aqueous-chamber-45567.herokuapp.com/blogs/${id}`)
    //         .then(res => {
    //             if (res.data.deletedCount) {
    //                 window.location.reload();
    //             }
    //         })
    //     handleClose()
    // }

    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='like-video-container'>

            <Grid item xs={12} sm={12} md={4} lg={3}>
                <video controls src={like.video} poster={like.thumbnail} type="video" className='like-video'></video>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={9}>
                <div className='like-video-title-and-menu'>
                    <p id={text}>{like.title}</p>
                    <div>
                        <IconButton
                            size="large"
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreVertIcon id={text} />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >

                            {/* <MenuItem onClick={handleClose}>Add To Queue</MenuItem>
                            {/* <MenuItem onClick={handleClose}>Save to Watch Later</MenuItem>
                            {/* <MenuItem onClick={handleClose}>Save to PlayList</MenuItem>
                            <divider />
                            {/* <MenuItem onClick={() => deleteFromHistory(like._id)}>Remove From Liked Videos</MenuItem> */}
                            {/* <MenuItem onClick={handleClose}>OPPS</MenuItem> */}
                        </Menu>
                    </div>
                </div>

                {/* <div className='like-des'>
                    <small id={muted} className="ds-fs">{like.bloggerName}</small>

                </div> */}
            </Grid>
        </Grid>
    );
};

export default LikedVideo;


