import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const AddCart = () => {
    const [cartProducts, setCartProducts] = useState();
    const [addedProduct, setAddedProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])

    console.log(cartProducts)

    const handleAddProduct = (product) =>{
        const newAddedProduct = [...addedProduct, product];
        setAddedProduct(newAddedProduct)
    }

    return (
        <Grid sx={{ display: 'flex', paddingLeft: "72px", mt: 4 }}>
            <Grid xs={8} sx={{m: 5}}>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {cartProducts?.map((product) => (
                            <Grid item xs={12} sm={12} md={12} key={product._id}>
                                <Grid sx={{ display: "flex", justifyContent: 'space-between' }}>
                                    <Checkbox
                                    />
                                    <img style={{ width: "20%" }} src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                    <Grid>
                                        <Typography>{product.productPrice}</Typography>
                                        <Typography>{product.addedTime}</Typography>
                                    </Grid>
                                    <Grid>
                                        <Grid sx={{ display: "flex" }}>
                                            <Button>
                                                <RemoveIcon />
                                            </Button>
                                            <Typography>{addedProduct.length}</Typography>
                                            <Button onClick={handleAddProduct}>
                                                <AddIcon />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={4} sx={{m: 5}}>
                <Typography sx={{fontSize: 20}}>
                    Order summary
                </Typography>
                <Grid sx={{}}>
                    <Grid sx={{ display: "flex", justifyContent: 'space-between', mt: 2 }}>
                        <Typography>Subtotal (0 total)</Typography>
                        <Typography>$ 0</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: 'space-between', mt: 2  }}>
                        <Typography>Total</Typography>
                        <Typography>$ 0</Typography>
                    </Grid>
                    <Button type="submit" sx={{ width: "100%", backgroundColor: 'orange', mt: 2  }}>Proceed to checkout</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddCart;


{/* <Route exact path='/profile/cart' element={<AddCart />} /> */}