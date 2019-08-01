import React from "react";
import {
  Container,
  Header,
  Icon,
  Form,
  Input,
  Button,
  Divider
} from "semantic-ui-react";
// import "./UserProfile.css";

const UserProfile = props => {
  console.log(props);
  const [updateInfo, setUpdateInfo] = React.useState({props})
 

  const handleChange = event => {
    const { name, value } = event.target
    setUpdateInfo({...updateInfo, [name]: value })
  }

  const updateProfile = event => {
    event.preventDefault();
    setUpdateInfo();
  };

  const deleteProfile = event => {
   setUpdateInfo()
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
            name="firstName"
            value={updateInfo.firstName}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="lastName"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={updateInfo.lastName}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <Input
            className="input-field"
            htmlFor="password"
            placeholder="password"
            type="password"
            name="password"
            value={updateInfo.password}
            onChange={handleChange}
          />
        </Form.Field>
       
        <Button color="teal" onClick={updateProfile}>
          Edit Profile
        </Button>
        <Divider hidden />
        <Button color="teal" onClick={deleteProfile}>
          Delete Profile
        </Button>
      </Form>
    </Container>
  );
};

export default UserProfile;
