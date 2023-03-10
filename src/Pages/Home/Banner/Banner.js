import React, { useEffect, useState } from 'react';
import {Carousel} from '3d-react-carousal';
import './Banner.css'
import BannerVideo from './BannerVideo';
import { Avatar, Skeleton } from '@mui/material';




const Banner = () => {
    let theme;
    theme = localStorage.getItem("theme");
    const bg = theme === "light" ? "moreLight" : "moreDark"
    const text = theme === "light" ? "black" : "darkLight" 

    const callback = function(index){
        console.log("callback",index);
    }

    const [topVideo, setTopVideo] = useState([]);
    const [loading, setLoading] = useState("");
  
    useEffect(() => {
      setLoading(true);
      const blogUrl = `https://grass-dour-wasp.glitch.me/blogs`;
      fetch(blogUrl)
        .then((response) => response.json())
        .then((data) => {
          

          let db = data?.blogs?.slice(-10)?.map((a) =>    
            <div className='banner-container' id={bg}>
                <BannerVideo v={a.video} t={a.thumbnail} />
                <div className='banner-text-container'>

                    <div className='blogger-identity'>
                        <Avatar alt="Remy Sharp" src={a.bloggerPhoto} />
                        <div>
                            <small id={text} className='blogger-name'>{a.bloggerName}</small> <br />
                            <small id={text} className=''>{a.views} Views</small>
                        </div>
                    </div>

                    <small id={text}>{a.description.slice(0, 200)}</small>

                </div>
            </div> 

          )
          setLoading(false);
          setTopVideo(db);
        });
    }, []);

    

    return (
        <div className='banner'>
            {!loading ?<Carousel slides={topVideo} autoplay={true} onSlideChange={callback}/> : 
            <div className='banner-video-size'>
                  <Skeleton
                        sx={{ bgcolor: 'grey.900' }}
                        variant="rectangular"
                        style={{width:"100%"}}
                        height={350}
                    />
            </div>
            }
        </div>
    );
};

export default Banner;