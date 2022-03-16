import { Grid, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';






const UploadeAmazonProducts = () => {


    const [image, setImage] = useState()
    const [productTitle, setProductTitle] = useState();
    const [productPrice, setProductPrice] = useState();
    const [description, setDescription] = useState();



    const handleAddedProduct = e => {
        e.preventDefault();
            console.log(image)
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('productTitle', productTitle);
        formData.append('productPrice', productPrice);
        formData.append('description', description);
        formData.append('image', image);

        fetch('https://aqueous-chamber-45567.herokuapp.com/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log("successfully")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (
        <Grid>
            <Grid sx={{ width: "60%", margin: "auto", bgcolor: 'lightBlue', borderRadius: "10px",}}>
                
                <Grid sx={{m: 5}}>
                <Typography sx={{textAlign: 'center', mt: 5}}>
                    Upload Product
                </Typography>
                    <form onSubmit={handleAddedProduct}>
                    <IconButton
                    
                            color="primary"
                            aria-label="upload picture"
                            component="span">
                            <PhotoCamera />
                        </IconButton>
                        <Input 
                        sx={{mt: 2}}
                        accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                        

                        <TextField
                            sx={{ width: "100%", mt: 2 }}
                            label="Product-Title"
                            type="text"
                            onChange={e => setProductTitle(e.target.value)}
                            variant="outlined"
                            required

                        />
                        <TextField
                            sx={{ width: "100%", mt: 2 }}
                            label="Product-Price"
                            type="number"
                            onChange={e => setProductPrice(e.target.value)}
                            variant="outlined"
                            required

                        />
                        <TextField
                            sx={{ width: "100%", mt: 2 }}
                            label="Description"
                            type="text"
                            onChange={e => setDescription(e.target.value)}
                            variant="outlined"
                            required
                            rows={4}

                        />
                        <Button
                            sx={{ width: "100%", my: 2 }}
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



{/* <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} /> */}