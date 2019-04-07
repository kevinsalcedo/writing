import React from "react";
import {
  Container,
  Button,
  Transition,
  Header,
  Divider
} from "semantic-ui-react";

class PresentPrompt extends React.Component {
  state = { visible: false };

  changeText = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { visible } = this.state;
    return (
      <Container fluid textAlign='center'>
        <Divider horizontal>
          <Header size='huge' textAlign='center'>
            Today's Prompt
          </Header>
        </Divider>
        <Header.Subheader>
          A reflective prompt randomizer to help guide your writing.
        </Header.Subheader>
        <Divider hidden />
        <Transition visible={visible} animation='fade' duration={750} centered>
          <Header size='large' textAlign='center'>
            The Prompt
          </Header>
        </Transition>
        <Button onClick={() => this.changeText()}>Show</Button>
      </Container>
    );
  }
}

export default PresentPrompt;
