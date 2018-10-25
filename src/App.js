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
      location: '',
      currentTemp: undefined,
      todaysHigh: undefined,
      todaysLow: undefined,
      currentWeather: undefined
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
          location: jsonResult.name,
          currentTemp: jsonResult.main.temp,
          todaysHigh: jsonResult.main.temp_max,
          todaysLow: jsonResult.main.temp_min,
          currentWeather: jsonResult.weather[0].description
        });
        console.log(this.state.location);
      }, event.preventDefault());
  }

  render() {
    return (
      <div>
        <Input loadCurrentWeather={this.getCurrentWeather} />
        <WeatherCurrent
        location={this.state.location}
        currentTemp={this.state.currentTemp}
        todaysHigh={this.state.todaysHigh}
        todaysLow={this.state.todaysLow}
        currentWeather={this.state.currentWeather}
         />
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
