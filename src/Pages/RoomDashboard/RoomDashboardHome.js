import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./RoomDashboardHome.css";
import VideoPlayer from "react-video-js-player";

const RoomDashboardHome = () => {
  const [recentVideos, setRecentVideos] = useState([]);
  const user = useSelector((state) => state.firebase.user)

  useEffect(() => {
    const contentUrl = `https://aqueous-chamber-45567.herokuapp.com/blogs?email=${user?.email}`;
    fetch(contentUrl)
      .then((response) => response.json())
      .then((data) => setRecentVideos(data.blogs));
  }, [user?.email]);

  const [profile, setProfile] = React.useState('')

  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/users/room/${user?.email}`)
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
      <div className="" style={{ color: "white", height: '100vh', marginLeft: "15px", marginRight: '15px' }}>
        <h2 style={{  }} id={text} className="mt-5 h2section" >Room dashboard</h2>
        <div class="grid-container" >
          {/* 1st Column */}
          <div className="first-column-size">
            <div className="card" style={{}} id={card}>
              <h6 id={text}>Latest Blog performance</h6>
              {
                recentVideos.map(r => <>
                  <VideoPlayer
                    className="videos"
                    src={r.video}
                    poster={r.thumbnail}
                    playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                  />
                  <h1 id={text} style={{ fontSize: '22px', marginTop: '10px' }}>{r.title}</h1>
                  <div className="grid-carddetails-container">
                    <div class="grid-item">
                      <p id={text}>Blog Views</p>
                      <p id={text}>Total Like Impressions</p>
                      <p id={text}>Upload At</p>
                    </div>
                    <div class="grid-item " style={{ textAlign: "right" }}>
                      <p id={text}>{r.views}</p>
                      <p id={text}>{r.likes}</p>
                      <p id={text}>{r.uploadTime}</p>
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
                <h6 id={text}>Room Analytics</h6>
                <p id={text}>Current Followers</p>
                <h4 id={text}>{profile.followersCount}</h4>
                <hr className="hr" />

                <h6 style={{ paddingBottom: "5px" }}>Summary</h6>
                <div className="grid-carddetails-container">
                  <div>
                    <p id={text} style={{ paddingBottom: "3px" }}>Total Blog Views</p>
                    <p id={text}>Total Blog Likes</p>
                    <p id={text}>Total Blog Upload</p>
                  </div>
                  <div style={{ textAlign: "right" }} class="">
                    <p id={text} style={{ paddingBottom: "3px" }}>{totalViews}</p>
                    <p id={text}>{totalLikes}</p>
                    <p id={text}>{recentVideos.length}</p>
                  </div>
                </div>
                <hr className="hr" />
                <p style={{ fontSize: '20px', marginBottom: '5px' }} id={text} >Most Liked Blog video</p>
                {
                  recentVideos.sort((a, b) => b.likes - a.likes).map(r => <>
                    <VideoPlayer
                      className="videos"
                      src={r.video}
                      poster={r.thumbnail}
                      playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                    />
                    <h1 style={{ fontSize: '22px', marginTop: '10px' }}>{r.title}</h1>
                    <div className="grid-carddetails-container">
                      <div class="grid-item">
                        <p id={text}>Blog Views</p>
                        <p id={text}>Total Like Impressions</p>
                        <p id={text}>Upload At</p>
                      </div>
                      <div class="grid-item " style={{ textAlign: "right" }}>
                        <p id={text}>{r.views}</p>
                        <p id={text}>{r.likes}</p>
                        <p id={text}>{r.uploadTime}</p>
                      </div>
                    </div>
                  </>).slice(0, 1)
                }

              </div>
            </div>{" "}
            <br />
            <br />
            <div style={{ width: "100%", height: "300px" }}>
              <div className="card" style={{  }} id={card}>
                <h6 id={text}>Latest Blog Comments</h6>
                <h6 style={{marginBottom:'5px'}} id={text}>Latest 2 Comment Of Recent Blog</h6>
                {
                  recentVideos.map(ma=> <div>
                    {
                      ma.comment.map(m => <div style={{marginTop:'5px'}} className="grid-carddetails-container">
                      <div >
                        <p id={text}>{m.username} - {m.createdAt}</p>
                        <p id={text}>{m.comment}</p>
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
                <p style={{ fontSize: '20px', marginBottom: '5px' }} id={text}>Most Viewed Blog video</p>
                {
                  recentVideos.sort((a, b) => b.views - a.views).map(r => <>
                    <VideoPlayer
                      className="videos"
                      src={r.video}
                      poster={r.thumbnail}
                      playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 2, 2.5, 3, 4, 6]}
                    />

                    <h1 id={text} style={{ fontSize: '22px', marginTop: '10px' }}>{r.title}</h1>
                    <div className="grid-carddetails-container">
                      <div class="grid-item">
                        <p id={text}>Blog Views</p>
                        <p id={text}>Total Like Impressions</p>
                        <p id={text}>Upload At</p>
                      </div>
                      <div class="grid-item " style={{ textAlign: "right" }}>
                        <p id={text}>{r.views}</p>
                        <p id={text}>{r.likes}</p>
                        <p id={text}>{r.uploadTime}</p>
                      </div>
                    </div>
                  </>).slice(0, 1)
                }
              </div>
            </div>
            <div style={{ width: "100%", marginTop: '30px' }}>
              <div className="card third-column-second-row-size" style={{  }} id={card}>
                <h6 id={text}>Ideas for you</h6>

                <div className="grid-carddetails-container">
                  <div class="">
                    <h6 id={text}>Protect your Room</h6>
                    <p id={text}>
                      Your account is greater risk of attack without 2-step
                      verification.
                    </p>
                    <p id={text}>Turn it on for extra security</p>
                  </div>
                  <div class="grid-item">
                    <img
                      style={{ width: "50%" }}
                      src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M="
                      alt="Pic"
                    />
                  </div>
                </div>
                <a href="" style={{ textDecoration: "none" }}>
                  GET STARTED
                </a>
              </div>
            </div>

            <div style={{ width: "100%", height: "600px" }}>
              <div className="card" style={{ }} id={card}>
                <h6 id={text}>Creator Insider</h6>
                <img
                  className="third-column-third-row-img"
                  src="https://media.istockphoto.com/vectors/ninja-esport-vector-id1253989842?k=20&m=1253989842&s=612x612&w=0&h=YLJZtIzr3PHxCj3-4Bs2gCLyhoRlvOqQO23SA0yTT0M="
                  alt="Pic"
                />
                <div>
                  <h6 id={text}>This week at ProPlayers</h6>
                  <p id={text}>
                    Hello Insiders! we're back with a few launches this week
                  </p>
                </div>
                <a href="" style={{ textDecoration: "none" }}>
                  WATCH ON PRO-PLAYERS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDashboardHome;
