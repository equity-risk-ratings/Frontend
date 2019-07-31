import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

export default class TradeNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color="teal">
        <Menu.Item
          color="teal"
          name="home"
          as={Nav}
          to={"/"}
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="register"
          as={Nav}
          to={"/signin"}
          active={activeItem === "register"}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>

        <Menu.Item
          name="DataPage"
          as={Nav}
          to={"/datapage"}
          active={activeItem === "DataPage"}
          onClick={this.handleItemClick}
        >
          Data Page
        </Menu.Item>
      </Menu>
    );
  }
}
