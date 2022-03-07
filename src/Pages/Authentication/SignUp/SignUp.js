import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Register from './Register';
import {makeStyles} from '@mui/styles'
import { useTheme } from '@mui/system';
import { useSelector } from 'react-redux';
import useFirebase from '../../../Hooks/useFirebase'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius:'5px',
  backgroundColor:"#102841",
};



const SignUp = ({handleClose, open}) => {
    const theme = useTheme()
    const useStyle = makeStyles({
        modalBox  : {
            width: '30%',
            [theme.breakpoints.down('sm')] : {
                width: '75%'
            }
        }
    })

    const {modalBox} = useStyle()
    

    const {user} = useFirebase()
    return (
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={modalBox}>
          <Register handleClose={handleClose}></Register>
        </Box>
      </Modal>
        </div>
    );
};

export default SignUp;