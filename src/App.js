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
      currentWeather: undefined,
      forecastPeriod: undefined,
      forecastWeather: undefined,
      forecastTemp: undefined
    };
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.getWeatherForecast = this.getWeatherForecast.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getCurrentWeather(event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&units=imperial&appid=${API_KEY}`
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
        console.log(jsonResult);
      }, event.preventDefault());
  }

  getWeatherForecast (event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${zip},${country}&units=imperial&appid=${API_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          forecastPeriod: jsonResult.list[1].dt_txt,
          forecastWeather: jsonResult.list[1].weather[0].description,
          forecastTemp: jsonResult.list[1].forecastTemp
        });
        console.log(jsonResult);
        console.log(this.state.forecastPeriod);
      }, event.preventDefault());
  }

  getWeather(e){
    this.getCurrentWeather(e);
    this.getWeatherForecast(e);
  }

  render() {
    return (
      <div>
        <Input loadCurrentWeather={this.getWeather} />
        <WeatherCurrent
        location={this.state.location}
        currentTemp={this.state.currentTemp}
        todaysHigh={this.state.todaysHigh}
        todaysLow={this.state.todaysLow}
        currentWeather={this.state.currentWeather}
         />
        <WeatherForecast
        forecastPeriod={this.state.forecastPeriod}
        forecastWeather={this.state.forecastWeather}
        forecastTemp={this.state.forecastTemp}
        />
      </div>
    );
  }
}

export default App;
