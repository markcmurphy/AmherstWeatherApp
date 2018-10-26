import React from 'react';

const WeatherCurrent = (props) => {
  return (
      <div className="card">
      <div className="card-header">
      {props.location && <p> Current Weather In {props.location}</p>}
      </div>
      <div>
      <ul className="list-group list-group-flush">
      {props.currentTemp && <li className="list-group-item"> Current Temp: {props.currentTemp}</li>}
      {props.todaysHigh && <li className="list-group-item"> Today's High: {props.todaysHigh}</li>}
      {props.todaysLow && <li className="list-group-item"> Today's Low: {props.todaysLow}</li>}
      {props.currentWeather && <li className="list-group-item"> Current Weather: {props.currentWeather}</li>}
      </ul>
      </div>
      </div>
    );
}

export default WeatherCurrent;
