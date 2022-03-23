import React, { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import "./Dashboard.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import RevenueModal from "./RevenueModal";
import CostModal from "./CostModal";
import { useSelector } from "react-redux";
import axios from "axios";

const Edit = () => {
  const style = {
    color: "#fff3e0",
    marginLeft: 10,
    fontSize: "16px",
    fontWeight: 300,
  };

  const iconStyle = {
    marginRight: 25,
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [revenueOpen, setRevenueOpen] = React.useState(false);
  const [costOpen, setCostOpen] = React.useState(false);
  const handleOpen = () => setRevenueOpen(true);
  const handleCostOpen = () => setCostOpen(true);
  //   const navigate = useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRevenue = () => {
    handleOpen();
  };
  const handleCost = () => {
    handleCostOpen();
  };

  let mode;
  mode = localStorage.getItem("theme");
  const text = mode === "light" ? "black" : "darkLight";
  const card = mode === "light" ? "moreLight" : "moreDark";
  const bg = mode === "light" ? "lightest" : "darkish";



  /* Send Visitors Data  */
  const [visit, setVisit] = useState([])
  useEffect(()=>{
    fetch("https://aqueous-chamber-45567.herokuapp.com/views")
    .then(res => res.json())
    .then(data => {
      // data.map(d => setVisit(d)) 
      setVisit(data) 
    })
  },[])


  var sum=0;

  visit.forEach(function(elem){
  sum+=Number(elem.views);
  });
  console.log(sum , "total views");

  const user = useSelector(state => state.firebase.user)

  const day = new Date().toLocaleString("en-US", { day : '2-digit'})
  const month = new Date().toLocaleString("en-US", { month: "long" })
  const today = `${day} ${month}`;

  const handleVisit  = e => {

    e.preventDefault()
    const data = {
        name: today,
        uv:2000,
        pv:sum
    }
    axios.post(`http://localhost:5000/uniqueVisitors`, data)
    handleClose()
  }

  return (
    <div>
      <ListItemButton
        component="a"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <AppRegistrationIcon id={text} className="dashboard-button" />
        </ListItemIcon>
        <ListItemText id={text} className="dashboard-button" primary="Edit" />
      </ListItemButton>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
          style: {
            border: ".1px solid rgba(255, 255, 255, 0.309)",

            width: 350,
            opacity: 0.9,
            backgroundColor: "#18191A",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: grey[900],
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          className="menu-style"
          sx={{ fontSize: 16, marginLeft: "10px" }}
          onClick={handleRevenue}
        >
          <ListItemIcon style={style}>
            <CreateNewFolderIcon style={iconStyle} />
            Revenue
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          className="menu-style"
          sx={{ fontSize: 16, marginLeft: "10px" }}
          onClick={handleCost}
        >
          <ListItemIcon style={style}>
            <CreateNewFolderIcon style={iconStyle} />
            Cost
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          className="menu-style"
          sx={{ fontSize: 16, marginLeft: "10px" }}
          onClick={"handleCost"}
        >
          <form onSubmit={handleVisit}>
          <ListItemIcon  style={style}>
          <button type="submit">
          <CreateNewFolderIcon style={iconStyle} />
            Update Visitors
          
            
         
          </button>
          </ListItemIcon>
          </form>
        </MenuItem>
      </Menu>

      <RevenueModal
        revenueOpen={revenueOpen}
        setRevenueOpen={setRevenueOpen}
      ></RevenueModal>
      <CostModal costOpen={costOpen} setCostOpen={setCostOpen}></CostModal>
    </div>
  );
};

export default Edit;
