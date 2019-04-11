import React from "react";
import { connect } from "react-redux";
import { Container, Card, Loader } from "semantic-ui-react";
import { fetchPrompts } from "../actions";
import TitleHeader from "./TitleHeader";

class ViewAllPrompts extends React.Component {
  componentDidMount() {
    this.props.fetchPrompts();
  }

  renderList() {
    if (this.props.prompts.length === 0) {
      return (
        <Container>
          <Loader active inline='centered' />
        </Container>
      );
    }
    return this.props.prompts.map(prompt => {
      return <Card fluid key={prompt.id} header={prompt.title} />;
    });
  }

  render() {
    return (
      <Container fluid textAlign='center'>
        <TitleHeader
          title='View All Prompts'
          subtitle='View everything we have to offer.'
        />
        <Card.Group>{this.renderList()}</Card.Group>
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
