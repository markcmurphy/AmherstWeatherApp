import * as types from './actionTypes';
const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

export function getCurrentWeather(event) {
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
    }, event.preventDefault());
}
