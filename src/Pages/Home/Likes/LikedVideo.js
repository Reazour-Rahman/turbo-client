import React, { useState } from 'react';
import './Likes.css';
import video from '../../../assets/gig.mp4';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const LikedVideo = ({ like }) => {

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
    //     axios.delete(`https://proplayer-backend.vercel.app/blogs/${id}`)
    //         .then(res => {
    //             if (res.data.deletedCount) {
    //                 window.location.reload();
    //             }
    //         })
    //     handleClose()
    // }

    const [allViewers, setAllViewers] = useState([])
    const { _id, title, video, bloggerName, category, bloggerEmail, viewers, uploadTime, thumbnail, bloggerPhoto, views, description } =like;
    const navigate = useNavigate()
    const user = useSelector(state => state.firebase.user)
    const matched = viewers?.find(v => v.viewerEmail === user.email)
  
    const singleBlog = async (id) => {
      navigate(`/details/${id}`)
  
      if (matched) {
        const viewsData = {
          views : views + 1,
          viewers : [...viewers]
        }
        await axios.put(`https://proplayer-backend.vercel.app/blogs/views/${id}`, viewsData)
      }
      else {
        const viewerData = {viewerEmail :user.email}
        const viewsData = {
          views : views + 1,
          viewers : [...viewers,  viewerData]
        }
        await axios.put(`https://proplayer-backend.vercel.app/blogs/views/${id}`, viewsData)
      }
  
      const data = {
        blogId : _id, viewerName:user.displayName, viewerEmail:user.email, title, video, bloggerName, category, bloggerEmail, uploadTime, thumbnail, bloggerPhoto, views, description
      }
      await axios.post('https://proplayer-backend.vercel.app/views', data)
  
    }

    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='like-video-container'>

            <Grid item xs={12} sm={12} md={4} lg={3}>
                <video controls src={like.video} poster={like.thumbnail} type="video" className='like-video'></video>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={9}>
                <div className='like-video-title-and-menu'>
                <div onClick={() => singleBlog(like._id)} style={{cursor:'pointer'}} >
                    <div>
                    <p id={text}>{like.title}</p>
                    </div>
                   <div>
                   <p id={text}>{like.views} views </p>
                   </div>
                   <Box sx={{mt:2}}>
                   <p  id={text}>{like.description.slice(0,300)}</p>
                   </Box>
                    </div>
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

                            <MenuItem onClick={handleClose}>Add To Queue</MenuItem>
                            <MenuItem onClick={handleClose}>Save to Watch Later</MenuItem>
                            <MenuItem onClick={handleClose}>Save to PlayList</MenuItem>
                            <divider />
                            {/* <MenuItem onClick={() => deleteFromHistory(like._id)}>Remove From Liked Videos</MenuItem> */}

                        </Menu>
                    </div>
                </div>

            </Grid>
        </Grid>
    );
};

export default LikedVideo;


