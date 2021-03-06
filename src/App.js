import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import TradingHome from "./components/TradingHome";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import UserProfile from './components/UserProfile';
import Data from "./Data"
import Quote from "./components/quote/Quote";
/* import Data from "./Data";
import automatedDataset from "./components/dataMap"; */

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/trade-card" component={TradingHome} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/quote" component={Quote} />
           <Route exact path ="/stock-data" component={Data} />              
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;