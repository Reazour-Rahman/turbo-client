import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function TotalViews() {
    let theme;
    theme= localStorage.getItem("theme")
    const [blogs, setBlogs] = React.useState([])
    const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    const date = current.toLocaleDateString(undefined, options);
    React.useEffect(() => {
        fetch(`https://proplayer-backend.vercel.app/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data.blogs))
    },[])

    var totalViews = blogs.reduce(function(a, b){
        console.log(a + b.views);
        return b.views + a;
    }, 0);

    return (
        <React.Fragment>
            <Title id={ theme === "light" ? "black" : "darkLight" }>Total views</Title>
            <Typography component="p" variant="h4" id={ theme === "light" ? "black" : "darkLight" }>
                {totalViews}
            </Typography>
            <Typography id={ theme === "light" ? "black" : "darkLight" } sx={{ flex: 1 }}>
                {date}
            </Typography>
            <div>
                <Link id={ theme === "light" ? "black" : "darkLight" } href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}

