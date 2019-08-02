import React from "react";

function SignUp() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  console.log({ name, email, password });
  return (
    <div className="container">
      <form onSubmit={e => e.preventDefault() && false}>
        <h5>Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">
            Name
            <input
              placeholder="Name"
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="email">
            Email
            <input
              placeholder="Email"
              type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="password">
            Password
            <input
              placeholder="Password"
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="input-field">
          <button className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
