import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import { Typography } from "@material-ui/core";

export class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <Typography variant="h3">Create a Stream</Typography>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
