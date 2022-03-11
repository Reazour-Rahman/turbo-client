import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


// Generate Order Data
function createData(id, date, title, category, views, amount) {
    return { id, date, title, category, views, amount };
}

const rows = [
    createData(
        0,
        '16 Mar, 2019',
        '20 Minutes of IMPOSSIBLE 1v5 Plays',
        'valorant',
        2600
    ),
    createData(
        1,
        '16 Mar, 2019',
        '20 Minutes of IMPOSSIBLE 1v5 Plays',
        'valorant',
        2600
    ),
    createData(
        2,
        '16 Mar, 2019',
        '20 Minutes of IMPOSSIBLE 1v5 Plays',
        'valorant',
        2600),
    createData(
        3,
        '16 Mar, 2019',
        '20 Minutes of IMPOSSIBLE 1v5 Plays',
        'valorant',
        2600
    ),
    createData(
        4,
        '16 Mar, 2019',
        '20 Minutes of IMPOSSIBLE 1v5 Plays',
        'valorant',
        2600
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function BloggerInfo() {
    let theme;
    theme= localStorage.getItem("theme")
    return (
        <React.Fragment>
            <Title id={ theme === "light" ? "black" : "darkLight" }>Your Videos</Title>
            <Table size="small" >
                <TableHead>
                    <TableRow >
                        <TableCell id={ theme === "light" ? "black" : "darkLight" }>Upload Date</TableCell>
                        <TableCell id={ theme === "light" ? "black" : "darkLight" }>Title</TableCell>
                        <TableCell id={ theme === "light" ? "black" : "darkLight" }>Category</TableCell>
                        <TableCell id={ theme === "light" ? "black" : "darkLight" }>Views</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell id={ theme === "light" ? "black" : "darkLight" }>{row.date}</TableCell>
                            <TableCell id={ theme === "light" ? "black" : "darkLight" }>{row.title}</TableCell>
                            <TableCell id={ theme === "light" ? "black" : "darkLight" }>{row.category}</TableCell>
                            <TableCell id={ theme === "light" ? "black" : "darkLight" }>{row.views}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link id={ theme === "light" ? "black" : "darkLight" } href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more Info
            </Link>
        </React.Fragment>
    );
}