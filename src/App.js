import React, { Component } from "react";
import Input from "./components/input";
import WeatherCurrent from "./components/current";
import WeatherForecast from "./components/forecast";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      location: "",
      currentTemp: undefined,
      todaysHigh: undefined,
      todaysLow: undefined,
      currentWeather: undefined,
      forecastPeriod: [],
      forecastWeather: [],
      forecastTemp: undefined,
      forecastIcon: []
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
        // console.log(jsonResult);
      }, event.preventDefault());
  }

  getWeatherForecast(event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${zip},${country}&units=imperial&appid=${API_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        let updatedForecast = this.state.forecastPeriod.slice();
        let updatedForecastWeather = this.state.forecastWeather.slice();
        let updatedForecastIcon = this.state.forecastIcon.slice();
        for (let i = 1; i < 6; i++) {
          updatedForecast.push(jsonResult.list[i].dt);
          updatedForecast.push(jsonResult.list[i].weather[0].description);
          updatedForecast.push(jsonResult.list[i].weather[0].icon);
        }

        function seperateArr (arr) {
          const newArr = [];
          for (let i=0; i<15; i+=3) {
            var sliceArr = arr.slice(i, i + 3);
            newArr.push(sliceArr)
          }
          return newArr;
        }

        let day = seperateArr(updatedForecast);
        // console.log(day);

        this.setState({
          forecastPeriod: day,
          forecastWeather: updatedForecastWeather,
          forecastIcon:updatedForecastIcon
        });
        console.log(jsonResult);
        // console.log(this.state.forecastIcon);
        console.log(this.state.forecastPeriod);
      }, event.preventDefault());
  }

  getWeather(e) {
    this.getCurrentWeather(e);
    this.getWeatherForecast(e);
  }

  render() {
    return (
      <body class="container">
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
      </body>

    );
  }
}

export default App;
