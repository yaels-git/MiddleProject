// import { useEffect, useState } from "react"
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import UpdateIcon from '@mui/icons-material/Update';
// import axios from 'axios'


// const TodoGet = ()=>{

//     const [users,setUsers] = useState([])

//     const getallusers = async (data)=>{
//         const all = await axios.get('http://localhost:1100/api/todos') 
//         setUsers(all.data)
//     }
//     useEffect(()=>{
//         getallusers()
//     },[])
   

//       return (
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//             <TableHead>
//               <TableRow>
//                 {/* <TableCell>User name</TableCell> */}
//                 <TableCell align="center">title</TableCell>
//                 <TableCell align="center">tags</TableCell>
//                 <TableCell align="center">complitaed</TableCell>
//                 <TableCell align="center">Delete</TableCell>
//                 <TableCell align="center">Update</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {users.map((item) => (
//                 <TableRow
//                   key={item.todoSchema}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   {/* <TableCell component="th" scope="row">
//                     {item.userSchema}
//                   </TableCell> */}
//                   <TableCell align="center">{item.title}</TableCell>
//                   <TableCell align="center">{item.tags}</TableCell>
//                   <TableCell align="center">{item.complitaed}</TableCell>
                  
//                   <TableCell align="center">
//                   <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <DeleteIcon/>}>
//                     <DeleteIcon />
//                   </IconButton></TableCell>
//                   <TableCell align="center">
//                   <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <UpdateIcon/>}>
//                     <UpdateIcon />
//                   </IconButton></TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       );
//     }

// export default TodoGet






import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import  { useState,useEffect } from 'react';
import Todosupdate from './TodosUpdate';
import TodosAdd from './TodosAdd'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/joy/Grid';



// export default function ImgMediaCard() {
  const TodosGet=()=>{

        const [todos,setTodos] = useState([])

            const getalltodo = async (data)=>{
                const all = await axios.get('http://localhost:1100/api/todos') 
                setTodos(all.data)
            }
            useEffect(()=>{
              getalltodo()
            },[])
           
       
  return (<>
  <TodosAdd func={getalltodo}></TodosAdd>
  {/* <Grid sx={{ flexGrow: 1 }} >
      <Grid size={12}>
        <Grid container spacing={spacing} sx={{ justifyContent: 'center' }}> */}
    {todos.map((item) => {
     
    
   return <div  style={{display: "inlineGrid" ,
    textAlign:"center",

   gridGap: '10px',
   padding: "10px"}}  > <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.tags}
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button size="small" onClick={async () => { await axios.delete(`http://localhost:1100/api/posts/${item._id}`); await getallpost() }}>delete </Button> */}
      <IconButton size="small" onClick={async () => { await axios.delete(`http://localhost:1100/api/todos/${item._id}`); await getalltodo() }}>
                    <DeleteIcon />
                  </IconButton>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Todosupdate item={item}func={getalltodo}></Todosupdate>
      <Button variant="contained">Contained</Button>
      {/* <Conplit> </Conplit> */}
      </CardActions>
    </Card>
    <br></br>
    
    </div>

    
  })}
  {/* </Grid></Grid>
</Grid>    */}

 </>
  );
}
export default TodosGet