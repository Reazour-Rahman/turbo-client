import { useState, useEffect } from "react";
import "./Details.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import VideoPlayer from "react-video-js-player";
import videoSrc from "../../../assets/gig.mp4";
import "./detailsvideo.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import Buttons from "./Buttons";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Comment from "./Comment";
import Aside from "./Aside";
import "./skeleton/Skeleton.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import axios from "axios";
import useFirebase from "../../../Hooks/useFirebase";
import { useSelector } from "react-redux";

const Details = () => {
  const { blogId } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [backendComment , setBackendComment] = useState([])
  const [count, setCount] = useState(0)
  const [allLikers, setAllLikers] = useState([])
  const [allReadyLiked, setAllReadyLiked] = useState(false)
  const [rendering, setRendering] = useState(0)
  const [singleBlog, setSingleBlog] = useState({})
  const user = useSelector((state) => state.firebase.user)


  useEffect(() => {
    setLoader(true);
    setTimeout(async () => {
      const response = await fetch(
        "https://aqueous-chamber-45567.herokuapp.com/blogs/"
      );
      const data = await response.json();
      setLoader(false);
      setProducts(data.blogs);
    }, );
  }, []);
  
  const poster = "https://wallpapercave.com/wp/wp6543230.jpg";

  /* Accordion */
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/blogs/${blogId}`)
    .then(res => res.json())
    .then(data => setBackendComment(data.comment))
  },[blogId])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  /* Comment */

  useEffect(() => {
    const allReadyLiker = singleBlog?.likers?.find(b => b?.likerEmail === user?.email)
    if (allReadyLiker?.likerEmail === user?.email) {
      setAllReadyLiked(true)
    }
    else{
      setAllReadyLiked(false)
    }

  },[user.email, singleBlog?.likers])


    useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/blogs/${blogId}`)
    .then(res => res.json())
    .then(data => {
      setSingleBlog(data)
      setCount(data.likes)
    })
  },[blogId, rendering, singleBlog?.likers])


  let theme;
  theme = localStorage.getItem("theme")
  return (
    <div className="">
      <Grid spacing={3}>
        {!loader
          ? products.map((blog) =>
              blog._id === blogId ? (
                <main className="details-grid">
                  {/* :::::::::::::::::::::::::
                        Left side
                        ::::::::::::::::::::::::::*/}
                  <article>
                    <VideoPlayer
                      src={blog.video}
                      poster={blog.thumbnail}
                      className="video-size-details"
                      playbackRates={[0.5, 1, 1.2, 1.5, 1.7, 3, 6]}
                    />
                    <p className="title-font">{blog.title}</p>

                    <span className="interaction" id={ theme === "light" ? "black" : "darkLight" }>
                      <small>{blog.views} views</small>
                      <span>
                        <span className="interect">
                          <MoodBadIcon /> 112k
                        </span>
                        <span>
                          <FavoriteBorderIcon /> {singleBlog?.likes}
                        </span>
                      </span>
                    </span>
                    <hr />
{/* 
                    <Buttons
                      countNumber = {count}
                      blogId = {blogId}
                      allLikers = {allLikers}                           
                      bloggerName={blog.bloggerName}
                      uploadTime={blog.uploadTime}
                      allReadyLiked={allReadyLiked}
                      setAllLikers = {setAllLikers}
                      setRendering = {setRendering}
                      rendering = {rendering}
                      blog={singleBlog}
                    /> */}

                    <Buttons
                      countNumber={count}
                      blogId={blogId}
                      allLikers={allLikers}
                      bloggerName={blog.bloggerName}
                      uploadTime={blog.uploadTime}
                      allReadyLiked={allReadyLiked}
                      setAllLikers={setAllLikers}
                      setRendering={setRendering}
                      rendering={rendering}
                      blog={singleBlog}
                      bloggerEmail={blog.bloggerEmail}
                      blogTitle={blog.title}
                      bloggerPhoto={blog.bloggerPhoto}
                    />

                    <div>
                      <Accordion
                        className="bg-accordion"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon className="bg-accordion" />
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            See more...
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <small>
                            <span style={{ fontWeight: "bold" }}>
                              Description :
                            </span>
                            &nbsp;&nbsp;
                            {blog.description}
                          </small>{" "}
                          <br /> <br />
                          <small>
                            <span style={{ fontWeight: "bold" }}>Tags :</span>
                            &nbsp;&nbsp; #bold #Game #BGMI #PUBG #FreeFire
                          </small>{" "}
                          <br /> <br />
                          <small>
                            <span style={{ fontWeight: "bold" }}>
                              Category :
                            </span>
                            &nbsp;&nbsp;
                            {blog.category}, {blog.category}, {blog.category},{" "}
                            {blog.category}
                          </small>
                          <br /> <br />
                          <small>
                            <span style={{ fontWeight: "bold" }}>About :</span>
                            &nbsp;&nbsp;
                            {blog.description}
                          </small>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    {/* Comment page */}
                    <Comment  setBackendComment={setBackendComment} backendComment={backendComment} blogId={blogId} tt={blog.comment.length}/>
                  </article>

                  {/* :::::::::::::::::::::::::
                        Right side
                    ::::::::::::::::::::::::::*/}
                  <aside>
                    <Aside data={blog.category} />
                  </aside>
                </main>
              ) : null
            )
          : [1].map((loading) => (
              <Grid
                container
                spacing={3}
                key={loading}
                style={{
                  marginTop: "8px",
                  paddingLeft: "23px",
                  
                }}
              >
                <main className="details-grid" style={{ width: "100%" }}>
                  {/* :::::::::::::::::::::::::
                        Left side
                ::::::::::::::::::::::::::*/}
                  <article>
                    <LinearProgressWithLabel style={{ color: "white" }} />
                    <Skeleton
                      className="video-size-details"
                      variant="rectangular"
                      animation="wave"
                    />

                    <Skeleton
                      className="title-font sk"
                      variant="text"
                      height={28}
                      animation="wave"
                    />

                    <Skeleton
                      className="title-font sk"
                      variant="text"
                      height={28}
                      animation="wave"
                    />
                    <Skeleton
                      className="sk"
                      variant="text"
                      height={5}
                      animation="wave"
                    />

                    <Skeleton
                      className="sk"
                      variant="text"
                      height={95}
                      animation="wave"
                    />

                    <div>
                      <Skeleton
                        className="sk"
                        variant="text"
                        height={75}
                        animation="wave"
                      />
                    </div>
                    {/* Comment page */}
                    <Skeleton
                      className="sk"
                      variant="text"
                      height={107}
                    ></Skeleton>
                  </article>

                  {/* :::::::::::::::::::::::::
                        Right side
                    ::::::::::::::::::::::::::*/}
                  <aside>
                    <div className="aside-grid">
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          color: "aliceblue",
                        }}
                        sx={{ boxShadow: 0 }}
                      >
                        <CardActionArea>
                          <Skeleton
                            className="sk"
                            variant="rectangular"
                            height={120}
                            animation="wave"
                          />

                          <CardContent
                            style={{
                              margin: "0px",
                              padding: "0px",
                              paddingTop: "5px",
                            }}
                          >
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </aside>
                </main>
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default Details;
