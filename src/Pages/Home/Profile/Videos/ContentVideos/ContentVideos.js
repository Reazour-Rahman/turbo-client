import React from 'react';
import VideoPlayer from "react-video-js-player";
import videoSrc from '../../../../../assets/gig.mp4'
import './ContentVideos.css';

const ContentVideos = () => {
    const poster = "https://wallpapercave.com/wp/wp6543230.jpg";
    const videoSource = videoSrc;
    return (
        <div>
            <VideoPlayer
            className="videos"
            src={videoSource} 
            poster={poster}
            playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
            />
        </div>
    );
};

export default ContentVideos;