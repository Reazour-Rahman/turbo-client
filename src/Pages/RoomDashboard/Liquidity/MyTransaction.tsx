import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Divider, IconButton } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const MyTransaction = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [payments, setPayments] = useState([]);

  const url = `http://localhost:5000/user/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPayments(data.payment);
      });
  }, [url]);
  //   console.log(payments);

  //   console.log(payments);
  //   console.log(users.payment);
  //   const payments: any = users.payment;

  return (
    <div className="members-container">
      <div className="new-members-head">
        <p>Latest Transactions</p>
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
          <th>Doner</th>
          <th>Date</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Blog </th>
          <th>Status</th>
        </tr>
        {payments.map((payment) => (
          <tr>
            <td className="td-flx">
              <Avatar
                sx={{ bgcolor: deepPurple[500] }}
                src={payment.donorPhoto}
              ></Avatar>
              {payment.doner}
            </td>
            <td>{payment.time}</td>
            <td>{payment.date}</td>
            <td>$ {payment.amount / 100}</td>
            <td>{payment.blogTitle}</td>
            <td className="status-transaction">Withdraw</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyTransaction;
