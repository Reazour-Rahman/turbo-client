import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "./detailsvideo.css";
import VideoPlayer from "react-video-js-player";
import videoSrc from "../../../assets/gig.mp4";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Aside(props) {
  const { data } = props;
  const p = data[0];

  const [allViewers, setAllViewers] = React.useState([])
  const { _id, title, video, bloggerName, category, bloggerEmail, viewers, uploadTime, thumbnail, bloggerPhoto, views, description } =data;
  const navigate = useNavigate()
  const user = useSelector(state => state.firebase.user)
  const matched = viewers?.find(v => v.viewerEmail === user.email)

  const singleBlog = async (id) => {
    navigate(`/details/${id}`)

    if (matched) {
      const viewsData = {
        views : views + 1,
        viewers : [...viewers]
      }
      await axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/views/${id}`, viewsData)
    }
    else {
      const viewerData = {viewerEmail :user.email}
      const viewsData = {
        views : views + 1,
        viewers : [...viewers,  viewerData]
      }
      await axios.put(`https://aqueous-chamber-45567.herokuapp.com/blogs/views/${id}`, viewsData)
    }

    const data = {
      blogId : _id, viewerName:user.displayName, viewerEmail:user.email, title, video, bloggerName, category, bloggerEmail, uploadTime, thumbnail, bloggerPhoto, views, description
    }
    await axios.post('https://aqueous-chamber-45567.herokuapp.com/views', data)

  }

  const [products, setProducts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setLoader(true);
    setTimeout(async () => {
      const response = await fetch(
        "https://aqueous-chamber-45567.herokuapp.com/blogs"
      );
      const data = await response.json();
      setLoader(false);
      setProducts(data.blogs);
    }, 0);
  }, []);

  /* Video */
  const poster = "https://wallpapercave.com/wp/wp6543230.jpg";
  const videoSource = videoSrc;
  console.log(props.video);

  let theme;
  theme = localStorage.getItem("theme")
  const text= theme === "light" ? "black" : "darkLight" ;

  // const recommended = products.filter((product) => product.category);

  return (
    <main container spacing={3}>
      <div className="aside-grid">
        {products.map((blog) =>
          blog.category.slice(0, 1).map((bl) =>
            bl === p ? (
              <Card
                style={{ backgroundColor: "transparent", color: "aliceblue" }}
                sx={{ boxShadow: 0 }}
              >
                <CardActionArea>
                  <VideoPlayer
                    src={blog.video}
                    poster={blog.thumbnail}
                    className="video-size-aside"
                  />
                  <div onClick={() => singleBlog(blog._id)}  style={{textDecoration:"none"}}>
                    <CardContent
                      style={{ margin: "0px", padding: "0px", paddingTop: "5px" }}
                    >
                      <small id={text} gutterBottom>{blog.title.slice(0, 40)}..</small>{" "}
                      <br />
                      <small>
                        <strong id={text}>{blog.bloggerName}</strong>
                      </small>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            ) : null
          )
        )}
      </div>
    </main>
  );
}
