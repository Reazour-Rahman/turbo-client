import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { grey } from "@mui/material/colors";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";
import profile from "../../assets/default/profile.png";
import "./Notification.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import useFirebase from "../../Hooks/useFirebase";
import { fontSize } from "@mui/system";

export default function Messaging() {
  const { user, logOut } = useFirebase();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    color: "white",
    marginLeft: 10,
    fontSize: "18px",
  };

  const iconStyle = {
    marginRight: 25,
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <NotificationsIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            width: 350,
            opacity: 1,
            backgroundColor: "#091a2b",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: grey[900],
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="p-li">
          <Box>
            <p className="p-mg">Notifications</p>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box className="not-filter">
            <Button className="category-color" variant="outlined" size="small">
              All
            </Button>
            <Button className="category-color" variant="outlined" size="small">
              Unread
            </Button>
            <Button className="category-color" variant="outlined" size="small">
              Priority
            </Button>
          </Box>
        </MenuItem>

        <Divider className="dev" />

        {[0, 1, 2, 3, 4, 5, 6].map((element) => (
          <Link style={{ textDecoration: "none" }} to="/manage-account">
            <MenuItem className="menu-style">
              <small style={{width:"100px", color:"white"}}>Rabby rahaman requested <br /> for having monetization waterway.</small>
            </MenuItem>
          </Link>
        ))}

      </Menu>
    </React.Fragment>
  );
}
