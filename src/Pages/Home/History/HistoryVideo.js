import React, { useState } from 'react';
import './History.css';
import video from '../../../assets/gig.mp4';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HistoryVideo = ({history}) => {

    /* :::::::::::::::::::::
    Menu
    :::::::::::::::::::::::*/

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
    let text = theme === "light" ? "black" : "darkLight" ;
    let muted = theme === "light" ? "black" : "muted" ;

    const deleteFromHistory = (id) => {
      axios.delete(`https://grass-dour-wasp.glitch.me/views/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
              window.location.reload();
        }
      })
      handleClose()
    }

    const [allViewers, setAllViewers] = useState([])
    const { _id, title, video, bloggerName, category, bloggerEmail, viewers, uploadTime, thumbnail, bloggerPhoto, views, description } = history;
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
        await axios.put(`https://grass-dour-wasp.glitch.me/blogs/views/${id}`, viewsData)
      }
      else {
        const viewerData = {viewerEmail :user.email}
        const viewsData = {
          views : views + 1,
          viewers : [...viewers,  viewerData]
        }
        await axios.put(`https://grass-dour-wasp.glitch.me/blogs/views/${id}`, viewsData)
      }
  
      const data = {
        blogId : _id, viewerName:user.displayName, viewerEmail:user.email, title, video, bloggerName, category, bloggerEmail, uploadTime, thumbnail, bloggerPhoto, views, description
      }
      await axios.post('https://grass-dour-wasp.glitch.me/views', data)
      handleClose()
  
    }
    
    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='history-video-container'>

            <Grid item xs={12} sm={12} md={4} lg={3}>
                <video controls src={history.video} poster={history.thumbnail} type="video" className='history-video'></video>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={9}>
                <div className='history-video-title-and-menu'>
                    <p id={text}>{history.title}</p>
                    <div>
                        <IconButton
                         size="large"
                         id="fade-button"
                         aria-controls={open ? 'fade-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                         >
                            <MoreVertIcon  id={text}/>
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
                            <MenuItem onClick={() => deleteFromHistory(history._id)}>Remove From History</MenuItem>
                            <MenuItem onClick={() => singleBlog(history.blogId)}>Visit The Bog</MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className='history-des'>
                    <small id={muted} className="ds-fs">{history.views}</small>
                    <small id={muted} className="ds-fs">{history?.description?.slice(0,250)}</small>
                </div>
            </Grid>
        </Grid>
    );
};

export default HistoryVideo;



/* 



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


import React from "react";
import VideoPlayer from "react-video-js-player";
// import videoSrc from "../../assets/gig.mp4";


const Video = ({videoSrc, image}) => {
  const poster = "https://wallpapercave.com/wp/wp6543230.jpg";
  // const videoSource = videoSrc;

  return (
    <div>
      <VideoPlayer
        src={videoSrc}
        poster={image}
        className="sz"
        playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 3, 6]}
      />
    </div>
  );
};

export default Video;

*/