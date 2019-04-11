import React from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPrompt } from "../actions";
import TitleHeader from "./TitleHeader";
import EntryForm from "./EntryForm";

class Entry extends React.Component {
  onSubmit = formValues => {
    this.props.createPrompt(formValues);
  };
  render() {
    return (
      <Container fluid textAlign='center'>
        <TitleHeader
          title='Submit a prompt'
          subtitle='Enter your own prompt.'
        />
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
