import { useEffect, useState } from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from 'path/to/IconButton';
import DeleteUser from 'path/to/DeleteUser';
import UpdateUser from 'path/to/UpdateUser';
import DeleteIcon from 'path/to/DeleteIcon';

const AllUsers = ()=>{

    const [users,setUsers] = useState([])

    const getallusers = async (data)=>{
        const all = await axios.get('http://localhost:1100/api/users/') 
        setUsers(all)
    }
    useEffect(()=>{
        getallusers()
    },[])
   

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>User name</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Update</TableCell>
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
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.address}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
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

export default AllUsers