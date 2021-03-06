import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Avatar} from "@mui/material/Avatar";
import { Grid, LinearProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import "./Progress.css";

function Media(props) {
  const { loading = false } = props;
  let theme;
  theme = localStorage.getItem("theme");
  const bg = theme === "light" ? "moreLight" : "darkish" ;
  const card = theme === "light" ? "lightest" : "moreDark";

  return (
    <div style={{marginBottom:"25px"}}>
    <Card className="progress-css" id={bg}>
      <CardHeader className="progress-bg"
        avatar={
          <Skeleton
          id={card}
          className="proress-video"
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
          id={card}
          className="proress-video"
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton className="proress-video" id={card} animation="wave" height={10} width="40%" />}
      />
      {<Skeleton sx={{ height: 190 }} className="proress-video" id={card} animation="wave" variant="rectangular" />}

      <CardContent className="progress-bg">
        {loading ? (
          <React.Fragment>
            <Skeleton
            id={card}
            className="proress-video"
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton className="proress-video" id={card} animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p" >
            {
              <React.Fragment>
                <Skeleton
                id={card}
                className="proress-video"
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton className="proress-video" id={card} animation="wave" height={10} width="80%" />
              </React.Fragment>
            }
          </Typography>
        )}
      </CardContent>
    </Card>
    </div >
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Progress() {
  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={4} xxl={3}>
        
      <Media loading  />

    </Grid>
  );
}
