import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Link } from 'react-router-dom';
import UploadedVideos from '../UploadedVideo/UploadedVideos';
import {  useSelector } from "react-redux";
import { Button } from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';


function createData(name, calories, fat, carbs, protein, comment, like) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    comment,
    like
  };
}

const rows = [


  createData(67),
  createData(456),
  createData(456),
  createData(456),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

let mode;
mode = localStorage.getItem("theme")
const text= mode === "light" ? "black" : "darkLight" ;
const card= mode === "light" ? "moreLight" : "moreDark";
const bg= mode ==="light" ? "lightest" : "darkish";

/*========= Top list Name =========*/
const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'video',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'visibility',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'restictions',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Views',
  },
  {
    id: 'comment',
    numeric: true,
    disablePadding: false,
    label: 'comment',
  },
  {
    id: 'like',
    numeric: true,
    disablePadding: false,
    label: 'like',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead id={card}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
          id={text}
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
            id={text}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
            // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" id={text}  sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
      id={bg}
    >

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon sx={{color: 'white', mr: 2}}/>
            <Typography>Delete</Typography>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon sx={{color: 'white', mr: 2}} />
            <Typography>Filter</Typography>
          </IconButton>
        </Tooltip>
      )}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Content() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };


  const handleClick = (event, name) => {

    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

const [loading, setLoading] = React.useState([]);
const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    setLoading(true);
    const url = `https://grass-dour-wasp.glitch.me/blogs`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setBlogs(data.blogs);
      });
  }, [blogs]);

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const user = useSelector((state) => state.firebase.user)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    const handleDelete = (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary Blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://grass-dour-wasp.glitch.me/blogs/${id}`)
          .then(res => {
              if (res.data.deletedCount) {
                    const remaining = blogs.filter(b => b._id !== id)
                    setBlogs(remaining)
                    swal("Poof! Your imaginary Blog has been deleted!", {
                      icon: "success",
                    });
              }
            })
          
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }


  return (
    <Box 
    sx={{ width: '100%', 
    mt: 5 
    }}
    id={bg}
    >
      <Box id={bg}>
        <Box  sx={{mb: 2}} >
          <Link
            style={{
              marginLeft: '20px',
              textDecoration: 'none',
              fontWeight: 500,
            }} to='/video'
            id={text}
          >
            Video
          </Link>
          <Link
            style={{
              marginLeft: '20px',
              textDecoration: 'none',
              fontWeight: 500,
            }} to='/live'

            id={text}
          >Live
          </Link>
        </Box>
      </Box>
      <Paper 
      sx={{ width: '100%', 
      mb: 2
      }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            id={card}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody id={card}>

                    <>
                    {
                      blogs.filter(b => b.bloggerEmail === user.email).map(c => 
                        
                        <TableRow
                      hover
                      role="checkbox"

                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                        />
                      </TableCell>

                      <TableCell
                        component="th"
      
                        scope="row"
                        padding="none"
                        sx={{color: 'white'}}
                      >
                        
                        <Box 
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'spaceBetween', 
                          alignItems: 'center', 
                          padding: '10px'
                          }} id={card}>

                            

                         {/*========== video will be added here  ===========*/}
                          {/* <div style={{ width: '200px' }}>
                          <UploadedVideos></UploadedVideos>
                          </div> */}

                          <video style={{ width: '45%' }} src={c.video} poster={c.thumbnail} controls></video>

                          <Typography id={text}
                          style={{ marginLeft: '20px' 
                          }}>
                            {c.title}</Typography>
                        </Box>


                        {/* {row.name} */}
                      </TableCell>
                      <TableCell 
                      sx={{}} 
                      id={text}
                      align="right"
                      >
                        {c.likes}
                      </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                        {c.views}
                      </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                       {c.uploadTime}
                        </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                        {c.likes}
                        </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                        35
                        </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                        {c.likes}
                      </TableCell>
                      <TableCell 
                      id={text}
                      align="right"
                      >
                        <Button onClick={() => handleDelete(c._id)} variant='contained'>Remove</Button>
                      </TableCell>
                    </TableRow>
                      )
                    }
                    </>


              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination id={bg}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
