import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Blogs from "./BLogs/Blogs";
import LoadMore from "./BLogs/LoadMore";
import NavigationBar2 from "./NavigationBar/NavigationBar2";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  const handleLoadMore = () => {
    setPage(page + 1);
    // setLoadMore(true);
    console.log("load more");
  };

  //   console.log(filter);
  return (
    <div style={{ paddingLeft: "51px" }}>
      <Banner />
      <NavigationBar2 setFilter={setFilter}></NavigationBar2>
      <Blogs filter={filter} page={page} setLoadMore={setLoadMore} />
      <br /> <br />
      <div
        onClick={() => handleLoadMore()}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* {!allBlogs && !filter && <LoadMore />} */}
        {loadMore && !filter && <LoadMore />}
      </div>
      <br />
    </div>
  );
};

export default Home;
