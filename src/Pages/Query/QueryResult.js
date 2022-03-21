import React from 'react';
import './QueryResult.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import axios from 'axios';


const QueryResult = ({db}) => {

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
      axios.delete(`https://aqueous-chamber-45567.herokuapp.com/views/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
              window.location.reload();
        }
      })
      handleClose()
    }
    
    return (
        <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} className='history-video-container'>

            <Grid item xs={12} sm={12} md={4} lg={5}>
                <video controls src={db?.video} poster={db?.thumbnail} type="video" className='history-video'></video>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={7}>
                <div className='history-video-title-and-menu'>
                    <p style={{fontSize:"12px"}} id={text}>{db?.title}</p>
                    <div>
                        <IconButton
                        style={{padding:"0px"}}
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
                            <MenuItem onClick={() => deleteFromHistory(db._id)}>Remove From History</MenuItem>
                            <MenuItem onClick={handleClose}>Add To Que</MenuItem>
                            <MenuItem onClick={handleClose}>OPPS</MenuItem>
                        </Menu>
                    </div>
                </div>

                <div style={{marginTop:"0px"}} className='history-des'>
                    <small id={muted} className="ds-fs">{db?.views}</small>
                    <small id={muted} className="ds-fs">{db?.description?.slice(0,150)}</small>
                </div>
            </Grid>
        </Grid>
    );
};

export default QueryResult;
