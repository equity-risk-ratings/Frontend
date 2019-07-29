import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import TradeDis from "./components/TradeDis";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="trade-card">Trade Cards</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/trade-card' component={TradeDis} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
