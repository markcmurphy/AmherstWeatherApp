import React, { Component } from "react";
import WeatherCurrent from "./components/current";
import WeatherForecast from "./components/forecast";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <WeatherCurrent />
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
