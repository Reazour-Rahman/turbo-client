import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MessageModal from "../MessageModal/MessageModal";
import "./HelpMessage.css";
const HelpMessage = (props) => {
  //   console.log(props.helpMessage);
  const { displayName, email, title, description } = props.helpMessage;
  const shortDescription = description.slice(0, 100);

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="message-container fix-font-weight" onClick={handleOpen}>
        <div>
          <h1 className="reports-gap">
            <b>{displayName}</b>
          </h1>
          <h1>{email}</h1>
        </div>
        <div>
          <h1 className="reports-gap">
            <b>Title:{title}</b>
          </h1>
          <p>{shortDescription}</p>
          {/* <Button onClick={handleOpen}>see full message</Button> */}

          {/* <button onClick={handleOpen}>see full post</button> */}
        </div>
      </div>
      <MessageModal
        open={open}
        handleClose={handleClose}
        style={style}
        description={description}
        displayName={displayName}
        title={title}
        email={email}
      ></MessageModal>
    </div>
  );
};

export default HelpMessage;

{
  /* <h1 style={{ fontSize: "18px" }}>
<b>{displayName}</b>
</h1>
<h1 style={{ fontSize: "16px" }}>Title: {title}</h1>
<h1 style={{ fontSize: "14px" }}>{shortDescription}...</h1>
<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
<Box>
  <Button sx={{ p: 0, m: 0 }} onClick={handleOpen}>
    See Full Message
  </Button>
 
</Box>
</Box> */
}
