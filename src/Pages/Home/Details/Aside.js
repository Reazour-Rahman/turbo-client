import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import "./detailsvideo.css";
import VideoPlayer from "react-video-js-player";
import videoSrc from "../../../assets/gig.mp4";

export default function Aside(props) {
  const { data } = props;
  const p = data[0];

  console.log("rabby bahi", p);

  const [products, setProducts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    setLoader(true);
    setTimeout(async () => {
      const response = await fetch(
        "https://aqueous-tor-77774.herokuapp.com/blogs"
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
                  <CardContent
                    style={{ margin: "0px", padding: "0px", paddingTop: "5px" }}
                  >
                    <small gutterBottom>{blog.title.slice(0, 40)}..</small>{" "}
                    <br />
                    <small>
                      <strong>{blog.bloggerName}</strong>
                    </small>
                  </CardContent>
                </CardActionArea>
              </Card>
            ) : null
          )
        )}
      </div>
    </main>
  );
}
