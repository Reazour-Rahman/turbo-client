import { Avatar, Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../Contents/Contents.css"
import { Link } from "react-router-dom";
import Setting from "../../BLogs/Setting";
import Video from "../../BLogs/Video";
import Videos from "../Videos/Videos";
import ContentVideos from "../Videos/ContentVideos/ContentVideos";


const Content = (props) => {
  const { _id, title, video, bloggerName, uploadTime } =
    props.content;

  return (
    <Grid item xs={5} sm={4} md={2} lg={2}>
      <Box>
        <Box>
          <Card className="card-bg">
            <CardActionArea>
              <ContentVideos video={video}></ContentVideos>
              <Link to={`details/${_id}`} style={{ textDecoration: "none" }}>
                <CardContent>
                  <Typography
                    className="card-color"
                    variant="body2"
                    color="text.secondary"
                  >
                    {title.slice(0, 53)}...
                  </Typography>
                  <small className="date-color">
                    {uploadTime}
                  </small>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
};

export default Content;