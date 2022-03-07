import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Button, Divider, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
const MessageModal = (props) => {
  /* ::: textarea style ::::*/
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "yellow",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const open = props.open;
  const handleClose = props.handleClose;
  const style = props.style;
  const displayName = props.displayName;
  const title = props.title;
  const description = props.description;
  const email = props.email;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="fix-font-weight">
        <Typography id="modal-modal-title">
          <b>{displayName}</b>

          {/* {displayName} */}
        </Typography>
        <Typography id="modal-modal-title">
          <b>{email}</b>
        </Typography>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Title: {title}
          </Typography>
          <Divider />
          <br />
          <Typography id="modal-modal-description">{description}</Typography>
        </Box>

        <form
          action="
       "
        >
          <CssTextField
            label="leave a reply"
            // focused
            fullWidth
            multiline
            rows={4}
            focused
          />
          <Button
            type="submit"
            sx={{ width: "100%", my: 1, color: "aliceblue" }}
            variant="outlined"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default MessageModal;
