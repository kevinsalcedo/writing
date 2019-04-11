import React from "react";
import {
  Container,
  Button,
  Transition,
  Header,
  Loader
} from "semantic-ui-react";
import TitleHeader from "./TitleHeader";
import { connect } from "react-redux";
import { fetchPrompts } from "../actions";

class PresentPrompt extends React.Component {
  state = { visible: false };

  componentDidMount() {
    this.props.fetchPrompts();
  }

  showText = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { visible } = this.state;
    return (
      <Container fluid textAlign='center'>
        <TitleHeader
          title="Today's Prompt"
          subtitle='A reflective prompt randomizer to help guide your writing.'
        />
        <Transition
          visible={visible}
          animation='fade'
          duration={750}
          centered
          unmountOnHide={false}
        >
          {this.props.prompt ? (
            <Header size='large' textAlign='center'>
              {this.props.prompt.title}
            </Header>
          ) : (
            <Loader />
          )}
        </Transition>
        <Button onClick={() => this.showText()}>Show</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const prompts = Object.values(state.prompts);
  const randomID = Math.floor(Math.random() * prompts.length);
  console.log(randomID);
  return {
    prompt: prompts[randomID]
  };
};

export default connect(
  mapStateToProps,
  { fetchPrompts }
)(PresentPrompt);
