import React from 'react'

function SignIn() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  console.log({ email, password });
  return (
    <div className='container'>
      <form onSubmit={e => e.preventDefault() && false}>
        <h5>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>
            Email
            <input
              placeholder='Email'
              type='email'
              id='email'
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>
            Password
            <input
              placeholder='Password'
              type='password'
              id='password'
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className='input-field'>
          <button className='btn'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
