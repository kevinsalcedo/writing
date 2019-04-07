import React from "react";
import { connect } from "react-redux";
import { Container, Divider, Header, Item } from "semantic-ui-react";
import { fetchPrompts } from "../actions";

class ViewAllPrompts extends React.Component {
  componentDidMount() {
    this.props.fetchPrompts();
  }

  renderList() {
    if (this.props.prompts.length === 0) {
      return (
        <Container>
          <Header size='large'>Nothing here!</Header>
        </Container>
      );
    }
    return this.props.prompts.map(prompt => {
      return (
        <Item key={prompt.id}>
          <Header size='large'>{prompt.title}</Header>
        </Item>
      );
    });
  }

  render() {
    return (
      <Container fluid textAlign='center'>
        <Divider horizontal>
          <Header size='huge' textAlign='center'>
            All Prompts
          </Header>
        </Divider>
        <Header.Subheader>See everything we have to offer.</Header.Subheader>
        <Divider hidden />
        {this.renderList()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    prompts: Object.values(state.prompts)
  };
};

export default connect(
  mapStateToProps,
  { fetchPrompts }
)(ViewAllPrompts);
