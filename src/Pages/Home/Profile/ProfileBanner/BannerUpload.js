import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
/* Thumb */
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase";
import "../../../Upload/CloudStorage.css";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Progress from "../../../Upload/Progress";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ImageIcon from "@mui/icons-material/Image";
import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};


export default function BannerUpload({ roomName, cover, user, profile }) {
  /*  */
  let theme;
  theme = localStorage.getItem("theme");
  const card = theme === "light" ? "moreLight" : "moreDark";
  const text = theme === "light" ? "black" : "darkLight" 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* :::::::::::::::::::::::::::::
  Cover
  :::::::::::::::::::::::::::::::*/
  const [progressBar, setProgress] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  const handleCreateRoom = () => {
    const data = {
      roomName: roomName,
      cover: image,
      profile: profile,
    };
    axios
      .put(
        `https://aqueous-chamber-45567.herokuapp.com/users/room/${user}`,
        data
      )
      handleClose();
     
  };

  return (
    <div>
      <IconButton aria-label="delete" size="large" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id={card}>
          <form onSubmit={formHandler}>
            <div class="file has-name is-boxed">
              <label class="file-label">
                <input
                  
                  class="file-input"
                  type="file"
                  accept="image/*"
                  name="resume"
                  // alt="thumbnail"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <ImageIcon />
                  </span>
                  <span class="file-label">Choose a Cover</span>
                </span>
                <span class="file-name">{title}</span>
              </label>
            </div>
            {/* <button type="submit">Upload</button> */}

            {progressBar < 0.1 ? null : <Progress progressBar={progressBar} />}

            {progressBar === 100 ? (
              <Button
                onClick={handleCreateRoom}
                autoFocus
                variant="outlined"
                color="success"
                className={`full-width ${
                  title === "" ? "conditional-btn" : null
                }`}
                endIcon={<ArrowCircleDownIcon />}
              >
                Save
              </Button>
            ) : (
              <Button
              id={text}
                type="submit"
                variant="outlined"
                className={`full-width ${
                  title === "" ? "conditional-btn" : null
                }`}
                endIcon={<CloudCircleIcon />}
              >
                Upload
              </Button>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

