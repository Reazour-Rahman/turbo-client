import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AllBookingProducts = () => {

    const [bookingProducts, setBookingProducts] = useState();

    useEffect(() => {
        fetch('https://proplayer-backend.vercel.app/bookingProducts')
            .then(res => res.json())
            .then(data => setBookingProducts(data))
    }, [])

    console.log(bookingProducts)

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1, paddingLeft: "50px", mt: 4 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customar Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Ordered date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingProducts?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.clientName}
                                </TableCell>
                                <TableCell align="right">{row.clientEmail}</TableCell>
                                <TableCell align="right">{row.clientPhoen}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default AllBookingProducts;


{/* <Route exact path='/profile/booking-products' element={<AllBookingProducts />} /> */ }