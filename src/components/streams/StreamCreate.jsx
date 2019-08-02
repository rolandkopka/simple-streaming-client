import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Button, Container } from "@material-ui/core";

export class StreamCreate extends Component {
  renderTextField = ({ input, meta, ...custom }) => {
    console.log(meta);
    return (
      <>
        <TextField
          error={meta.touched && meta.invalid}
          helperText={meta.touched && meta.error}
          {...input}
          {...custom}
        />
      </>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="container">
            <Field
              name="title"
              component={this.renderTextField}
              required
              label="Title"
            />
          </div>
          <div>
            <Field
              name="description"
              component={this.renderTextField}
              required
              multiline
              label="Description"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
