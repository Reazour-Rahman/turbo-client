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
        "https://grass-dour-wasp.glitch.me/blogs/"
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
    fetch(`https://grass-dour-wasp.glitch.me/blogs/${blogId}`)
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
    fetch(`https://grass-dour-wasp.glitch.me/blogs/${blogId}`)
    .then(res => res.json())
    .then(data => {
      setSingleBlog(data)
      setCount(data.likes)
    })
  },[])


  let theme;
  theme = localStorage.getItem("theme")
  const text= theme === "light" ? "black" : "darkLight" ;
  const card= theme === "light" ? "moreLight" : "moreDark";
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
                    <p className="title-font"  id={text}>{blog.title}</p>

                    <span className="interaction" >
                      <small id={text}>{blog.views} views</small>
                      <span>
                        <span className="interect" id={text}>
                          <MoodBadIcon  id={text}/> 112k
                        </span>
                        <span id={text}>
                          <FavoriteBorderIcon id={text}/> {singleBlog?.likes}
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
                      <br />
                      <Accordion
                      id={card}
                        className="bg-accordion"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon  id={text} className="bg-accordion" />
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}  id={text}>
                            See more...
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <small id={text}>
                            <span style={{ fontWeight: "bold" }}  id={text}>
                              Description :
                            </span>
                            &nbsp;&nbsp;
                            {blog.description}
                          </small>{" "}
                          <br /> <br />
                          <small id={text}>
                            <span style={{ fontWeight: "bold" }}  id={text}>Tags :</span>
                            &nbsp;&nbsp; #bold #Game #BGMI #PUBG #FreeFire
                          </small>{" "}
                          <br /> <br />
                          <small  id={text}>
                            <span style={{ fontWeight: "bold" }}  id={text}>
                              Category :
                            </span>
                            &nbsp;&nbsp;
                            {blog.category}, {blog.category}, {blog.category},{" "}
                            {blog.category}
                          </small>
                          <br /> <br />
                          <small id={text}>
                            <span style={{ fontWeight: "bold" }} id={text}>About :</span>
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
                    
                      id={card}
                      className="video-size-details"
                      variant="rectangular"
                      animation="wave"
                    />

                    <Skeleton
                    id={card}
                      className="title-font sk"
                      variant="text"
                      height={28}
                      animation="wave"
                    />

                    <Skeleton
                    id={card}
                      className="title-font sk"
                      variant="text"
                      height={28}
                      animation="wave"
                    />
                    <Skeleton
                    id={card}
                      className="sk"
                      variant="text"
                      height={5}
                      animation="wave"
                    />

                    <Skeleton
                    id={card}
                      className="sk"
                      variant="text"
                      height={95}
                      animation="wave"
                    />

                    <div>
                      <Skeleton
                    id={card}
                        className="sk"
                        variant="text"
                        height={75}
                        animation="wave"
                      />
                    </div>
                    {/* Comment page */}
                    <Skeleton
                    id={card}
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
                            id={card}
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
                              id={card}
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              id={card}
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                            id={card}
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
                          id={card}
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
                            id={card}
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                            id={card}
                              className="sk"
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                            id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
                            id={card}
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
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="sk"
                              id={card}
                              variant="text"
                              height={23.33}
                              animation="wave"
                            />
                            <Skeleton
                              className="skHalf"
                              id={card}
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
