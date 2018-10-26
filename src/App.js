import React, { Component } from "react";
import Input from "./components/input";
import WeatherCurrent from "./components/current";
import WeatherForecast from "./components/forecast";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Demo from "./components/geolocation";
import * as types from './actions/actionTypes';
import DataList from './components/DataList';

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class App extends Component {

  render() {
    return (
      <div className={this.state.darkToggled ? 'dark': null}>
      <div>
        <Demo />
        <DataList
        loadCurrentWeather={this.getWeather}
        theme={this.toggleSwitch}
        location={this.state.location}
        currentTemp={this.state.currentTemp}
        todaysHigh={this.state.todaysHigh}
        todaysLow={this.state.todaysLow}
        currentWeather={this.state.currentWeather}
        forecastPeriod={this.state.forecastPeriod}
        forecastWeather={this.state.forecastWeather}
        forecastTemp={this.state.forecastTemp}
        />
      </div>
      // </div>

    );
  }
}

export default App;
