import React from "react";
import { Form, Button, Container, Input } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class EntryForm extends React.Component {
  state = { numChars: 150 };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderInput = ({ input, label }) => {
    return (
      <Container className='field'>
        <label>{label}</label>
        <Input {...input} autoComplete='off' />
      </Container>
    );
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ numChars: 150 - value.length });
  };
  render() {
    const { numChars } = this.state;
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        onChange={event => this.handleChange(event)}
      >
        <Field
          name='title'
          component={this.renderInput}
          label={`${numChars}/150 characters remaining`}
        />
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: "entryForm"
})(EntryForm);
