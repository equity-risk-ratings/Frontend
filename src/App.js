import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <header>Equity Risk Ratings</header>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;
