import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
const PostGet=()=>{
const [users,setUsers] = useState([])

    const getallusers = async (data)=>{
        const all = await axios.get('http://localhost:1100/api/posts') 
        console.log(all.data);
        setUsers(all)
    }
    useEffect(()=>{
        getallusers()
    },[])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>User name</TableCell>
          <TableCell align="center">title</TableCell>
          <TableCell align="center">body</TableCell>
      
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((item) => (
          <TableRow
            key={item.username}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.username}
            </TableCell>
            <TableCell align="right">{item.title}</TableCell>
            <TableCell align="right">{item.body}</TableCell>
           
            <TableCell align="right">
            <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <DeleteUser/>}>
              <DeleteIcon />
            </IconButton></TableCell>
            <TableCell align="right">
            <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <UpdateUser/>}>
              <DeleteIcon />
            </IconButton></TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default PostGet
