import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import { Button, Divider } from "@mui/material";
import './History.css';

const HistoryRight = () => {
  let pl;
  pl = localStorage.getItem("theme");
  let text = pl === "light" ? "black" : "darkLight"

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [selectedValues, setSelectedValues] = React.useState("x");

  const handleChanges = (event) => {
    setSelectedValues(event.target.value);
  };


  if (selectedValue === "b") {
      
  }
  
  return (
    <div>
      <TextField
        color="success"
        focused
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
      <br />
      <Divider />
      <div className="right-radio">
        <small  id={text}>Watch history</small>
        <Radio
         id={text}
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
      <Divider />
      <div className="right-radio">
        <small id={text}>Watch history</small>
        <Radio
         id={text}
          checked={selectedValues === "y"}
          onChange={handleChanges}
          value="y"
          name="radio-buttons"
          inputProps={{ "aria-label": "Y" }}
        />
      </div>
      <Divider />
      <br />

            <Button id={text}>CLEAR ALL WATCHED HISTORY</Button>
            <br />
            <Button id={text}>MANAGE HISTORY</Button>
            <br />
            <Button id={text}>DON"T RECORD HISTORY</Button>

    </div>
  );
};

export default HistoryRight;

/* 



*/
