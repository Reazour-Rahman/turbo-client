import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { green } from "@mui/material/colors";
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

const UserAmazonProducts = ({email}) => {
    const user = useSelector((state) => state.firebase.user);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
console.log(email);
    useEffect(() => {
        fetch(`https://aqueous-chamber-45567.herokuapp.com/products?email=${email.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(true)
                setProducts(data?.products)
            })
    }, [email.email])

    console.log(products)

    let mode = localStorage.getItem("theme");
    const bg = mode === "light" ? "lightest" : "darkish";
    const card = mode === "light" ? "moreLight" : "moreDark";
    const text = mode === "light" ? "black" : "darkLight";
    const hr = mode === "light" ? "hr" : "hrm"

    return (
        <Box sx={{ flexGrow: 1, mb: '20px' }} >
            
            <Box sx={{ mb: '20px' }}>
                
            </Box>
            {!isLoading===true ? 
             
             <Grid style={{ textAlign: 'center', height:"300px" }}>
                 <CircularProgress  id={text}/>
             </Grid>
             : 
             
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* ==========Product map=========== */}
                
                {products?.map(({ _id, imageBuffer, productTitle, productPrice, description }) => (
                    <Grid item xs={2} sm={4} md={2} key={_id}>
                        <Card
                            sx={{
                               
                                maxWidth: 345,
                                
                            }}
                            id={card}
                            >
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
                                        
                                        backgroundColor: green[900]
                                        }} 
                                        id={text}
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
                                         marginBottom: '5px'
                                    }}
                                    component="div"
                                    id={text}
                                >
                                    {productTitle}
                                </Typography>
                                <Typography
                                    sx={{
                                        pl: 1,
                                        fontWeight: 400,
                                         marginBottom: '5px'
                                    }}
                                    component="div"
                                    id={text}
                                >
                                    <small id={text}>{description.slice(0, 55)}</small>
                                </Typography>

                                <Typography variant="body2" color="text.secondary"
                                id={text}
                                    sx={{
                                        pl: 1,
                                        m1: 1,
                                        fontSize: '16px',
                                        fontWeight: 550,
                                        
                                    }}>
                                    ${productPrice}
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>}
        </Box>
    );
};

export default UserAmazonProducts;