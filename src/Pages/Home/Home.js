import React, { useState } from "react";
import Blogs from "./BLogs/Blogs";
import LoadMore from "./BLogs/LoadMore";
import NavigationBar2 from "./NavigationBar/NavigationBar2";

const Home = () => {
  const [filter, setFilter] = useState("");
  //   console.log(filter);
  return (
    <div style={{ paddingLeft: "72px" }}>

      <NavigationBar2 setFilter={setFilter}></NavigationBar2>
      <Blogs filter={filter} />

      <br /> <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <LoadMore />
      </div>
      <br />
      
    </div>
  );
};

export default Home;
