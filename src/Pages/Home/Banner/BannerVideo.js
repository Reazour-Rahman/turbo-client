import React from "react";
import VideoPlayer from "react-video-js-player";
import videoSrc from "../../../assets/gig.mp4";
import './Banner.css'


const BannerVideo = ({v, t}) => {
  const poster = "https://wallpapercave.com/wp/wp6543230.jpg";
  const videoSource = videoSrc;

  return (
    <div>
      <VideoPlayer
        src={v}
        poster={t}
        className="banner-video-size"
        playbackRates={[0.5, 1, 1.5, 1.7, 3]}
      />
    </div>
  );
};

export default BannerVideo;