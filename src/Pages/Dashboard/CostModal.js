import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';
import './RevenueModal.css'
import { useSelector } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CostModal({costOpen, setCostOpen}) {
    const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const options = {year: 'numeric' };


  const year = current.toLocaleDateString(undefined, options);
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [cost, setCost] = React.useState('')
  const handleClose = () => setCostOpen(false);

  const user = useSelector(state => state.firebase.user)

  const handleRevenueSubmit  = e => {
    e.preventDefault()

    const data = {
        cost, date, year, adminName : user?.displayName, adminEmail : user?.email
    }

    axios.put(`https://aqueous-chamber-45567.herokuapp.com/cost`, data)
    handleClose()
    
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={costOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={costOpen}>
          <Box sx={style}>

          
          <form onSubmit={handleRevenueSubmit}>
            <h1 className='modal-heading'>Net Cash Out Flow</h1>
          <TextField
            style={{ width: '100%', marginTop: '5px', backgroundColor: 'rgba(221, 221, 201, 0.905)', marginBottom: '20px', borderRadius: '10px' }}
            id="outlined-basic"
            placeholder="Set Your Net Cash Out Flow"
            onBlur={e => setCost(e.target.value)}
            hiddenLabel
            variant="filled"
            type="number"
            required
            />
            <Button type='submit' variant='contained' size='large'>Submit</Button>
          </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}