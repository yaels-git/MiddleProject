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
const Todoupdate = (props) => {
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

              const todos = {
                title: formJson.title,
                tags: formJson.tags,
                _id:props.item._id
              }
              console.log(todos);
               await axios.put('http://localhost:1100/api/todos', todos)
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
              id="title"
              name="title"
              label="title"
              type="string"
              fullWidth
              defaultValue={props.item.title}
              variant="standard"
            /><TextField
              autoFocus
              required
              margin="dense"
              id="tags"
              name="tags"
              label="tags"
              type="string"
              defaultValue={props.item.tags}

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
export default Todoupdate