
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
import { Avatar, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Payment from "./Payment";
import { green } from "@mui/material/colors";


const Buttons = ({ uploadTime, bloggerName, blogId, blog, countNumber, rendering, allLikers, allReadyLiked, setRendering, bloggerEmail,blogTitle, bloggerPhoto}) => {


  /* uploadTime,
  bloggerName,
  blogId,
  blog,
  countNumber,
  rendering,
  allLikers,
  allReadyLiked,
  setRendering,
  bloggerEmail,
  blogTitle,
  bloggerPhoto,
   */
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
        axios.put(`https://grass-dour-wasp.glitch.me/blogs/likes/${blogId}`, likes)
      }
      else{
        const likes = {
          likes : likeCount,
          likers : [...liker]
        }
        axios.put(`https://grass-dour-wasp.glitch.me/blogs/likes/${blogId}`, likes)
      }
    }
    
  },[ likeCount]);


    /* :::payment modal condition::::: */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
    let theme;
    theme = localStorage.getItem("theme")
    const text= theme === "light" ? "black" : "darkLight" ;

    const [followed, setFollowed] = React.useState(false)

  const [profile, setProfile] = React.useState('')
  const [bloggerProfile, setBloggerProfile] = React.useState({})
  const [follow, setFollow] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [myUser, setMyUser] = React.useState({})

  React.useEffect(() => {
    fetch(`https://grass-dour-wasp.glitch.me/users/room/${bloggerEmail}`)
    .then(res => res.json())
    .then(data => setProfile(data.room))
  },[bloggerEmail, followed, count])

  React.useEffect(() => {
    const alreadyFollowed = bloggerProfile?.followers?.find(b => b?.followerEmail === user.email)
    console.log('already', alreadyFollowed);
    if (alreadyFollowed?.followerEmail === user.email) {
      setFollowed(true)
    }
    else{
      setFollowed(false)
    }
  },[user.email, bloggerProfile?.followers])

  React.useEffect(() => {
    fetch(`https://grass-dour-wasp.glitch.me/users/room/${bloggerEmail}`)
    .then(res => res.json())
    .then(data => {
      setBloggerProfile(data)
    })
  },[bloggerEmail, count])

  React.useEffect(() => {
    fetch(`https://grass-dour-wasp.glitch.me/user/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setMyUser(data)
    })
  },[user.email, count])

  console.log('my user', myUser);

    const handleFollow = () => {
      console.log('follow clicked');
      const follower = {
        followersCount : bloggerProfile.followersCount + 1,
        followers : [{followerEmail : user.email}, ...bloggerProfile.followers]
      }
      const following = {
        followingsCount : myUser.followingsCount + 1,
        followings : [{followingEmail : bloggerEmail}, ...myUser.followings]
      }
      setFollowed(true)
      setCount(count + 1)
      axios.put(`https://grass-dour-wasp.glitch.me/users/followers/${bloggerEmail}`, follower)
      axios.put(`https://grass-dour-wasp.glitch.me/users/followings/${user?.email}`, following)
    }
  
    const handleUnFollow = () => {
      console.log('unfollow clicked');
      const userWithdraw = bloggerProfile.followers.filter(l => l?.followerEmail !== user?.email)
      const userWithdraw2 = myUser.followings.filter(l => l?.followingEmail !== bloggerEmail)
      console.log(userWithdraw);
      const follower = {
        followersCount : bloggerProfile.followersCount - 1,
        followers : [...userWithdraw]
      }
      const following = {
        followingsCount : myUser.followingsCount - 1,
        followings : [...userWithdraw2]
      }
      setFollowed(false)
      setCount(count + 1)
      axios.put(`https://grass-dour-wasp.glitch.me/users/followers/${bloggerEmail}`, follower)
      axios.put(`https://grass-dour-wasp.glitch.me/users/followings/${user?.email}`, following)
    }
  
  return (
    <div>
      <section>
        <div className="full-nav">
          <div className="holder-container">
            <Avatar
              alt="Remy Sharp"
              src={bloggerPhoto}
            />

            <p className="holder-details">
              <p className="holder-details" id={text}>{bloggerName}</p>
              <small id={text}>{uploadTime}</small>
            </p>
          </div>

          <p className="icons">
            
            {
              !like  ? <FavoriteBorderIcon onClick={likePlus} id={text}/> :
              <FavoriteIcon onClick={likeMinus} style={{color:'red'}}/>
            }
            {/* <VideoStableIcon id={text} className="int-icons" />
            <HistoryIcon id={text} className="int-icons" />
            <AddLinkIcon id={text} className="int-icons" /> */}
            {/* <span className="responsive-icons">
              <ResponsiveButton />
            </span> */}
              {/*:::: payment modal start :::: */}

              <Button
                variant="outlined"
                className="icons-color"
                onClick={handleOpen}
              >
                Donate
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Payment
                  style={style}
                  bloggerEmail={bloggerEmail}
                  bloggerName={bloggerName}
                  blogId={blogId}
                  user={user}
                  handleClose={handleClose}
                  bloggerPhoto={bloggerPhoto}
                  blogTitle={blogTitle}
                ></Payment>
              </Modal>
              {/*:::: payment modal end ::::*/}
              {
                followed  ? <Button
                variant="outlined"
                className="icons-color"
                onClick={handleUnFollow}
              >
                UnFollow 
              </Button> : <Button
                variant="outlined"
                className="icons-color"
                onClick={handleFollow}
              >
                Follow
              </Button>
              }
          </p>
        </div>
      </section>
    </div>
  );
};

export default Buttons;
