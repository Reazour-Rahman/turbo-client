import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import QueryResult from "./QueryResult";


export default function QueryModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* Search */
  const [blogs, setBlogs] = React.useState([]);
  const [displayBloggers, setDisplayBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
      const blogURL = `https://aqueous-chamber-45567.herokuapp.com/blogs`;
      fetch(blogURL)
          .then((response) => response.json())
          .then((data) => {
              setBlogs(data.blogs)
              setDisplayBlogs(data.blogs)
          });
      setLoading(true);
  }, []);

  const handleSearch = e => {
      const searchTextValue = e.target.value;
      const titleMatch = blogs.filter(blog => blog?.title?.toLowerCase().includes(searchTextValue.toLowerCase()));
      setDisplayBlogs(titleMatch);
  }

  let mode;
  mode = localStorage.getItem("theme")
  const text= mode === "light" ? "black" : "darkLight" ;
  const card= mode === "light" ? "moreLight" : "moreDark";
  const fill = mode === "light" ? "" : "moreLight";



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={card}>
          <Stack spacing={2} style={{width:"100%"}}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={displayBloggers.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                style={{backgroundColor:"#f7f7f7"}}
                onChange={handleSearch}
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
        </DialogTitle>
        <DialogContent id={card} style={{width:"100%"}}>
          
          {
              displayBloggers.map(db => <QueryResult key={db._id} db={db}/>)
          }
        </DialogContent>
      </Dialog>
    </div>
  );
}
