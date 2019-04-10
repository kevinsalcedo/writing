import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class EntryForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  renderInput = ({ input, label }) => {
    console.log(input);
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Enter title' />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "entryForm"
})(EntryForm);
