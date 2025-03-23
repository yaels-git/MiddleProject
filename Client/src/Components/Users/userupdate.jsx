import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios'

const userupdate (props)=>{
  const [open, setOpen] = React.useState(false);

 
  
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
            paper: {
              component: 'form',
              onSubmit: async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries(formData.entries());
                const user={
                    name:  formJson.name,
                    username:formJson.username,
                    email:formJson.email,
                    address:formJson.address,
                    phone :formJson.phone

                }
                console.log(user);
               const data= await axios.put('http://localhost:1100/api/users',user) 
                props.func()
                handleClose();
              },
            },
          }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="name"
              type="string"
              onChange={data.name}
              fullWidth
              variant="standard"
            /><TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="username"
            type="string"
           
            fullWidth
            variant="standard"
          /><TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          onChange={data.email}
          fullWidth
          variant="standard"
        /><TextField
        autoFocus
        required
        margin="dense"
        id="address"
        name="address"
        label=" Address"
        type="string"
        onChange={data.address}
        fullWidth
        variant="standard"
      />
      <TextField
          autoFocus
          required
          margin="dense"
          id="phone"
          name="phone"
          label="phone"
          type="namber"
          fullWidth
          variant="standard"
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button type="submit">Subscribe</Button>
            
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default userupdate