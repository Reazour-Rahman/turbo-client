import React, { useEffect, useState } from "react";

const Test = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://proplayer-backend.vercel.app/users`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        setUsers(data);
      });
  }, []);
  // console.log(users);

  const [blog, setBlogs] = useState({});
  useEffect(() => {
    // setLoading(true);
    const blogUrl = `https://proplayer-backend.vercel.app/blogs`;
    fetch(blogUrl)
      .then((response) => response.json())
      .then((data) => {
        // setLoading(false);
        for (const blog of data.blogs) {
          setBlogs(blog);
        }
      });
  }, []);
  // console.log(blog, "eta hocce blog");

  return (
    <div style={{ marginLeft: "100px" }}>
      {users?.map((item, index) => (
        <div key={index}>
          {item?.followers.map((c, i) => (
            <div key={i}>
              {c.followerEmail === blog.bloggerEmail && (
                <div>
                  {" "}
                  <img width={200} src={blog.thumbnail} alt="" /> {blog.title}{" "}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Test;
