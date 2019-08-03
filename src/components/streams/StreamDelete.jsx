import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Button } from "@material-ui/core";

const StreamDelete = () => {
  const actions = (
    <>
      <Button color="secondary">NOPE!</Button>
      <Button color="primary">Yes</Button>
    </>
  );

  return (
    <>
      <div>StreamDelete</div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onClose={() => history.push("/")}
      />
    </>
  );
};

export default StreamDelete;
