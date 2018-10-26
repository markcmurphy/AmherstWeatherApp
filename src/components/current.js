import React from 'react';

const WeatherCurrent = (props) => {
  return (
      <div class="card">
      <div class="card-header">
      {props.location && <p> Current Weather In {props.location}</p>}
      </div>
      <div>
      <ul class="list-group list-group-flush">
      {props.currentTemp && <li class="list-group-item"> Current Temp: {props.currentTemp}</li>}
      {props.todaysHigh && <li class="list-group-item"> Today's High: {props.todaysHigh}</li>}
      {props.todaysLow && <li class="list-group-item"> Today's Low: {props.todaysLow}</li>}
      {props.currentWeather && <li class="list-group-item"> Current Weather: {props.currentWeather}</li>}
      </ul>
      </div>
      </div>
    );
}

export default WeatherCurrent;
