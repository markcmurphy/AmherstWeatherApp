import React from 'react';

const WeatherCurrent = (props) => {
  return (
      <div>
      {props.location && <p> Current Weather In {props.location}</p>}
      {props.currentTemp && <p> Current Temp: {props.currentTemp}</p>}
      {props.todaysHigh && <p> Today's High: {props.todaysHigh}</p>}
      {props.todaysLow && <p> Today's Low: {props.todaysLow}</p>}
      {props.currentWeather && <p> Current Weather: {props.currentWeather}</p>}
      </div>
    );
}

export default WeatherCurrent;
