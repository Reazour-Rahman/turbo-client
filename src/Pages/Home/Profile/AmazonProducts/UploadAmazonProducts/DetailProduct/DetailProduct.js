import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddCart from '../AddCart/AddCart';


const DetailProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    console.log(product?.productTitle)
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1, paddingLeft: "72px", mt: 4 }}>
            <Grid item xs={8}>
                <Card sx={{ maxWidth: "80%" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={`data:image/jpeg;base64,${product?.imageBuffer}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {product?.productTitle}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        {product?.productPrice}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {product?.description}
                        </Typography>
                        <Button size="small">add to cart</Button>
                    </CardContent>
                    
                </Card>
            </Grid>
            <Grid item xs={4}>
                <AddCart></AddCart>
            </Grid>
        </Grid>
    );
};

export default DetailProduct;


{/* <Route exact path='/profile/detail/:productId' element={<DetailProduct />} /> */}

{/* <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} /> */}