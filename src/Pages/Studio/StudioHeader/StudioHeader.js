import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StudioHeader = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
            backgroundColor: "#102841",
          }}
        >


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Channel Analytics
          </Typography>
        </Toolbar>

        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
            backgroundColor: "#102841",
          }}
        >
          <Box sx={{ display: "flex", width: "50%" }}>
            <MenuItem>
              <Typography textAlign="center">Overview</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Audience</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Reach</Typography>
            </MenuItem>
          </Box>

          <FormControl sx={{ width: 240 }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
              Timeline
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ color: "white" }}
            >
              <MenuItem value={10}> Last 7 days</MenuItem>
              <MenuItem value={20}> Last 14 days</MenuItem>
              <MenuItem value={30}> Last 28 days</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default StudioHeader;
