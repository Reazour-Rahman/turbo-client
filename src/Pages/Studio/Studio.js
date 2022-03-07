import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import StudioHeader from "./StudioHeader/StudioHeader";
import Overview from "./Overview/Overview";
import "./Studio.css";
import Audience from "./Audience/Audience";
import { Route, Routes } from "react-router-dom";
const Studio = () => {
  return (
    <div className="studio">
      <StudioHeader></StudioHeader>

      <Overview></Overview>

      <Audience></Audience>
    </div>
  );
};

export default Studio;
