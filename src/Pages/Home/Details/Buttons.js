
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


const Buttons = ({ uploadTime, bloggerName, blogId, blog, countNumber, rendering, allLikers, allReadyLiked, setRendering, bloggerEmail,blogTitle, bloggerPhoto,}) => {


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
                  bloggerName={bloggerName}
                  blogId={blogId}
                  user={user}
                  handleClose={handleClose}
                  bloggerPhoto={bloggerPhoto}
                  blogTitle={blogTitle}
                ></Payment>
              </Modal>
              {/*:::: payment modal end ::::*/}
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
