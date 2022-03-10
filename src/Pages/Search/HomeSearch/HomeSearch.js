import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";

import Slide from "@mui/material/Slide";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Blogs from "./BLogs/Blogs";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeSearch() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(text);
  let mode;
  mode = localStorage.getItem("theme");

  return (
    <div>
      <Search
      
        style={{ cursor: "pointer" }}
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            setText(ev.target.value);
            handleClickOpen();
          }
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        id={ mode === "light" ? "moreLight" : "moreDark" }
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{ backgroundColor: "none" }}>
          <Button autoFocus color="inherit" onClick={handleClose}>
            save
          </Button>
        </AppBar>

        <Box>
          {" "}
          <Blogs />{" "}
        </Box>
      </Dialog>
    </div>
  );
}

/* button */
