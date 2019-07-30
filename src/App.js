import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import TradeDis from "./components/TradeDis";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import Data from './Data';

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
