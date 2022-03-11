import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import './Drawer.css';
import DarkMode from "../Theme/DarkMode";
import ClearIcon from '@mui/icons-material/Clear';

type Anchor = "right";

export default function SettingDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    let theme;
    theme = localStorage.getItem("theme");

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="setting">
            <SettingsIcon fontSize="inherit" sx={{ width: 32, height: 32 }} id={ theme === "light" ? "black" : "darkLight" }/>
          </IconButton>

          <SwipeableDrawer
          
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
           <div className={ theme === "dark" ? "darkish" : "lightest" }>
           <div className="setting-drawer" >
           </div>
           <br />
           <Divider />

           <div className="top-setting" id={ theme === "light" ? "lightest" : "darkish" }>
                <IconButton onClick={toggleDrawer(anchor, false)} aria-label="setting">
                    <ClearIcon id={ theme === "light" ? "black" : "darkLight" } fontSize="inherit" sx={{ width: 32, height: 32}}/>
                </IconButton>
               <p id={ theme === "light" ? "black" : "darkLight" }>Theme Config</p>
           </div>
           <Divider />


           <div className="mode-setting" id={ theme === "light" ? "lightest" : "darkish" } style={{height:"100vh"}}>
               <DarkMode/>
               <p id={ theme === "light" ? "black" : "darkLight" }> {theme} Mode</p>
           </div>
           <Divider />
           </div>

          </SwipeableDrawer>

        </React.Fragment>
      ))}
    </div>
  );
}
