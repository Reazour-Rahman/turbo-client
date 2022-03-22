import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import StudioHeader from "./StudioHeader/StudioHeader";
import Overview from "./Overview/Overview";
import "./Studio.css";
import Audience from "./Audience/Audience";
import { Route, Routes } from "react-router-dom";
const Studio = () => {
  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";
  return (
    <div className="studio" id={bg} >
      <StudioHeader></StudioHeader>

      <Overview></Overview>

      <Audience></Audience>
    </div>
  );
};

export default Studio;
