import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Icon, Form, Input, Button } from 'semantic-ui-react';
import './SignUp.css';

function SignUp() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  console.log({ name, email, password });
  return (
    <Container>
      <Header as='h1' icon textAlign='center'>
        <Icon name='chart line' color='teal' />
        <Header.Content>Sign Up</Header.Content>
        <Header.Subheader>Already have an account? <Link to='/signin'>Sign In</Link> here.</Header.Subheader>
      </Header>
      <Form onSubmit={e => e.preventDefault() && false}>
        <Form.Field className='form-field'>
          <Input
            className='input-field'
            htmlFor='name'
            placeholder='Name'
            type='text'
            id='name'
            onChange={e => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className='form-field'>
          <Input
            className='input-field'
            htmlFor='email'
            placeholder='Email'
            type='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field className='form-field'>
          <Input
            className='input-field'
            htmlFor='password'
            placeholder='Password'
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button color='teal'>Create Account</Button>
      </Form>
    </Container>
  );
};

export default SignUp;