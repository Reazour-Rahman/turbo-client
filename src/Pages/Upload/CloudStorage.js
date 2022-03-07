import React from "react";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import "./CloudStorage.css";
import { Button } from "@mui/material";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Progress from "./Progress";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Document from "./Document";
import VideocamIcon from '@mui/icons-material/Videocam';

const CloudStorage = ({close}) => {
  const [progressBar, setProgress] = useState(0);
  const [videoSrc, setVideoSrc] = useState("")
  const [title, setTitle] = useState("");
  
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
          setVideoSrc(downloadURL)
        });
      }
    );
  };
  return (
    <>
      <div className="cloud-container">
        <form onSubmit={formHandler}>
          <div class="file has-name is-boxed">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                accept="video/*"
                name="resume"
                onChange={(event) => setTitle(event.target.value)}
              />
              <span class="file-cta">
                <span class="file-icon">
                  <VideocamIcon/>
                </span>
                <span class="file-label">Choose a video…</span>
              </span>
              <span class="file-name">{title}</span>
            </label>
          </div>
          {/* <button type="submit">Upload</button> */}

          {progressBar < 0.1 ? null : <Progress progressBar={progressBar} />}


          {progressBar === 100 ? (
            <Button
            variant="outlined"
              color="success"
              className={`full-width ${
                title === "" ? "conditional-btn" : null
              }`}
              endIcon={<ArrowCircleDownIcon />}
            >
              Please scroll down
            </Button>
          ) : (
            <Button
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
      </div>
      <Document close={close} videoSrc={videoSrc}/>
    </>
  );
};

export default CloudStorage;
