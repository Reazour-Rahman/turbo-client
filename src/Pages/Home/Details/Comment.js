import { Avatar, Button, IconButton, Input, Menu } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import axios from "axios";
import useFirebase from "../../../Hooks/useFirebase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";
import { grey } from "@mui/material/colors";

const ariaLabel = { "aria-label": "description" };

const Comment = ({ blogId, setBackendComment, backendComment }) => {
  const [comment, setComment] = useState("");
  const { user } = useFirebase();
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const commentPost = (e) => {
    console.log(comment, blogId);
    e.preventDefault();
    const commentData = {
      id: Math.random().toString(36).substring(2, 9),
      comment: comment,
      blogId: blogId,
      username: user?.displayName,
      userEmail: user?.email,
      createdAt: time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      userImage: user?.photoURL,
    };
    if (comment) {
      axios
        .put(
          `https://aqueous-tor-77774.herokuapp.com/blogs/comment/${blogId}`,
          [commentData, ...backendComment]
        )
        .then((data) => {
          setBackendComment([commentData, ...backendComment]);
          e.target.reset();
          setComment("");
        });
    } else {
      return;
    }

    console.log(comment, blogId);
    console.log("backend", backendComment);
  };

  const deleteComment = (id) => {
    console.log(id);
    const restComments = backendComment.filter((rest) => rest?.id !== id);
    axios.put(
      `https://aqueous-tor-77774.herokuapp.com/blogs/comment/${blogId}`,
      [...restComments]
    );
    setBackendComment([...restComments]);
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    color: "#fff3e0",
    fontSize: "14px",
    fontWeight: 300,
  };
  return (
    <div>
      {/* Comment count and filtering */}
      <hr />
      <span className="comment-count">
        <small>12300 Comments</small>
        <small>
          <FilterAltOffIcon /> Short by
        </small>
      </span>
      <hr />
      {/* Comment input */}
      <div className="comment-container">
        <Avatar
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
        />
        &nbsp;&nbsp; &nbsp;
        {/* Comment */}
        <form onSubmit={commentPost} style={{ width: "100%" }}>
          <div className="comment-container">
            <Input
              placeholder="Add a public comment"
              className="input-comment"
              inputProps={ariaLabel}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              size="small"
              className="button-comment"
            >
              Comment
            </Button>
          </div>
        </form>
      </div>
      <br />
      {/* People comments */}

      {backendComment.map((c) => (
        <>
          <section className="people-comment-container">
            <Avatar alt="Remy Sharp" src={c?.userImage} />
            <div className="people-comment">
              <small>
                {c?.username} &nbsp; &nbsp;
                <span style={{ color: "gray" }}>{c.createdAt}</span>
              </small>
              <small>
                {c?.comment}
                {/* <IconButton style={{color:'white'}}  id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
              <MoreVertIcon  />
            </IconButton>
            <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            PaperProps={{
              elevation: 0,
              style: {
                border: '.1px solid rgba(255, 255, 255, 0.309)',
                justifyContent:'center',
                width: 100,
                opacity: 1,
                backgroundColor: "#091a2b",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {
              user.email === c.userEmail ? <MenuItem className="comment-button-style" sx={{fontSize: 14,}} style={style} onClick={() => deleteComment(c?.id)}><DeleteIcon sx={{marginRight:'2px'}}/>Delete</MenuItem> :  <MenuItem className="comment-button-style" sx={{fontSize: 14,}} style={style} onClick={handleClose}><ReplyIcon sx={{marginRight:'2px'}}/>Reply</MenuItem>            
            }
                      
            
            </Menu> */}
              </small>
              <small>
                {user.email === c.userEmail && (
                  <span
                    onClick={() => deleteComment(c?.id)}
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  >
                    <DeleteIcon sx={{ marginRight: "2px" }} /> Delete
                  </span>
                )}
                &nbsp; &nbsp;&nbsp; &nbsp;
                <span>
                  <FavoriteBorderIcon /> 4178354515
                </span>
              </small>
            </div>
          </section>
          <br />
        </>
      ))}
      {/* <section className="people-comment-container">
        <Avatar
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
        />
        <div className="people-comment">
          <small>
            Joe Doe &nbsp; &nbsp;<span style={{ color: "gray" }}>2 hr ago</span>
          </small>
          <small>
            This is soo good and he is so honest person. This is soo good and he
            is so honest person.
          </small>
          <small>
            <span>
              <DoNotDisturbAltIcon /> 104814
            </span>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <span>
              <FavoriteBorderIcon /> 4178354515
            </span>
          </small>
        </div>
      </section>
      <br />
      <section className="people-comment-container">
        <Avatar
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"
        />
        <div className="people-comment">
          <small>
            Joe Doe &nbsp; &nbsp;<span style={{ color: "gray" }}>2 hr ago</span>
          </small>
          <small>
            This is soo good and he is so honest person . This is soo good and
            he is so honest person. This is soo good and he is so honest person.
            This is soo good and he is so honest person.
          </small>
          <small>
            <span>
              <DoNotDisturbAltIcon /> 104814
            </span>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <span>
              <FavoriteBorderIcon /> 4178354515
            </span>
          </small>
        </div>
      </section> */}
    </div>
  );
};

export default Comment;
