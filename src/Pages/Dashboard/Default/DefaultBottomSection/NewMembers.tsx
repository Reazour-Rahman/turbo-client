import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import "../Default.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import useFirebase from "../../../../Hooks/useFirebase.js";

const NewMembers = ({user}) => {
  const avatar = user.photoURL;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-chamber-45567.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

  return (
    <div className=" members-container" id={card}>
      <section>
        <div className="new-members-head">
          <p id={text}>New Join Members</p>
          <div>
            <IconButton
            className="add-btn"
              id={text}
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              
            >
              <MoreHorizIcon />
            </IconButton>

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
        <br />
        <div>
          {users.map((user) => (
            <section className="team-members-list">

              <aside className="team-members-id">
                <div>
                  <Avatar alt="Remy Sharp" src={avatar} />
                </div>
                <div>
                  <p id={text} className="paragraph-size ">{user.name}</p>
                  <p id={text} className=" p-dark">{user.email}</p>
                </div>
              </aside>

              <div>
                <Button
                  className="add-btn"
                  variant="outlined"
                  size="small"
                  startIcon={<PersonAddIcon />}
                >
                  Add
                </Button>
              </div>
              
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewMembers;
