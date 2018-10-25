import React, { Component } from "react";
import Input from "./components/input";
import WeatherCurrent from "./components/current";
import WeatherForecast from "./components/forecast";
import "./App.css";

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class App extends Component {
  componentDidMount() {
    const getCurrentWeather = async () => {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=78759,us&appid=${API_KEY}`
      );

      const response = await api_call.json();

      console.log(response);
    };
    getCurrentWeather();
  }

  render() {
    return (
      <div>
        <Input />
        <WeatherCurrent />
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
