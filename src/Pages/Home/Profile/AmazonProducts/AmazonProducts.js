import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { green } from "@mui/material/colors";

const AmazonProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-chamber-45567.herokuapp.com/products`)
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

                {/* ==========Product map=========== */}
                
                {products?.map(({ _id, imageBuffer, productTitle, productPrice, description }) => (
                    <Grid item xs={2} sm={4} md={2} key={_id}>
                        <Card
                            sx={{
                               
                                maxWidth: 345,
                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                olor: 'rgba(255, 255, 255, 0.809)',
                            }}>
                            <img
                                style={{
                                    height: "170px",
                                    width: "100%"
                                }}
                                src={`data:image/jpeg;base64,${imageBuffer}`} alt="" />

                            <CardContent>
                                <Link to={`/profile/detail/${_id}`}>
                                    <CardActions>
                                        <Button 
                                        sx={{
                                        borderRadius:"15px", 
                                        height: "18px", 
                                        width: "75px", 
                                        fontSize: "12px",
                                        color: 'rgba(255, 255, 255, 0.809)',
                                        backgroundColor: green[900]
                                        }} 
                                        size="small"
                                        >
                                            Detail
                                        </Button>
                                    </CardActions>
                                </Link>
                                <Typography
                                    sx={{
                                        pl: 1,
                                        fontSize: "16px",
                                        fontWeight: 550,
                                        color: 'rgba(255, 255, 255, 0.809)', marginBottom: '5px'
                                    }}
                                    component="div"
                                >
                                    {productTitle}
                                </Typography>
                                <Typography
                                    sx={{
                                        pl: 1,
                                        fontWeight: 400,
                                        color: 'rgba(255, 255, 255, 0.809)', marginBottom: '5px'
                                    }}
                                    component="div"
                                >
                                    <small>{description.slice(0, 55)}</small>
                                </Typography>

                                <Typography variant="body2" color="text.secondary"
                                    sx={{
                                        pl: 1,
                                        m1: 1,
                                        fontSize: '16px',
                                        fontWeight: 550,
                                        color: 'rgba(255, 255, 255, 0.809)'
                                    }}>
                                    ${productPrice}
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AmazonProducts;