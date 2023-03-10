import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./RoomDashboardHome.css";
import VideoPlayer from "react-video-js-player";
import Divider from '@mui/material/Divider';

const RoomDashboardHome = () => {
  const [recentVideos, setRecentVideos] = useState([]);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `https://grass-dour-wasp.glitch.me/blogs?email=${user?.email}`;
    fetch(contentUrl)
      .then((response) => response.json())
      .then((data) => setRecentVideos(data.blogs));
  }, [user?.email]);

  const [profile, setProfile] = React.useState('')

  useEffect(() => {
    fetch(`https://grass-dour-wasp.glitch.me/users/room/${user?.email}`)
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [user?.email])
  console.log('followers', profile);

  var totalViews = recentVideos?.reduce(function (a, b) {
    console.log(a + b.views);
    return b.views + a;
  }, 0);
  var totalLikes = recentVideos?.reduce(function (a, b) {
    console.log(a + b.likes);
    return b.likes + a;
  }, 0);

  // const mostviewed = 



  // console.log('most views',mostviewed);

  console.log(recentVideos);

  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const bg= mode ==="light" ? "lightest" : "darkish";

  console.log(totalViews);
  return (
    <div>
      <div className="" style={{ color: "white",  marginLeft: "15px", marginRight: '15px', marginTop:"15px" }}>
        <div class="grid-container" >
          {/* 1st Column */}
          <div className="first-column-size">
            <div className="card" style={{}} id={card}>
              <p className="pra-1" id={text}>Latest Blog performance</p>
              {
                recentVideos.map(r => <>
                  <VideoPlayer
                    className="videos"
                    src={r.video}
                    poster={r.thumbnail}
                    playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                  />
                  <p id={text} style={{ marginTop: '10px' }} className="pra">{r.title}</p>
                  <div className="grid-carddetails-container">
                    <div class="grid-item">
                      <p id={text} className="pra">Blog Views</p>
                      <p id={text} className="pra">Total Like Impressions</p>
                      <p id={text} className="pra">Upload At</p>
                    </div>
                    <div class="grid-item " style={{ textAlign: "right" }}>
                      <p id={text} className="pra">{r.views}</p>
                      <p id={text} className="pra">{r.likes}</p>
                      <p id={text} className="pra">{r.uploadTime}</p>
                    </div>

                    {/* <a href="" style={{ textDecoration: "none" }}>
                      GO TO VIDEO ANALYTICS
                    </a>
                    <br />
                    <a href="" style={{ textDecoration: "none" }}>
                      SEE COMMENTS{" "}
                    </a> */}
                  </div>
                </>).reverse().slice(0, 1)
              }
            </div>
          </div>
          {/* 2nd column */}
          <div style={{ width: "100%" }}>
            <div style={{}}>
              <div className="card" id={card} style={{ }}>
                <p id={text} className="pra-1">Room Analytics</p>
                <p id={text} className="pra">Current Followers</p>
                <p id={text} className="pra">{profile.followersCount}</p>

                <Divider style={{margin:"5px 0px"}}/>

                <p style={{ }} className="pra">Summary</p>
                <div className="grid-carddetails-container">
                  <div>
                    <p id={text} style={{ paddingBottom: "3px" }} className="pra">Total Blog Views</p>
                    <p id={text} className="pra">Total Blog Likes</p>
                    <p id={text} className="pra">Total Blog Upload</p>
                  </div>
                  <div style={{ textAlign: "right" }} class="">
                    <p id={text} style={{ paddingBottom: "3px" }} className="pra">{totalViews}</p>
                    <p id={text} className="pra">{totalLikes}</p>
                    <p id={text} className="pra">{recentVideos.length}</p>
                  </div>
                </div>
                <Divider style={{margin:"5px 0px"}}/>
                <p className="pra-1" id={text} >Most Liked Blog video</p>

                {
                  recentVideos.sort((a, b) => b.likes - a.likes).map(r => <>
                    <VideoPlayer
                      className="videos"
                      src={r.video}
                      poster={r.thumbnail}
                      playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                    />
                    <p style={{ marginTop: '10px' }} className="pra">{r.title}</p>
                    <div className="grid-carddetails-container">
                      <div class="grid-item">
                        <p id={text} className="pra">Blog Views</p>
                        <p id={text} className="pra">Total Like Impressions</p>
                        <p id={text} className="pra">Upload At</p>
                      </div>
                      <div class="grid-item " style={{ textAlign: "right" }}>
                        <p id={text} className="pra">{r.views}</p>
                        <p id={text} className="pra">{r.likes}</p>
                        <p id={text} className="pra">{r.uploadTime}</p>
                      </div>
                    </div>
                  </>).slice(0, 1)
                }

              </div>
            </div>{" "}
            <br />
            <div style={{ width: "100%"}}>
              <div className="card" style={{  }} id={card}>
                <p id={text} className="pra-1">Latest Blog Comments</p>
                <p style={{marginBottom:'5px'}} className="pra" id={text}>Latest 2 Comment Of Recent Blog</p>
                {
                  recentVideos.map(ma=> <div>
                    {
                      ma?.comment?.map(m => <div style={{marginTop:'5px'}} className="grid-carddetails-container">
                      <div >
                        <p id={text} className="pra">{m.username} - {m.createdAt}</p>
                        <p id={text} className="pra">{m.comment}</p>
                      </div>
                      <div class="">
                        <img
                          style={{ width: "50%" }}
                          src={m.userImage}
                          alt="Pic"
                        />
                      </div>
                    </div>).reverse().slice(0,2)
                    }
                  </div>).reverse().slice(0,1)
                }
                
                <br />
              </div>
            </div>
          </div>

          {/* 3rd Column */}

          <div style={{ width: "100%" }}>
            <div className="third-column-first-row-size" style={{ marginBottom: "30px" }}>
              <div className="card" style={{  marginBottom: "30px" }} id={card}>
                <p style={{ marginBottom: '5px' }} id={text} className="pra-1">Most Viewed Blog video</p>
                {
                  recentVideos.sort((a, b) => b.views - a.views).map(r => <>
                    <VideoPlayer
                      className="videos"
                      src={r.video}
                      poster={r.thumbnail}
                      playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                    />

                    <p id={text} style={{ marginTop: '10px' }} className="pra">{r.title}</p>
                    <div className="grid-carddetails-container">
                      <div class="grid-item">
                        <p id={text} className="pra">Blog Views</p>
                        <p id={text} className="pra">Total Like Impressions</p>
                        <p id={text} className="pra">Upload At</p>
                      </div>
                      <div class="grid-item " style={{ textAlign: "right" }}>
                        <p id={text} className="pra">{r.views}</p>
                        <p id={text} className="pra">{r.likes}</p>
                        <p id={text} className="pra">{r.uploadTime}</p>
                      </div>
                    </div>
                  </>).slice(0, 1)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDashboardHome;
