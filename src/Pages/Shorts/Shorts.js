import React from "react";
import StoryContainer from "./StoryContainer/StoryContainer";
import "./Shorts.css";
import shortsData from "./FakeShortsData/FakeShortsData";

const Shorts = () => {
  // console.log(shortsData);
  for (const shortData of shortsData) {
  }
  return (
    <div>
      <h1>this is shorts</h1>
      <div className="story-container">
        <StoryContainer shortsData={shortsData}></StoryContainer>
      </div>
    </div>
  );
};

export default Shorts;
/*    {shortsData.map((shorts) => {
          <StoryContainer shorts={shorts} key={shorts.id}></StoryContainer>;
          {
            console.log(shorts);
          }
        })} */
