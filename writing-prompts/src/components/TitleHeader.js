import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const TitleHeader = props => {
  return (
    <Container>
      <Divider horizontal>
        <Header size='huge' textAlign='center'>
          {props.title}
        </Header>
      </Divider>
      <Header.Subheader>{props.subtitle}</Header.Subheader>
      <Divider hidden />
    </Container>
  );
};

export default TitleHeader;
