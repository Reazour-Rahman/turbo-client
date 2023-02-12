import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { green } from "@mui/material/colors";


import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import BookingProduct from '../../BookingProduct/BookingProduct';
import CircularProgress from '@mui/material/CircularProgress';


const DetailProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false)

  // Open booking modal 

  const [open, setOpen] = React.useState(false);

  const handleClickOpenBookinModal = () => {
    setOpen(true);
  };
  const handleCloseBookinModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`https://proplayer-backend.vercel.app/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true)
        setProduct(data)
      });
  }, []);


  console.log(product?.productTitle)





  /* :::::::::::::::::::::::::::::
Send Data to Database
:::::::::::::::::::::::::::::::*/
  const user = useSelector((state) => state.firebase.user)
  console.log(user)

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
      .post("https://proplayer-backend.vercel.app/cart", data, (
        data.customarName = bloggerName,
        data.customarEmail = bloggerEmail,
        data.addedTime = time.toLocaleString("en-US", {
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

  let mode = localStorage.getItem("theme");
  const bg = mode === "light" ? "lightest" : "darkish";
  const card = mode === "light" ? "moreLight" : "moreDark";
  const text = mode === "light" ? "black" : "darkLight";
  const hr = mode === "light" ? "hr" : "hrm"

  return (
    <>
    {!isLoading===true ? 
             
             <Grid style={{ textAlign: 'center'}}>
                 <CircularProgress color="success" />
             </Grid>
             : 
      <Grid container spacing={2} sx={{ flexGrow: 1, paddingLeft: "20px", mt: 5, }}>
        <Grid sx={{ display: "flex", justifyContent: 'space-between', mt: 2, height: "782px" }} item xs={12}>

          {/* =========Image side========= */}

          <Grid xs={12} sm={4} md={4}>
            <CardMedia
              sx={{ m: 5 }}
              component="img"
              alt="green iguana"
              height="150"
              image={`data:image/jpeg;base64,${product?.imageBuffer}`}
            />
          </Grid>

          {/* ===========Detail side=========== */}

          <Grid xs={12} sm={4} md={4} sx={{ m: 3, }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid sx={{ ml: 5, color: 'white' }}>
                <Typography sx={{ my: 2, }} 
                id={text}
                gutterBottom variant="h5" component="div">
                  {product?.productTitle}
                </Typography>
                <Typography 
                sx={{ 
                  my: 2, 
                  fontSize: 17
                  }}
                  id={text}
                  >
                  {product?.description}
                </Typography>
                <Typography 
                sx={{
                  my: 2 
                }} 
                id={text}
                gutterBottom variant="h5" 
                component="div"
                >
                  ${product?.productPrice}
                </Typography>

                <Grid>
                  <Button sx={{ mr: 5, backgroundColor: green[900] }} variant="container" type="submit" size="small">add to cart</Button>
                  <Button sx={{ backgroundColor: green[900] }}
                    onClick={handleClickOpenBookinModal}
                    variant="container" size="small">Buy now</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          {/*  ==============Extention=========== */}

          <Grid xs={12} sm={4} md={4}>
            <Grid sx={{ m: 5 }}>
              <Grid 
              sx={{ 
                display: "flex", 
                justifyContent: 'space-between' 
                }}>
                <Typography id={text}>Delivery</Typography>
                <ErrorOutlineIcon id={text} sx={{ color: "white" }} />
              </Grid>

              <Grid 
              sx={{ 
                display: "flex", 
                mt: 5 
                }}>
                <LocationOnIcon id={text} sx={{ color: "white", mr: 3 }} />
                <Typography id={text}>Dhaka, Dhaka North, Banani Road No. 12 - 19</Typography>
              </Grid>
             
              <Grid 
              sx={{ 
                display: "flex", 
                mt: 5 
                }}>
                <CardTravelIcon id={text} sx={{ color: "white", mr: 3 }} />
                <Typography id={text}>Ships from Overseas</Typography>
              </Grid>
              
              <Grid 
              sx={{ 
                display: "flex", 
                mt: 5 
                }}>
                <CurrencyExchangeIcon id={text} sx={{ color: "white", mr: 3 }} />
                <Typography id={text}>Cash on Delivery Available</Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </Grid>}
      <BookingProduct
        time={time}
        open={open}
        handleCloseBookinModal={handleCloseBookinModal}
        product={product} />
    </>
  );
};

export default DetailProduct;


{/* <Route exact path='/profile/detail/:productId' element={<DetailProduct />} /> */ }

{/* <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} /> */ }