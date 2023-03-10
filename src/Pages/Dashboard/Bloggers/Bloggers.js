import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Blogger from "./Blogger";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  justifyContent: "center",

  [theme.breakpoints.up("sm")]: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Bloggers = () => {
  const [bloggers, setBloggers] = useState([]);
  const [displayBloggers, setdisplayBloggers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bloggerUrl = `https://grass-dour-wasp.glitch.me/users`;
    fetch(bloggerUrl)
      .then((response) => response.json())
      .then((data) => {
        setBloggers(data);
        setdisplayBloggers(data);
      });
    setLoading(true);
  }, []);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    const roomNameMatch = bloggers.filter((blogger) =>
      blogger?.room?.roomName
        ?.toLowerCase()
        .includes(searchTextValue.toLowerCase())
    );
    setdisplayBloggers(roomNameMatch);
  };

  return (
    <div>
      <Box sx={{ m: 5, mt: 2 }}>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={8}>
                <Search
                  sx={{ justifyContent: "center", alignItems: "center" }}
                  style={{ color: "white" }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    onChange={handleSearch}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Box>
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 8, lg: 14 }}
        >
          {displayBloggers?.map((blogger) =>
            blogger?.room?.roomName ? (
              <Blogger
                email={blogger?.email}
                followersCount={blogger?.followersCount}
                blogger={blogger?.room}
              ></Blogger>
            ) : null
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Bloggers;
