import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./Components/Main Screen";
import WeatherScreen from "./Components/Weather Screen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageNotFound from "./Components/404 Page";

function App() {
  return (
    <div className="container__weather">
      <Router>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/weather" component={WeatherScreen} />
          <Route path="/404" component={PageNotFound} />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
