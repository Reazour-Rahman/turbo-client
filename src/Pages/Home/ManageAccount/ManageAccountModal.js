import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, Divider, Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    // bgcolor: "background.paper",
    border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    // backgroundColor: '#091a2b',
    color: 'white'
};


const ManageAccountModal = ({ openManageModal, handleCloseManageModal }) => {
    let mode = localStorage.getItem("theme");
    const bg = mode === "light" ? "lightest" : "darkish";
    const text = mode === "light" ? "black" : "darkLight";
    const card = mode === "light" ? "moreLight" : "moreDark";

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openManageModal}
                onClose={handleCloseManageModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openManageModal}>

                    <Box sx={style} id={bg}>
                        <Grid
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '30px'
                            }}>
                            <Button onClick={handleCloseManageModal}>
                                <ArrowBackIcon></ArrowBackIcon>
                            </Button>

                            <Typography id={text} variant="h4"> Manage Account
                            </Typography>
                            <Button onClick={handleCloseManageModal}>
                                <CloseIcon id={text}></CloseIcon>
                            </Button>
                        </Grid>

                        <Box sx={{ mt: 3 }}>

                            <Divider />
                            <Button
                                id={text}
                                sx={{ width: "100%", mt: 2 }}
                                variant="contained"
                            >
                                Change Name
                            </Button>
                            <Button
                                id={text}
                                sx={{ width: "100%", mt: 2 }}
                                variant="contained"
                            >
                                Change Room Name
                            </Button>
                            <Button
                                id={text}
                                sx={{ width: "100%", mt: 2 }}
                                variant="contained"
                            >
                                Change Profile
                            </Button>

                        </Box>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
};

export default ManageAccountModal;
