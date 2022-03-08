import React from "react";
import VideoPlayer from "react-video-js-player";
import "./Video.css";

const Video = ({video, poster}) => {
  const videoSource = video;
  return (
    <div>
      <VideoPlayer
        src={videoSource}
        poster={poster}
        className="video-size"
        playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 3, 6]}
      />
    </div>
  );
};

export default Video;
