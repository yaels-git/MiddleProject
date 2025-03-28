import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { IconButton } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
const Userupdate = (props) => {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <React.Fragment>

      <IconButton aria-label="delete" color="secondary" size="large"  onClick={()=>handleClickOpen()}>
        <UpdateIcon />
      </IconButton>
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
              console.log(formJson);

              const user = {
                name: formJson.name,
                username: formJson.username,
                email: formJson.email,
                address: formJson.address,
                phone: formJson.phone,
                _id:props.item._id
              }
              console.log(user);
               await axios.put('http://localhost:1100/api/users', user)
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
              fullWidth
              defaultValue={props.item.name}
              variant="standard"
            /><TextField
              autoFocus
              required
              margin="dense"
              id="username"
              name="username"
              label="username"
              type="string"
              defaultValue={props.item.username}

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
              defaultValue={props.item.email}

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
              defaultValue={props.item.address}

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
              defaultValue={props.item.phone}

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
export default Userupdate