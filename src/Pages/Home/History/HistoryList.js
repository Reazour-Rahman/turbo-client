import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import History from "./History";

const HistoryList = () => {


  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const response = await fetch(
        "https://aqueous-chamber-45567.herokuapp.com/blogs"
      );
      const data = await response.json();
        let main = data.blogs;

        for (const data of main) {
            setHistories(data);
        }
        setLoading(false);
    });
  }, []);

console.log(histories);

  return (
    <div style={{ color: "white" }}>
      <Box sx={{ m: 5 }}>
        {!loading ? (
          histories?.viewers?.map((history) => (
            console.log(history)
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
