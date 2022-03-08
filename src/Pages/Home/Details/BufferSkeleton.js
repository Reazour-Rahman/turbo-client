import { Card, CardActionArea, CardContent, Grid, Skeleton } from '@mui/material';
import React from 'react';
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import "./skeleton/Skeleton.css";

const BufferSkeleton = () => {
    return (
        <div> {
            [1].map((loading) => (
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
        </div>
    );
};

export default BufferSkeleton;