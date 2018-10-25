import React, { Component } from "react";
import Input from "./components/input";
import WeatherCurrent from "./components/current";
import WeatherForecast from "./components/forecast";
import "./App.css";

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      weather: []
    };
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  getCurrentWeather(event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&appid=${API_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          weather: [jsonResult.weather]
        });
        console.log(jsonResult);
      }, event.preventDefault());
  }

  render() {
    return (
      <div>
        <Input loadCurrentWeather={this.getCurrentWeather} />
        <WeatherCurrent />
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
