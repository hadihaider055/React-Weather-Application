import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./Components/Main Screen";
import WeatherScreen from "./Components/Weather Screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="container__weather">
          <Route exact path="/weather" component={WeatherScreen} />
          <Route exact path="/" component={MainScreen} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
