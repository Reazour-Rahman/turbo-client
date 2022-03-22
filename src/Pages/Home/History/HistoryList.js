import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import History from "./History";
import HistoryVideo from "./HistoryVideo";

const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  const [searchHistories, setsearchHistories] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.firebase.user);
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(
        "https://aqueous-chamber-45567.herokuapp.com/views"
      );
      const data = await response.json();
      setHistories(data);
      setsearchHistories(data);

      setLoading(false);
    });
  }, []);

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
          userHistory?.map((history) => (
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
