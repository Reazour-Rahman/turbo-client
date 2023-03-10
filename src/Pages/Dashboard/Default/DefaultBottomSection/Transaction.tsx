import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import "../Default.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Divider, IconButton } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const Transaction = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [users, setUsers] = useState([]);
  const payments = [];

  const url = `https://grass-dour-wasp.glitch.me/users`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  /*  users.map((user) => {
    const paymentArray = user?.payment;
    paymentArray.map((payment) => {
      console.log(payment);
    });
    
  });
 */

  users.forEach((user) => {
    const paymentArray = user?.payment;
    if (paymentArray) {
      paymentArray.forEach((payment) => {
        // console.log(payment);
        payments.push(payment);
      });
    }
  });

  // console.log(payments);
  payments.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });

  console.log(payments);

  let mode;
  mode = localStorage.getItem("theme");
  const text = mode === "light" ? "black" : "darkLight";
  const card = mode === "light" ? "moreLight" : "moreDark";
  const bg = mode === "light" ? "lightest" : "darkish";

  return (
    <div className="members-container" id={card}>
      <div className="new-members-head">
        <p id={text}>Latest Transactions</p>
        <div>
          <IconButton
            className="add-btn"
            id="fade-button"
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
      <table id="customers">
        <tr>
          <th id={text}>Customer</th>
          <th id={text}>Date</th>
          <th id={text}>Time</th>
          <th id={text}>Amount</th>
          <th id={text}>Donor</th>
          <th id={text}>Status</th>
        </tr>

        {payments.map((payment) => (
          <tr>
            <td className="td-flx" id={text}>
              <Avatar
                sx={{ bgcolor: deepPurple[500] }}
                src={payment.bloggerPhoto}
              ></Avatar>
              {payment.bloggerName}
            </td>
            <td id={text}>{payment.time}</td>
            <td id={text}>{payment.date}</td>
            <td id={text}>$ {payment.amount / 100}</td>
            <td id={text}>{payment.doner}</td>
            <td id={text} className="status-transaction">
              Approve
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Transaction;
