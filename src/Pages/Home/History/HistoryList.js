import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import History from "./History";

const HistoryList = () => {


  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.firebase.user)
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(
        "http://localhost:5000/views"
      );
      const data = await response.json();
      setHistories(data);
      
        setLoading(false);
    });
  }, []);

console.log(histories);

const userHistory = histories.filter(h => h?.viewerEmail === user?.email)

  return (
    <div style={{ color: "white" }}>
      <Box sx={{ m: 5 }}>
        
        {!loading ? (
          userHistory?.map((history) => (
            <History history={history}></History>
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
