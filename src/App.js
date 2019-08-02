import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import TradingHome from "./components/TradingHome";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import UserProfile from "./components/UserProfile";
import Data from "./Data";
import Quote from "./components/quote/Quote";
import OurRating from "./components/OurRating";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/trade-card" component={TradingHome} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/quote" component={Quote} />
            <Route path="/stock-data" component={Data} />
            <Route path="/our-rating" component={OurRating} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
