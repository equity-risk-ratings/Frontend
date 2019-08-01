import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Icon,
  Form,
  Input,
  Button
} from "./node_modules/semantic-ui-react";
import axios from "./node_modules/axios";
import "./SignUp.css";

function SignUp(props) {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const register = event => {
    event.preventDefault();
    const regInfo = { firstName, lastName, email, password };
    console.log("Info", regInfo);
    axios
      .post("https://equity-risks.herokuapp.com/api/auth/register", regInfo)
      .then(res => {
        console.log("data", res);
        props.history.push("/signin");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="chart line" color="teal" />
        <Header.Content>Sign Up</Header.Content>
        <Header.Subheader>
          Already have an account? <Link to="/signin">Sign In</Link> here.
        </Header.Subheader>
      </Header>
      <Form onSubmit={register}>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="firstName"
            placeholder="First Name"
            type="text"
            id="firstName"
            onChange={e => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="lastName"
            placeholder="Last Name"
            type="text"
            id="lastName"
            onChange={e => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="email"
            placeholder="Email"
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="password"
            placeholder="Password"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button color="teal">Create Account</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
