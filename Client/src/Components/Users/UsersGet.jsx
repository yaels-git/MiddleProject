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
import UpdateIcon from '@mui/icons-material/Update';
import UserAdd from './UsersAdd'
import axios from 'axios'
import Userupdate from "./userupdate";


const AllUsers = ()=>{

    const [users,setUsers] = useState([])

    const getallusers = async (data)=>{
        const all = await axios.get('http://localhost:1100/api/users') 
        console.log();
        setUsers(all.data)
    }
    useEffect(()=>{
        getallusers()
    },[])
   

      return (
        <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {/* <TableCell>User name</TableCell> */}
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
                  key={item.userSchema}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {item.userSchema}
                  </TableCell> */}
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.address}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.phone}</TableCell>
                  <TableCell align="center">
                  <IconButton aria-label="delete" color="secondary" size="large" onClick={async () => { await axios.delete(`http://localhost:1100/api/users/${item._id}`); await getallusers() }}>
                    <DeleteIcon />
                  </IconButton></TableCell>
                  <TableCell align="center">
                  <Userupdate  item={item} func={getallusers}/>
                 </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
     
        <UserAdd func={getallusers}></UserAdd>
        </>
      );
    }

export default AllUsers