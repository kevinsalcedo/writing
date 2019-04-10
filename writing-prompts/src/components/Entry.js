import React from "react";
import { Container, Divider, Header, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPrompt } from "../actions";
import EntryForm from "./EntryForm";

class Entry extends React.Component {
  state = { numChars: 0 };
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createPrompt(formValues);
  };

  render() {
    return (
      <Container fluid textAlign='center'>
        <Divider horizontal>
          <Header size='huge' textAlign='center'>
            Submit a Prompt
          </Header>
        </Divider>
        <Header.Subheader>Enter your own prompt.</Header.Subheader>
        <Divider hidden />
        <Container>
          <EntryForm onSubmit={this.onSubmit} />
        </Container>
      </Container>
    );
  }
}

export default connect(
  null,
  { createPrompt }
)(Entry);
