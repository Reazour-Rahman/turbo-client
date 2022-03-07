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
    return (
        <React.Fragment>
            <Title>Your Videos</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Upload Date</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Views</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.views}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more Info
            </Link>
        </React.Fragment>
    );
}