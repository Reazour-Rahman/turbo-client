import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const RecommendedRoom = () => {
  const [users, setUsers] = useState([]);

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
  let mode;
  mode = localStorage.getItem("theme");




  var countArr ;

  users.filter((u) => {
    let countArr = parseInt(u.followersCount);
    console.log(countArr);
  } )


  return (
    <>
    <p style={{paddingLeft:"12px", paddingTop:"8px"}}>Recommended Room</p>
      {users?.map((blogger) =>
        blogger?.room?.roomName && 
          <NavLink className="nav-btn" to={`/userprofile/${blogger?.email}`}>
            <ListItem className="nav-btn" button>
              <ListItemIcon className="fs-6">
                <img
                  src={blogger?.room?.profile}
                  width={24}
                  height={24}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText
                id={mode === "light" ? "black" : "darkLight"}
                primary={blogger?.room?.roomName}
              />
            </ListItem>
          </NavLink>

      )}
    </>
  );
};

export default RecommendedRoom;
