import { Avatar, Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

const Blogger = ({ blogger, followersCount, email }) => {
  const { profile, roomName } = blogger;

  return (
    <Grid item xs={2} sm={4} md={2}>
      <Box>
        <Box>
          <Card className="card-bg card-hover">
            <CardActionArea>
              <CardContent className="pd">
                <CardMedia
                  component="img"
                  height="120"
                  image={profile}
                  alt={roomName}
                  sx={{ mb: 2 }}
                />

                <Grid container>
                  <Grid item xs={12}>
                    <div className="name-color">
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <small
                            style={{
                              fontWeight: "bold",
                              paddingBottom: "3px",
                              fontSize: "14px",
                            }}
                          >
                            {roomName}
                          </small>
                          <small
                            style={{ paddingBottom: "3px" }}
                            className="date-color"
                          >
                            {email}
                          </small>
                          <small
                            style={{
                              fontWeight: "bold",
                              paddingBottom: "5px",
                              fontSize: "13px",
                            }}
                            className="date-color"
                          >
                            Followers: {followersCount}
                          </small>
                        </span>
                      </span>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>

              {/* <Link to={`profile/${_id}`} style={{ textDecoration: "none" }}> */}
              {/* <CardContent>
                                    <Typography
                                        className="card-color"
                                        variant="body2"
                                        color="text.secondary"
                                    >

                                    </Typography>
                                </CardContent> */}
              {/* </Link> */}
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
};

export default Blogger;
