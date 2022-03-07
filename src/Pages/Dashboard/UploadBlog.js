import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import useFirebase from '../../Hooks/useFirebase'
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, Select, Stack, TextField } from '@mui/material';
// const fileInput = React.createRef();



export default function InputAdornments() {

    const [values, setValues] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    //   const [category, setCategory] = React.useState('');
    const [privacy, setPrivacy] = React.useState('Public');
    const [monetize, setMonetize] = React.useState('Unavailable');
    const [video, setVideo] = React.useState(null);
    const [language, setLanguage] = React.useState('English');
    const [description, setDescription] = React.useState('');
    const [license, setLicense] = React.useState('Standard');
    const [orientation, setOrientation] = React.useState('Landscapes');


    const [allTags, setAllTags] = React.useState([]);
    const [tags, setTags] = React.useState(allTags);

    const { user } = useFirebase()

    console.log(user, time, date);

    console.log('alltags', allTags);
    console.log('tags', tags);


    const {
        action, adventure, puzzle, arcade, war, sports, simulation, strategy, fantasy, scifi, horror, rpg, sandbox, FPS, TPS, Multiplayer } = category;
    // , platformer, survival
    console.log(category);


    // For removing file upload button
    const Input = styled('input')({
        display: 'none',
    });

    console.log(video);

    // dropdown

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));




    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleCheck = (event) => {
        setCategory([
            ...category,
            event.target.name
        ]);
    };


    const onSubmitSignUp = (e) => {
        e.preventDefault()
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
        blogs.append('bloggerName', user?.displayName)
        blogs.append('bloggerEmail', user?.email)
        blogs.append('uploadTime', time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        blogs.append('date', date)

        if (tags.length >= 5 && video) {
            axios.post('https://aqueous-tor-77774.herokuapp.com/blogs', blogs)
                .then(res => {
                    if (res.data.insertedId) {
                        e.target.reset()
                        window.location.reload();
                    }
                })
        }
        else {
            if (!video) {
                alert('please add video')
            }
            else {
                alert('please add more tags')
            }
        }
    };



    React.useEffect(() => {
        fetch('https://aqueous-tor-77774.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setValues(data))

    }, [])

    console.log(values);

    return (


        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

            <Container>









                {/* Upload video */}
                {/* <video controls><source src={}/></video> */}


                <form onSubmit={onSubmitSignUp} >

                    <Stack direction="row" alignItems="center" sx={{ mt: 5, mb: 3 }}>
                        <label htmlFor="contained-button-file">
                            {/* accept="video/*" */}
                            <Input id="contained-button-file" onChange={(e) => setVideo(e.target.files[0])} type="file" />
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>

                    </Stack>


                    {/* Video TItile */}
                    <Box component="div" sx={{ flexGrow: 1, mb: 2 }}>
                        <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Video Title</FormLabel>
                        <Grid container >


                            <Grid item xs={12}>
                                <FormControl fullWidth variant="filled" >

                                    <FilledInput
                                        id="filled-adornment-video"
                                        onChange={e => setTitle(e.target.value)}
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        placeholder='Add here'
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* About  */}
                    <Box component="div" sx={{ flexGrow: 1, mb: 2 }}>
                        <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >About</FormLabel>
                        <Grid container >
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="filled" >

                                    <FilledInput
                                        id="filled-adornment-about" startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        hiddenLabel
                                        multiline
                                        minRows={5}
                                        maxRows={8}
                                        inputProps={{ maxLength: 450, minLength: 200, type: "text" }}
                                        variant="filled"
                                        type="text"
                                        required
                                        onChange={e => setDescription(e.target.value)}
                                        placeholder="Blog Description"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>


                    {/* Dropdown */}

                    <Box component="div" sx={{ flexGrow: 1, mb: 2 }}>

                        <Grid container spacing={2}>
                            <Grid item xs={6} lg={3}>
                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Orientation</FormLabel>
                                <FormControl variant="filled" sx={{ width: 1 }}>

                                    <Select

                                        value={orientation}
                                        onChange={e => setOrientation(e.target.value)}
                                        required
                                    >

                                        <MenuItem value={"Landscapes"}>Landscape</MenuItem>
                                        <MenuItem value={'Portrait'}>Portrait</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} lg={3}>

                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Privacy setting</FormLabel>
                                <FormControl variant="filled" sx={{ width: 1 }}>

                                    <Select
                                        value={privacy}
                                        onChange={e => setPrivacy(e.target.value)}
                                        required
                                    >
                                        <MenuItem value={"Public"}>Public</MenuItem>
                                        <MenuItem value={"Private"}>Private</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Monetize</FormLabel>
                                <FormControl variant="filled" sx={{ width: 1 }}>

                                    <Select
                                        value={monetize}
                                        onChange={e => setMonetize(e.target.value)}
                                        required
                                    >

                                        <MenuItem value={"Unavailable"}>Unavailable</MenuItem>
                                        <MenuItem value={"Available"}>Available</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >License</FormLabel>
                                <FormControl variant="filled" sx={{ width: 1 }}>

                                    <Select
                                        value={license}
                                        onChange={e => setLicense(e.target.value)}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Standard"}>Standard</MenuItem>
                                        <MenuItem value={"Premium"}>Premium</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Box>


                    {/* Tags Section */}

                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={8}>
                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Tags</FormLabel>
                                <FormControl fullWidth variant="filled" >

                                    <Autocomplete
                                        multiple
                                        id="tags-standard"
                                        onChange={(event, newValue) => {
                                            setTags(newValue);
                                        }}
                                        options={allTags}
                                        getOptionLabel={(tag) => tag}
                                        required
                                        renderInput={(params) => (
                                            <TextField
                                                hiddenLabel
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault()
                                                        setAllTags([...tags, e.target.value])
                                                    }
                                                }}
                                                style={{ backgroundColor: "white" }}
                                                {...params}
                                                variant="filled"
                                                placeholder="At Least Add 5 Tags"
                                            />
                                        )}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Language */}
                            <Grid item xs={6} lg={4}>
                                <FormLabel sx={{ fontWeight: 'bold', my: 1 }} component="legend" >Language in Video</FormLabel>
                                <FormControl variant="filled" sx={{ width: 1 }}>

                                    <Select
                                        value={language}
                                        onChange={e => setLanguage(e.target.value)}
                                        required

                                    >

                                        <MenuItem value={"English"}>English</MenuItem>
                                        <MenuItem value={"Bengali"}>Bengali</MenuItem>
                                        <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Box>

                    {/* Category  */}

                    <Box component="div" sx={{ flexGrow: 1, mt: 2 }}>
                        <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Category (please check your category)</FormLabel>
                        <Grid container >


                            <Grid item xs={6} lg={3}>
                                <FormControl component="fieldset" variant="standard">



                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={action} onChange={handleCheck} name="action" />
                                            }
                                            label="Action"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={adventure} onChange={handleCheck} name="adventure" />
                                            }
                                            label="Adventure"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={puzzle} onChange={handleCheck} name="puzzle" />
                                            }
                                            label="Puzzle"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={arcade} onChange={handleCheck} name="arcade" />
                                            }
                                            label="Arcade"
                                        />
                                    </FormGroup>


                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <FormControl

                                >
                                    <FormLabel component="legend"></FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={war} onChange={handleCheck} name="war" />
                                            }
                                            label="War"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={sports} onChange={handleCheck} name="sports" />
                                            }
                                            label="Sports"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={simulation} onChange={handleCheck} name="simulation" />
                                            }
                                            label="Simulation"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={strategy} onChange={handleCheck} name="strategy" />
                                            }
                                            label="Strategy"
                                        />
                                    </FormGroup>

                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <FormControl>
                                    <FormLabel component="legend"></FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={fantasy} onChange={handleCheck} name="fantasy" />
                                            }
                                            label="Fantasy"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={scifi} onChange={handleCheck} name="scifi" />
                                            }
                                            label="Sci-Fi"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={horror} onChange={handleCheck} name="horror" />
                                            }
                                            label="Horror"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={rpg} onChange={handleCheck} name="rpg" />
                                            }
                                            label="RPG"
                                        />
                                    </FormGroup>


                                </FormControl>
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <FormControl>
                                    <FormLabel component="legend"></FormLabel>

                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={sandbox} onChange={handleCheck} name="sandbox" />
                                            }
                                            label="Sandbox"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={FPS} onChange={handleCheck} name="frs" />
                                            }
                                            label="FPS"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={TPS} onChange={handleCheck} name="tps" />
                                            }
                                            label="TPS"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={Multiplayer} onChange={handleCheck} name="multiplayer" />
                                            }
                                            label="Multiplayer"
                                        />

                                    </FormGroup>


                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>



                    <Button variant="contained" type="submit" >
                        Add Blog
                    </Button>
                </form>
            </Container>
        </Box >

    );
}