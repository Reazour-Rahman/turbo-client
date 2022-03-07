import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloudStorage from "./CloudStorage";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import './Document.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';

export default function UploadVideoModal() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <IconButton aria-label="delete" size="small" onClick={handleClickOpen("paper")} style={{color:"white"}}> <VideoCallIcon/> </IconButton>
      <Dialog
        className="modal-bg"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}
          className="modal-header"
        >
          <small className="">UPLOAD VIDEO</small>
          
          <IconButton onClick={handleClose} aria-label="delete">
            <CloseIcon />
          </IconButton>
          
        </DialogTitle>

        <DialogContent dividers={scroll === "paper"} style={{ width: "600px" }} className="modal-floor">
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <main>
              <section>
                <CloudStorage close={handleClose} />
              </section>

              <section></section>
            </main>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
