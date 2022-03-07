import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const AddBlog = () => {
   
    
      const [title, setTitle] = React.useState('');
      const [category, setCategory] = React.useState('');
      const [privacy, setPrivacy] = React.useState('');
      const [monetize, setMonetize] = React.useState('');
      const [video, setVideo] = React.useState(null);
      const [language, setLanguage] = React.useState('');
      const [description , setDiscription] = React.useState('');
      const [license , setLicense] = React.useState('');

      const ourTags = [
        'Fight',
        'Action',
        'Sports'
      ]

      const [allTags, setAllTags] = React.useState(ourTags);
      const [tags, setTags] = React.useState([allTags]);

      console.log(allTags);

    




      const onSubmitSignUp = (e) => {
        // const blogs = {title, category,privacy,monetize, language, description, license, tags, 'comments' : [], 'status' : 'Pending' , video}
        const comment = []
        const blogs = new FormData()
        blogs.append('title', title)
        blogs.append('category', category)
        blogs.append('privacy', privacy)
        blogs.append('monetize', monetize)
        blogs.append('language', language)
        blogs.append('description', description)
        blogs.append('license', license)
        blogs.append('status', 'Pending')
        blogs.append('video', video)
        blogs.append('tags', tags)
        console.log(blogs)
        axios.post('https://aqueous-tor-77774.herokuapp.com/blogs', blogs)
        e.preventDefault()
      };
      
      const Input = styled('input')({
        display: 'none',
      });

      console.log(video);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
            <form onSubmit={onSubmitSignUp} >
            {/* <Form.Label>Name</Form.Label> */}
            <h1 style={{color:"white"}}>Add Your Blog</h1>

            <TextField
            style={{ backgroundColor:"white" }}
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              id="standard-basic"
              type="text"
              placeholder="Blog Title"
              required
              onChange={e => setTitle(e.target.value)}
            />
            
          
            {/* <TextField
            style={{ backgroundColor:"white" }}
              sx={{ width: "100%", my: 1 }}
              hiddenLabel             
                multiline
                minRows={5}
                maxRows={8}
                inputProps={{ maxLength: 450, minLength:200, type: "text" }}
              variant="filled"
              type="text"
              required
              placeholder="Blog Description"
              
            /> */}
           
           <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
                displayEmpty
                required
                style={{ backgroundColor:"white" }}
                sx={{ width: "100%", my: 1 }}
            >
              <MenuItem value="" disabled>
                Select Category
              </MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
                <MenuItem value={'Sports'}>Sports</MenuItem>
                
            </Select>
            </FormControl>

           <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                value={license}
                onChange={e => setLicense(e.target.value)}
                displayEmpty
                required
                style={{ backgroundColor:"white" }}
                sx={{ width: "100%", my: 1 }}
            >
              <MenuItem value="" disabled>
                Select License
              </MenuItem>
                <MenuItem value={'Standard'}>Standard</MenuItem>
                <MenuItem value={'Premium'}>Premium</MenuItem>
                
            </Select>
            </FormControl>

           <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                onChange={e => setMonetize(e.target.value)}
                value={monetize}
                displayEmpty
                required
                style={{ backgroundColor:"white" }}
                sx={{ width: "100%", my: 1 }}
            >
              <MenuItem value="" disabled>
                Select Monetize
              </MenuItem>
                <MenuItem value={'Available'}>Available</MenuItem>
                <MenuItem value={'Unavailable'}>Unavailable</MenuItem>
            </Select>
            </FormControl>

           <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                onChange={e => setLanguage(e.target.value)}
                value={language}
                displayEmpty
                required
                style={{ backgroundColor:"white" }}
                sx={{ width: "100%", my: 1 }}
            >
              <MenuItem value="" disabled>
                Select Language
              </MenuItem>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Bengali'}>Bengali</MenuItem>
            </Select>
            </FormControl>

           <FormControl fullWidth>
            <Select
                id="demo-simple-select"
                value={privacy}
                onChange={e => setPrivacy(e.target.value)}
                displayEmpty
                required
                style={{ backgroundColor:"white" }}
                sx={{ width: "100%", my: 1 }}

            >
              <MenuItem value="" disabled>
                Select Privacy
              </MenuItem>
                <MenuItem value={'Public'}>Public</MenuItem>
                <MenuItem value={'Private'}>Private</MenuItem>
            </Select>
            </FormControl>
            {/* <Form.Label className="mt-3">Email Address</Form.Label> */}
            {/* <TextField
            style={{ backgroundColor:"white" }}
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            /> */}
  
              <Autocomplete
                  multiple
                  id="tags-standard"
                  onChange={(event, newValue) => {
                    setTags(newValue);
                  }}
                  options={allTags}
                  getOptionLabel={(tag) => tag}
                  
                  renderInput={(params) => (
                    <TextField
                    hiddenLabel
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') { 
                        setAllTags([...tags, e.target.value])
                      }
                    }}
                    style={{ backgroundColor:"white" }}
                      {...params}
                      variant="filled"
                      placeholder="Favorites"
                    />
                  )}
                />
           
            
          <label htmlFor="contained-button-file">
            <Input 
             id="contained-button-file" onChange={(e) => setVideo(e.target.files[0])} 
              type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
            

            {/* <p className="error">{errorMessage}</p> */}
            <Button type="submit"  variant="contained">
              Add Blog
            </Button>
          </form>
                </Grid>
                <Grid item xs={6}>
    
                </Grid>
            </Grid>

        </div>
    );
};

export default AddBlog;