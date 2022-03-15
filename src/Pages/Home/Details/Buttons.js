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
import { useSelector } from "react-redux";


const Buttons = ({ uploadTime, bloggerName, blogId, blog, countNumber, rendering, allLikers, allReadyLiked, setRendering}) => {

  // const [liked, setLiked] = useState(allReadyLiked)
  // const [likeCount, setLikeCount] = useState(count)
  // const {user} = useFirebase()


  const user = useSelector((state) => state.firebase.user)
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(countNumber)
    const [liker, setLiker] = useState([])
    const [effectRender, setEffectRender] = useState(0)

    console.log(rendering, likeCount);

    useEffect(() => {
      if (allReadyLiked) {
        setLike(allReadyLiked)
      }
      else{
        setLike(false)
      }

    },[allReadyLiked])


  //sending liker array of object


  // const countPlus = () => {  
  //   setLiked(true)
  //   setLikeCount(parseInt(likeCount) + 1)
  // }


  // const countMinus = () => {
  //   setLiked(false)
  //   setLikeCount(parseInt(likeCount) - 1)
  //   // const userWithdraw = allLikers.filter(l => l.liker !== user.email)
  //   // setLiker(userWithdraw)
  // }

  const likeMinus = () => {
    setLike(false)
    setLikeCount(parseInt(countNumber) - 1)
    const userWithdraw = blog?.likers?.filter(l => l?.likerEmail !== user?.email)
    setLiker(userWithdraw)
    setEffectRender(effectRender + 1)
    
  }
  const likePlus = () => {
    setLike(true)
    setLikeCount(parseInt(countNumber) + 1)
    setLiker({likerEmail : user.email})
    setEffectRender(effectRender + 1)
  }

  useEffect(() => {
    // const likes = {
    //   likes : likeCount
    // }
    // if (userLiked) {
    //   setLiked(true)
    // }
    // else{
    //   setLiked((false))
    // }
    // console.log(likes);
    // axios.put(`https://aqueous-tor-77774.herokuapp.com/blogs/likes/${blogId}`, likes)

    if (effectRender) {
      setRendering(rendering + 1)
      if (like) {
        const likes = {
          likes : likeCount,
          likers : [liker, ...blog?.likers]
        }
        axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/likes/${blogId}`, likes)
      }
      else{
        const likes = {
          likes : likeCount,
          likers : [...liker]
        }
        axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/likes/${blogId}`, likes)
      }
    }
    
  },[ likeCount])
  
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
              !like  ? <FavoriteBorderIcon onClick={likePlus}/> :
              <FavoriteIcon onClick={likeMinus} style={{color:'red'}}/>
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
