import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
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

        <Menu.Item
          name="TradeCard"
          as={Nav}
          to={"/trade-card"}
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          TradeCard
        </Menu.Item>

        <Menu.Item
          name="Quotes"
          as={Nav}
          to={"/quote"}
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Quotes
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
