import React from "react";
import VideoPlayer from "react-video-js-player";
// import videoSrc from "../../assets/gig.mp4";


const Video = ({videoSrc, image}) => {
  const poster = "https://wallpapercave.com/wp/wp6543230.jpg";
  // const videoSource = videoSrc;

  return (
    <div>
      <VideoPlayer
        src={videoSrc}
        poster={image}
        className="sz"
        playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 3, 6]}
      />
    </div>
  );
};

export default Video;