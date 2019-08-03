import React from "react";
import history from "../history";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

const Modal = () => {
  return (
    <Dialog open onClose={() => history.push("/")}>
      <DialogTitle>{"Delete Stream"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this stream?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary">NOPE!</Button>
        <Button color="primary">Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
