import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Icon,
  Form,
  Input,
  Button
} from "semantic-ui-react";
import axios from "axios";
import "./SignIn.css";

function SignIn(props) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const login = event => {
    event.preventDefault();
    const loginInfo = { email, password };
    axios
      .post("http://localhost:5000/api/auth/login", loginInfo)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/trade-card");
      })
      .catch(err => console.log(err.response.message));
  };

  console.log({ email, password });
  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="chart line" color="teal" />
        <Header.Content>Sign In</Header.Content>
        <Header.Subheader>
          Need an account? <Link to="/signup">Sign Up</Link> here.
        </Header.Subheader>
      </Header>
      <Form onSubmit={login}>
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
        <Button color="teal">Login</Button>
      </Form>
    </Container>
  );
}

export default SignIn;
