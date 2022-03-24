import React from "react";
import StudioHeader from "./StudioHeader/StudioHeader";
import "./Studio.css";
import Audience from "./Audience/Audience";
const Studio = () => {
  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";
  return (
    <div className="studio" id={bg} >
      <StudioHeader></StudioHeader>
      <Audience></Audience>
    </div>
  );
};

export default Studio;
