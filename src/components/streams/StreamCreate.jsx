import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamCreate extends Component {
  renderTextInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTextInput} />
        <Field name="description" component={this.renderTextInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
