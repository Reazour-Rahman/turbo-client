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
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <tr>
            <td className="td-flx">
              <Avatar sx={{ bgcolor: deepPurple[500] }}>I'v</Avatar>
              Alfreds Futterkiste
            </td>
            <td>8 May 2021</td>
            <td>$ 140.00</td>
            <td className="status-transaction">Approve</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Transaction;
