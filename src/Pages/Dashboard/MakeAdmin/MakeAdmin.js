import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button, Grid } from '@mui/material';
import "./DotMenuBar"
import DotMenuBar from './DotMenuBar';



// Generate Order Data
function createData(id, date, title, category, views, amount) {
    return { id, date, title, category, views, amount };
}


let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";



function preventDefault(event) {
    event.preventDefault();
}


const MakeAdmin = (props) => {
    const { index, name, role, email } =
        props.blogger;
    const handleAdminSubmit = e => {
        const user = { email, role };
        fetch("https://grass-dour-wasp.glitch.me/makeAdmin", {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
        e.preventDefault()
    }

    return (
        <div>
            <React.Fragment>

                <Table size="small">

                    <TableBody>

                        <TableRow>
                            <Grid container spacing={2}>
                                <Grid item xs={2} style={{ color: "white" }}>
                                    <TableCell style={{ color: "white" }} id={text}>{index}</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ color: "white" }} id={text}>{name}</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell style={{ color: "white" }} id={text}>{email}</TableCell>
                                </Grid>
                                <Grid item xs={2} >
                                    <TableCell style={{ color: "white" }} id={text}>{role == "admin" ? "Admin" : "User"}</TableCell>
                                </Grid>
                                <Grid item xs={2} >
                                    <TableCell style={{ padding: "0px", color: "white" }}>

                                        <div className='d-flex'>
                                            <div >
                                                {role == "admin" ? <form onClick={handleAdminSubmit}>
                                                    <Button className='bg-success' style={{
                                                        borderRadius: 35,
                                                        padding: "4px 16px",
                                                        fontSize: "10px",
                                                        status: 'pending',
                                                        onclick: { handleAdminSubmit },

                                                    }} variant="contained">Admin</Button></form> : <form onClick={handleAdminSubmit}>
                                                    <Button style={{
                                                        borderRadius: 35,
                                                        backgroundColor: "red",
                                                        padding: "4px 16px",
                                                        fontSize: "10px",
                                                        onclick: { handleAdminSubmit },
                                                    }} variant="contained"> User</Button>
                                                </form>}

                                            </div>
                                            <div> <DotMenuBar id={text}></DotMenuBar></div>
                                        </div>







                                    </TableCell>
                                </Grid>
                            </Grid>





                        </TableRow>
                        {/* ))} */}
                    </TableBody>
                </Table>

            </React.Fragment>
        </div >
    );
};

export default MakeAdmin;