import { Box } from '@mui/system';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import useFirebase from '../../Hooks/useFirebase'
import profile from '../../assets/default/profile.png'
import { TextField } from '@mui/material';
import logo from '../../assets/logo.png'
const messages = [
    {email : 'alexrabbi111@gmail.com', name:'Reaz', messages : 'Hi How are you'},
    {email : 'md.ravi78@gmail.com', name:'fahad', messages : 'Fine'},
    {email : 'alexrabbi111@gmail.com', name:'Rahaman', messages : 'Rahim  what about you? Rahim  what about you?Rahim  what about you? Rahim  what about you?'},
    {email : 'md.ravi45@gmail.com', name:'ravi', messages : 'Yeah Good Rahim  what about you? Rahim  what about you?Rahim  what about you? Rahim  what about you?'},
    {email : 'md.ravi45@gmail.com', name:'ravi', messages : 'Yeah Good Rahim  what about you? Rahim  what about you?Rahim  what about you? Rahim  what about you?'},
    {email : 'alexrabbi111@gmail.com', name:'Rahaman', messages : 'Rahim  what about you? Rahim  what about you?Rahim  what about you? Rahim  what about you?'},
    {email : 'md.ravi45@gmail.com', name:'ravi', messages : 'Yeah Good Rahim  what about you? Rahim  what about you?Rahim  what about you? Rahim  what about you?'},
]

const Message = () => {
    const {user} = useFirebase()
    return (
        <div>
            <Box >
                <Box style={{ width:'100%', margin:' auto',  background: '#102841', color:'white'}}>
                    <Box sx={{p:2}} style={{background: '#041a31'}}>
                    <span style={{fontSize:'16px', fontWeight:'bold'}}>Team Turbo Dynamics</span>
                    </Box>
                    <Box style={{height : '75vh',  overflowY : 'scroll',padding:'15px'}}> 
                    {
                        messages.map(m => <div>
                            {
                                user.email === m.email ? <p style={{textAlign:'right'}}>{m.messages}</p>  : <div style={{display:'flex', marginRight:'50px'}}>
                                <img style={{height:'25px', marginRight:'5px'}} src={profile} alt="" /> 
                                <div>
                                    <small>{m.name}</small>
                                <p style={{textAlign:'left', border:'1px solid white', padding:'2px', borderRadius:'5px', background: '#3f6893'}}>{m.messages}</p>
                                </div>
                                </div>
                            }
                        </div>)
                    }
                    </Box>

                    <Box style={{display:'flex', alignItems:'center', paddingBottom:"20px"}}>
                    <TextField
                        className="password-class input"
                        placeholder="Enter Message"
                        type="text"
                        style={{width:'80%', margin:'10px'}}
                        hiddenLabel
                        variant="filled"
                        size="small"
                        />
                    <SendIcon style={{color:'white', marginLeft:'10px'}}></SendIcon>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Message;