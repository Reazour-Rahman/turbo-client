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
    return (
        <React.Fragment>
            <Title id={ theme === "light" ? "black" : "darkLight" }>Total views</Title>
            <Typography component="p" variant="h4" id={ theme === "light" ? "black" : "darkLight" }>
                5600
            </Typography>
            <Typography id={ theme === "light" ? "black" : "darkLight" } sx={{ flex: 1 }}>
                till 09 February,2022
            </Typography>
            <div>
                <Link id={ theme === "light" ? "black" : "darkLight" } href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}

