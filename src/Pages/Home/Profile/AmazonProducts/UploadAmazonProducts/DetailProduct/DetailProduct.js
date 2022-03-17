import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';


const DetailProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://aqueous-chamber-45567.herokuapp.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);


    console.log(product?.productTitle)



    /* :::::::::::::::::::::::::::::
Send Data to Database
:::::::::::::::::::::::::::::::*/
const user = useSelector((state) => state.firebase.user)

const bloggerName = user.displayName;
const bloggerEmail = user.email;
const time = new Date().toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});


const { register, handleSubmit, reset, trigger } = useForm();

const onSubmit = (data) => {
    console.log("click has been happned");
  axios
    .post("http://localhost:5000/cart", data, ( 
    data.customarName=bloggerName,
    data.customarEmail= bloggerEmail,
    data.addedTime=time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    // data.productImage = product.imageBuffer,
    data.productPrice = product.productPrice,
    data.productdescription = product.description
    ))
    .then((res) => {
      if (res.data.insertedId) {
        console.log("server a gece");
        swal(
          "Good job!",
          "Added to the cart",
          "success"
        );
        
      }
    });
};
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1, paddingLeft: "72px", mt: 4 }}>
            <Grid sx={{display: "flex"}} item xs={12}>
            <CardMedia sx={{width: "50%"}}
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={`data:image/jpeg;base64,${product?.imageBuffer}`}
                    />
                <Card sx={{ maxWidth: "80%"}}>   
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <Grid sx={{m: 5}}>
                       <Typography variant="body2" color="text.secondary">
                        {product?.description}
                        </Typography>
                       <Typography gutterBottom variant="h5" component="div">
                        {product?.productTitle}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        ${product?.productPrice}
                        </Typography>
                        
                        <Button sx={{backgroundColor: "blue"}} variant="container" type="submit" size="small">add to cart</Button>
                       </Grid>
                    </form>                  
                </Card>
            </Grid>
            
        </Grid>
    );
};

export default DetailProduct;


{/* <Route exact path='/profile/detail/:productId' element={<DetailProduct />} /> */}

{/* <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} /> */}