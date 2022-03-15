import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const AmazonProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data?.products))
    }, [])

    console.log(products)

    return (
        <Box sx={{ flexGrow: 1, paddingLeft: "72px" }} >
            <ProfileHeader />
            <Box sx={{ mb: '20px', mt: '50px' }}>
                <Typography>Use CODE: proPlayer23 for 10% Discount</Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products?.map(({ _id, imageBuffer, productTitle, productPrice }) => (
                    <Grid item xs={2} sm={4} md={2} key={_id}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                olor: 'rgba(255, 255, 255, 0.809)',
                            }}>
                            <img src={`data:image/jpeg;base64,${imageBuffer}`} alt="" />
                            {/* <CardMedia
                                component="img"
                                width="100%"
                                image={`data:image/jpeg;base64,${product.image}`}
                                alt="green iguana"
                            /> */}
                            <CardContent>
                                <Typography
                                    style={{
                                        fontWeight: 500,
                                        color: 'rgba(255, 255, 255, 0.809)', marginBottom: '5px'
                                    }}
                                    component="div"
                                >
                                    {productTitle}
                                </Typography>
                                {/* <Typography 
                                style={{
                                     fontWeight: 400, 
                                     color: 'rgba(255, 255, 255, 0.809)', marginBottom: '5px' 
                                     }} 
                                     component="div"
                                     >
                                    {productTitle}
                                </Typography> */}
                                <Typography variant="body2" color="text.secondary" style={{
                                    fontWeight: 400,
                                    color: 'rgba(255, 255, 255, 0.809)'
                                }}>
                                    ${productPrice}
                                </Typography>


                                <Link to={`/profile/detail/${_id}`}>
                                    <CardActions>
                                        <Button size="small">Detail</Button>
                                        
                                    </CardActions>
                                </Link>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AmazonProducts;