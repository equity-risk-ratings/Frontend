import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";
import "./Home.css";

function Home() {
  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="chart line" color="teal" />
        <Header.Content>Welcome to "Equity Risk Ratings"</Header.Content>
        <Header.Subheader>Where would you like to start?</Header.Subheader>
      </Header>
      <div className="button-group">
        <Button color="teal" animated="vertical">
          <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
            <Button.Content visible>New Here?</Button.Content>
            <Button.Content hidden>Sign Up</Button.Content>
          </Link>
        </Button>
        <Button color="teal" animated="vertical">
          <Link style={{ textDecoration: "none", color: "white" }} to="/signin">
            <Button.Content visible>Already a User?</Button.Content>
            <Button.Content hidden>Sign In</Button.Content>
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default Home;
