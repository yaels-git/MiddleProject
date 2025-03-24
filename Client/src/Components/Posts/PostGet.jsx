// import React, { useState,useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import UpdateIcon from '@mui/icons-material/Update';
// const PostGet=()=>{
// const [users,setUsers] = useState([])

//     const getallusers = async (data)=>{
//         const all = await axios.get('http://localhost:1100/api/posts') 
//         console.log(all.data);
//         setUsers(all.data)
//     }
//     useEffect(()=>{
//         getallusers()
//     },[])

 

//   return (
//     <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//       <TableHead>
//         <TableRow>
//           {/* <TableCell>User name</TableCell> */}
//           <TableCell align="center">title</TableCell>
//           <TableCell align="center">body</TableCell>
//           <TableCell align="center">Delete</TableCell>
//           <TableCell align="center">Update</TableCell>
      
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {users.map((item) => (
//           <TableRow
//             key={item.username}
//             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//             {/* <TableCell component="th" scope="row">
//               {item.username}
//             </TableCell> */}
//             <TableCell align="center">{item.title}</TableCell>
//             <TableCell align="center">{item.body}</TableCell>
           
//             <TableCell align="center">
//             <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <DeleteIcon/>}>
//               <DeleteIcon />
//             </IconButton></TableCell>
//             <TableCell align="center">
//             <IconButton aria-label="delete" color="secondary" size="large" onClick={() => <UpdateIcon/>}>
//               <UpdateIcon />
//             </IconButton></TableCell>
//           </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// export default PostGet







import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import  { useState,useEffect } from 'react';
import Postupdate from './postUpdate';
import PostAdd from './postAdd'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


//import Posts from '../../../src/Components/Posts';

// export default function ImgMediaCard() {
  const PostGet=()=>{
    const [posts,setPosts] = useState([])
  const getallpost = async (data)=>{
            const all = await axios.get('http://localhost:1100/api/posts') 
            console.log(all.data);
            setPosts(all.data)
        }
        useEffect(()=>{
            getallpost()
        },[])
    
       
  return (<>
  <PostAdd func={getallpost}></PostAdd>
    {posts.map((item) => {
     
    
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
          {item.body}
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button size="small" onClick={async () => { await axios.delete(`http://localhost:1100/api/posts/${item._id}`); await getallpost() }}>delete </Button> */}
      <IconButton size="small" onClick={async () => { await axios.delete(`http://localhost:1100/api/posts/${item._id}`); await getallpost() }}>
                    <DeleteIcon />
                  </IconButton>
      {/* <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Postupdate item={item}func={getallpost}></Postupdate>
      </CardActions>
    </Card>
    <br></br>
    
    </div>

    
  })}
    </>
  );
}
export default PostGet