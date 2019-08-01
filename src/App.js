<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import TradeDis from "./components/TradeDis";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import TradingHome from "./components/TradingHome";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import Quote from './components/quote/Quote';
import UserProfile from './components/UserProfile';
>>>>>>> d6de4f51da9f2765330147facc9342d3e97de7d4

import Data from './Data';
import automatedDataset from './components/dataMap';
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Data />
=======
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/trade-card" component={TradingHome} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/quote" component={Quote} />
          </Switch>
        </div>
      </Router>
>>>>>>> d6de4f51da9f2765330147facc9342d3e97de7d4
    </div>
  );
}

export default App;
