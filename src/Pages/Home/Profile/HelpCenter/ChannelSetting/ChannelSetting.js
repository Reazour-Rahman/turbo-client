import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

export default function ChannelSetting({ handleCloseSetting, openSetting }) {


    return (
        <div>

            <Dialog
                open={openSetting}
                onClose={handleCloseSetting}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <Box>
                        <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={handleCloseSetting}>
                                <ArrowBackIcon></ArrowBackIcon>
                            </Button>

                            <Typography sx={{ fontWeight: 'bold' }} variant="h4">Help Center
                            </Typography>

                            <Button onClick={handleCloseSetting}>
                                <CloseIcon></CloseIcon>
                            </Button>
                        </Grid>

                        <Grid sx={{ mt: 4 }}>

                            <Typography sx={{ fontWeight: 'bold', mb: 3 }} variant="h5">Request a refund
                            </Typography>

                            <Box >
                                <Box sx={{textAlign: 'center'}}>
                                    <Button sx={{ width: '25%', mb: 3 }} variant="contained">Request
                                    </Button>
                                </Box>

                                <Typography>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund. Apples refund policy will apply.
                                </Typography>

                                <Typography sx={{ mt: 2 }}>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund.
                                </Typography>
                                
                                <Typography>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund. Apples refund policy will apply.
                                </Typography>

                                <Typography sx={{ mt: 2 }}>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund.
                                </Typography>

                            </Box>

                        </Grid>
                        <Grid>

                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    mt: 3
                                }}
                                variant="h5">
                                Pro-Player membership <br /> refunds
                            </Typography>

                            <Box >

                                <Box sx={{ textAlign: 'center' }}>
                                    <Button
                                        sx={{
                                            width: '25%',
                                            mb: 3
                                        }}
                                        variant="contained">

                                        Request
                                    </Button>
                                </Box>

                                <Typography>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund. Apples refund policy will apply.
                                </Typography>

                                <Typography sx={{ mt: 2 }}>
                                    If you made a purchase using your iPhone or iPad, or signed up for a YouTube paid membership via Apple, youll need to get in touch with Apple support to request a refund.
                                </Typography>
                                
                            </Box>
                        </Grid>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
