import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StudioHeader = () => {
  /* SnackBar */
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  /*  */

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let mode;
  mode = localStorage.getItem("theme");
  const text = mode === "light" ? "black" : "darkLight";
  const card = mode === "light" ? "moreLight" : "moreDark";
  const bg = mode === "light" ? "lightest" : "darkish";

  const user = useSelector((state) => state.firebase.user);

  /* Send Visitors Data  */
  const [visit, setVisit] = useState(0);
  React.useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        var sum = 0;
        data?.blogs?.forEach(function (elem) {
          if (elem?.bloggerEmail === user?.email) {
            sum += Number(elem.views);
            setVisit(sum);
          }
        });
      });
  }, [user.email]);

  const [graph, setGraph] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/userVisitors")
      .then((res) => res.json())
      .then((data) => {
        data?.map((d) => setGraph(d));
      });
  }, []);

  const day = new Date().toLocaleString("en-US", { day: "2-digit" });
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const today = `${day} ${month}`;

  const handleVisit = (e) => {
    e.preventDefault();
    const data = {
      name: today,
      yAxis: visit,
    };
    if (graph?.name == today) {
      // window.alert("You already Refresh Today's Visit")
    } else {
      axios.post(`http://localhost:5000/userVisitorS`, data);
      handleClick();
    }
  };

  /* SnackBar */
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
          id={card}
        >
          <Typography
            variant="h6"
            id={text}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Analytics
          </Typography>
          <form onSubmit={handleVisit}>
            <Button variant="contained" color="success" type="submit">
              Refresh
            </Button>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Refreshed Done"
            action={action}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default StudioHeader;