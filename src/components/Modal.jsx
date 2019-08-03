import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const Modal = () => {
  return (
    <Dialog open>
      <DialogContent>
        <DialogContentText>Delete?????? SURE??????</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">NOPE!</Button>
        <Button color="primary" autoFocus>
          DIE STREAM!!!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
