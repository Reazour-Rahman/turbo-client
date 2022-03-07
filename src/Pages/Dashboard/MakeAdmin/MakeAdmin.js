import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Grid } from '@mui/material';
import { BugReportTwoTone } from '@mui/icons-material';



// Generate Order Data
function createData(id, date, title, category, views, amount) {
    return { id, date, title, category, views, amount };
}






function preventDefault(event) {
    event.preventDefault();
}


const MakeAdmin = (props) => {
    const { _id, bloggerName, index, status, bloggerEmail, pending, approved } =
        props.blogger;
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleAdminSubmit = e => {
        const user = { email };
        fetch("http://localhost:5000/admin", {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
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
                                <Grid item xs={2}>
                                    <TableCell>{index}</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell>{bloggerName}</TableCell>
                                </Grid>
                                <Grid item xs={3}>
                                    <TableCell>{bloggerEmail}</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell>{status}</TableCell>
                                </Grid>
                                <Grid item xs={2}>
                                    <TableCell>





                                        {status == "pending" ? <Button style={{
                                            borderRadius: 35,
                                            backgroundColor: "red",
                                            padding: "4px 16px",
                                            fontSize: "10px",
                                            // onclick: { handleAdminSubmit },
                                            status: 'approved'
                                        }} variant="contained">Make Admin</Button> :

                                            <Button style={{
                                                borderRadius: 35,
                                                backgroundColor: "#21b6ae",
                                                padding: "4px 16px",
                                                fontSize: "10px",
                                                status: 'pending',
                                                // onclick: { handleAdminSubmit },
                                            }} variant="contained">Admin</Button>}




                                    </TableCell>
                                </Grid>
                            </Grid>





                        </TableRow>
                        {/* ))} */}
                    </TableBody>
                </Table>

            </React.Fragment>
        </div>
    );
};

export default MakeAdmin;