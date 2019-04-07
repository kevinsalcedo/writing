import React from "react";
import { Container, Divider, Header, Form, Input } from "semantic-ui-react";

class Entry extends React.Component {
  state = { numChars: 0 };
  handleInputChange = event => {
    const numChars = event.target.value.length;
    this.setState({ numChars });
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
        <Form>
          <Input
            label={`${150 - this.state.numChars}/150`}
            labelPosition='right'
            onChange={e => this.handleInputChange(e)}
          />
        </Form>
      </Container>
    );
  }
}

export default Entry;
