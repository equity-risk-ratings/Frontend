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
// import "./UserProfile.css";

const UserProfile = props => {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  console.log({ firstName, lastName, email, password });

  const updateProfile = event => {
    event.preventDefault();
  };

  const deleteProfile = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="chart line" color="teal" />
        <Header.Content>Edit Profile</Header.Content>
        <Header.Subheader>You can update your profile here</Header.Subheader>
      </Header>
      <Form>
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
        <Button color="teal" onClick={updateProfile}>
          Edit Profile
        </Button>
        <Button color="teal" onClick={deleteProfile}>
          Delete Profile
        </Button>
      </Form>
    </Container>
  );
};

export default UserProfile;
