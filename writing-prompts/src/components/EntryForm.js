import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class EntryForm extends React.Component {
  renderInput = ({ input, label }) => {
    const className = "field";
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        className='ui form'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInput} label='Type here.' />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  return {};
};

export default reduxForm({
  form: "entryForm",
  validate
})(EntryForm);
