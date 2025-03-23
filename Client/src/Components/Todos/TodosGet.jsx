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
import axios from 'axios'


const TodoGet = ()=>{

    const [users,setUsers] = useState([])

    const getallusers = async (data)=>{
        const all = await axios.get('http://localhost:1100/api/todos') 
        setUsers(all.data)
    }
    useEffect(()=>{
        getallusers()
    },[])
   

      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {/* <TableCell>User name</TableCell> */}
                <TableCell align="center">title</TableCell>
                <TableCell align="center">tags</TableCell>
                <TableCell align="center">complitaed</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item) => (
                <TableRow
                  key={item.todoSchema}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {item.userSchema}
                  </TableCell> */}
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">{item.tags}</TableCell>
                  <TableCell align="center">{item.complitaed}</TableCell>
                  
                  <TableCell align="center">
                  <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <DeleteIcon/>}>
                    <DeleteIcon />
                  </IconButton></TableCell>
                  <TableCell align="center">
                  <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <UpdateIcon/>}>
                    <UpdateIcon />
                  </IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

export default TodoGet