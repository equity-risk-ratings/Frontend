import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import TradeDis from "./components/TradeDis";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/trade-card' component={TradeDis} />
    </div>
  );
}

export default App;
