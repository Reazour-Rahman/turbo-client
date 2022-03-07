import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Document.css";
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Video from "./Video";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import DialogActions from '@mui/material/DialogActions';
import { useSelector } from "react-redux";


/* Thumb */
import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import "./CloudStorage.css";
import { Button } from "@mui/material";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Progress from "./Progress";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ImageIcon from '@mui/icons-material/Image';
import useFirebase from "../../Hooks/useFirebase";

const steps = ["Details", "Checks", "Visibility"];



const orientation = [
  {
    value: 'Landscape',
  },
  {
    value: 'Portrait',
  }
];

const privacy = [
  {
    value: 'Public',
  },
  {
    value: 'Private',
  }
];

/* Category */

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Action',
  'War',
  'Fantasy',
  'SandBox',
  'Adventure',
  'Sports',
  'Sci-Fi',
  'FPS',
  'Puzzle',
  'Simulation',
  'Horror',
  'TPS',
  'Arcade',
  'Horror',
  'Strategy',
  'RPG',
];
/* Language */
const language = [ 
    {
    value: 'Bengal',
    },
    {
    value: 'English',
    },
    {
    value: 'Arabic',
    },
    {
    value: 'Hindi',
    }
];


export default function Document({videoSrc, close}) {
    // const thumbnail =  useSelector((state) => state.blogs.thumb);
    // console.log("redux link", thumbnail);

/* :::::::::::::::::::::::::::::
Thumbnail
:::::::::::::::::::::::::::::::*/
const [progressBar, setProgress] = useState(0);
const [title, setTitle] = useState("");
const [image, setImage] = useState("");

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
        setImage(downloadURL)
        });
    }
    );
};

/* :::::::::::::::::::::::::::::
Orientation
:::::::::::::::::::::::::::::::*/
const [orientations, setOrientation] = React.useState('Portrait');

const handleChange = (event) => {
  setOrientation(event.target.value);
};


/* :::::::::::::::::::::::::::::
Privacy
:::::::::::::::::::::::::::::::*/
const [privacies, setPrivacies] = React.useState('Public');

const handleChangePrivacy = (event) => {
    setPrivacies(event.target.value);
};


/* :::::::::::::::::::::::::::::
language
:::::::::::::::::::::::::::::::*/
const [languages, setLanguages] = React.useState('Bengal');

const handleChangeLanguage = (event) => {
    setLanguages(event.target.value);
};



/* :::::::::::::::::::::::::::::
Category
:::::::::::::::::::::::::::::::*/
const [personName, setPersonName] = React.useState([]);

const handleChangeCategory = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};



/* :::::::::::::::::::::::::::::
Send Data to Database
:::::::::::::::::::::::::::::::*/
const {user} = useFirebase();

const bloggerName = user.displayName;
const bloggerEmail = user.email;
const bloggerPhoto = user.photoURL;
const time = new Date().toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});


const { register, handleSubmit, reset, trigger } = useForm();

const onSubmit = (data) => {
  axios
    .post("https://aqueous-tor-77774.herokuapp.com/blogs", data, (data.status = "pending", 
    data.video = videoSrc, 
    data.thumbnail= image, 
    data.category=personName,
    data.languages=languages,
    data.orientations=orientations,
    data.bloggerName=bloggerName,
    data.bloggerEmail= bloggerEmail,
    data.uploadTime=time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    data.bloggerPhoto=bloggerPhoto,
    data.comment=[],
    data.likes="0"
    ))
    .then((res) => {
      if (res.data.insertedId) {
        swal(
          "Good job!",
          "Successfully submitted! An admin will approve your post",
          "success"
        );
        reset();
      }
    });
};

  return (
    <>
      <main >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <br />
        <div className="document-container">
          <form action="" onSubmit={handleSubmit(onSubmit)} className="left">

            {/* ::::::::::::::::::::::::::
            title
            ::::::::::::::::::::::::::::*/}
            <TextField
            {...register("title")}
            className="default-margin"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              helperText="Give it a title"
            />
            
            {/* ::::::::::::::::::::::::::
            Description
            ::::::::::::::::::::::::::::*/}
            <TextField
            {...register("description")}
                className="description default-margin"
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              helperText="Write content's description"
            />

            {/* ::::::::::::::::::::::::::
            Orientation
            ::::::::::::::::::::::::::::*/}
            <TextField
            className="default-margin"
            id="outlined-select-currency"
            select
            label="Orientation"
            value={orientations}
            onChange={handleChange}
            helperText="Please select your orientation"
            >
            {orientation.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}
                </MenuItem>
            ))}
            </TextField>

            {/* ::::::::::::::::::::::::::
            Privacy setting
            ::::::::::::::::::::::::::::*/}
            <TextField
            className="default-margin"
            id="outlined-select-currency"
            select
            label="Privacy"
            value={privacies}
            onChange={handleChangePrivacy}
            helperText="Please select your privacy"
            >
            {privacy.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}
                </MenuItem>
            ))}
            </TextField>

            {/* ::::::::::::::::::::::::::
            Language
            ::::::::::::::::::::::::::::*/}
            <TextField
            className="default-margin"
            id="outlined-select-currency"
            select
            label="Language"
            value={languages}
            onChange={handleChangeLanguage}
            helperText="Please select your language"
            >
            {language.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}
                </MenuItem>
            ))}
            </TextField>

            {/* ::::::::::::::::::::::::::
            tags
            ::::::::::::::::::::::::::::*/}
            <TextField
            style={{color:"aliceblue"}}
            {...register("tags")}
            className="default-margin"
              id="outlined-basic"
              label="Tags"
              variant="outlined"
              helperText="Give it max five tags"
            />
            
            {/* ::::::::::::::::::::::::::
            Category
            ::::::::::::::::::::::::::::*/}
            <FormControl className="default-margin">
                <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
                <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChangeCategory}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <DialogActions>
          <Button onClick={close}>CANCEL</Button>
          <Button type="submit">NEXT</Button>
        </DialogActions>

          </form>

        {/* ::::::::::::::::::::::::::
        Right SIde of grid
        ::::::::::::::::::::::::::::*/}         
          <div>
            <>
                <div className="cloud-container-thumb">
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
                            <ImageIcon/>
                            </span>
                            <span class="file-label">Choose a Thumbnail</span>
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

            </>


            {/* ::::::::::::::::::::::::::
            Ready video
            ::::::::::::::::::::::::::::*/}  
            {videoSrc ? <Video videoSrc={videoSrc} image={image? image : null}/> : null}
          </div>

        </div>

      </main>
    </>
  );
}

