import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function TotalViews() {
    return (
        <React.Fragment>
            <Title>Total views</Title>
            <Typography component="p" variant="h4">
                5600
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                till 09 February,2022
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}

