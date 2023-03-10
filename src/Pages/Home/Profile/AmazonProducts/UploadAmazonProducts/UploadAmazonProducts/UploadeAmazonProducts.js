import { Grid, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useSelector } from 'react-redux';
import swal from "sweetalert";

const UploadeAmazonProducts = () => {

    const user = useSelector((state) => state.firebase.user);
    const [image, setImage] = useState()
    const [productTitle, setProductTitle] = useState();
    const [productPrice, setProductPrice] = useState();
    const [description, setDescription] = useState();
    const [email, setEmail] = useState(user.email);

    const handleAddedProduct = e => {
        e.preventDefault();
        console.log(image)
        console.log(email);
        if (!image) {
            return;
        }

        /* =============Send data to bakend============ */
        const formData = new FormData();
        formData.append('email', email);
        formData.append('productTitle', productTitle);
        formData.append('productPrice', productPrice);
        formData.append('description', description);
        formData.append('image', image);

        fetch('https://grass-dour-wasp.glitch.me/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("successfully")
                    swal(
                        "Good job!",
                        "Added to the cart",
                        "success"
                    );
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    /* ==============Background Image style============ */

    const styles = {
        paperContainer: {
            height: "100%",
            backgroundImage: `url(https://png.pngtree.com/background/20210710/original/pngtree-game-volcano-advertising-background-picture-image_979719.jpg)`
        }
    };


    return (
        <Grid style={styles.paperContainer}>
            <Grid
                sx={{
                    justifyContent: 'center',
                    width: "70%",
                    
                    margin: "auto",
                    bgcolor: 'rgba(113, 172, 140, 0.672)',
                    borderRadius: "10px",
                    pt: 1
                }}>

                <Grid sx={{ m: 5 }}>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: 20,
                            color: "rgba(13, 14, 13, 0.844)"
                        }}>
                        Upload Product
                    </Typography>
                    <form onSubmit={handleAddedProduct}>
                        <IconButton
                            sx={{
                                color: "rgba(0, 0, 0, 0.727)"
                            }}
                            aria-label="upload picture"
                            component="span">
                            <PhotoCamera />
                        </IconButton>
                        <Input
                            sx={{ mt: 5 }}
                            accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])}
                        />


                        <TextField
                            sx={{ width: "100%", mt: 3 }}
                            disabled
                            label="Email"
                            type="text"
                           value={user?.email}
                            onChange={e => setEmail(e.target.value)}
                            variant="outlined"
                            required

                        />
                        <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Product-Title"
                            type="text"
                            onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                        <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Product-Price"
                            type="number"
                            onChange={e => setProductPrice(e.target.value)}
                            variant="outlined"
                            required

                        />
                        <TextField
                            sx={{ width: "100%", mt: 3 }}
                            label="Description"
                            type="text"
                            onChange={e => setDescription(e.target.value)}
                            variant="outlined"
                            required
                            rows={4}

                        />
                        <Button
                            sx={{ width: "100%", mt: 3, mb: 3, backgroundColor: "rgba(45, 48, 45, 0.85)" }}
                            type="submit"
                            variant="contained"
                        >
                            Upload
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UploadeAmazonProducts;



{/* <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} /> */ }