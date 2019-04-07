import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, Button, Icon } from "semantic-ui-react";

class Navbar extends React.Component {
  state = { visible: false };

  handleClick = () => this.setState({ visible: !this.state.visible });
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item onClick={() => this.handleClick()}>
            <Icon name='bars' />
          </Menu.Item>
          <Menu.Item as={Link} to='/' onClick={() => this.handleClick()}>
            Today's Prompt
          </Menu.Item>
          <Menu.Item as={Link} to='/all' onClick={() => this.handleClick()}>
            View All Prompts
          </Menu.Item>
          <Menu.Item as={Link} to='/entry' onClick={() => this.handleClick()}>
            Submit a Prompt
          </Menu.Item>
        </Sidebar>
        <Button onClick={() => this.handleClick()}>
          <Icon name='bars' />
        </Button>
      </div>
    );
  }
}

export default Navbar;
