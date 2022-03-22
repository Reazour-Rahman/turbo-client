import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import History from "./History";
import HistoryVideo from "./HistoryVideo";

const HistoryList = ({ page }) => {
  const [histories, setHistories] = useState([]);
  const [searchHistories, setsearchHistories] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user);
  const size = 5;
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(
        `http://localhost:5000/views?page=${page}&&size=${size}`
      );
      const data = await response.json();
      setHistories(data);
      setsearchHistories(data);

      setLoading(false);
    });
  }, [page]);

  console.log(histories);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    const UserMatch = histories.filter((history) =>
      history?.title?.toLowerCase().includes(searchTextValue.toLowerCase())
    );
    setsearchHistories(UserMatch);
  };

  const userHistory = searchHistories.filter(
    (h) => h?.viewerEmail === user?.email
  );

  return (
    <div style={{ color: "white" }}>
      <Box>
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
              onChange={handleSearch}
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        {!loading ? (
          histories?.map((history) => (
            <HistoryVideo history={history}></HistoryVideo>
          ))
        ) : (
          <div></div>
        )}
        {/* </Grid> */}
      </Box>
    </div>
  );
};

export default HistoryList;
