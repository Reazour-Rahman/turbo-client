import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./detailsvideo.css";
import VideoStableIcon from "@mui/icons-material/VideoStable";
import HistoryIcon from "@mui/icons-material/History";
import AddLinkIcon from "@mui/icons-material/AddLink";
import ResponsiveButton from "./ResponsiveButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import useFirebase from '../../../Hooks/useFirebase'


const Buttons = ({ uploadTime, bloggerName, blogId, count, allLikers, allReadyLiked}) => {

  const [liked, setLiked] = useState(allReadyLiked)
  const [likeCount, setLikeCount] = useState(count)
  const {user} = useFirebase()


  //sending liker array of object


  const countPlus = () => {  
    setLiked(true)
    setLikeCount(parseInt(likeCount) + 1)
  }


  const countMinus = () => {
    setLiked(false)
    setLikeCount(parseInt(likeCount) - 1)
    // const userWithdraw = allLikers.filter(l => l.liker !== user.email)
    // setLiker(userWithdraw)
  }

  useEffect(() => {
    const likes = {
      likes : likeCount
    }
    // if (userLiked) {
    //   setLiked(true)
    // }
    // else{
    //   setLiked((false))
    // }
    console.log(likes);
    axios.put(`https://aqueous-tor-77774.herokuapp.com/blogs/likes/${blogId}`, likes)
    
  },[blogId, likeCount])
  
  return (
    <div>
      <section>
        <div className="full-nav">
          <div className="holder-container">
            <Avatar
              alt="Remy Sharp"
              src="https://reazour-rahaman.netlify.app/static/media/MyPgoto.a3d16b45.png"
            />

            <p className="holder-details">
              <p className="holder-details">{bloggerName}</p>
              <small>{uploadTime}</small>
            </p>
          </div>

          <p className="icons">
            
            {
              !liked  ? <FavoriteBorderIcon onClick={countPlus}/> :
              <FavoriteIcon onClick={countMinus} style={{color:'red'}}/>
            }
            <VideoStableIcon className="int-icons" />
            <HistoryIcon className="int-icons" />
            <AddLinkIcon className="int-icons" />
            <span className="responsive-icons">
              <ResponsiveButton />
            </span>
            <Button variant="outlined" className="icons-color">
              Donate
            </Button>
            <Button variant="outlined" className="icons-color">
              Follow 119M
            </Button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Buttons;
