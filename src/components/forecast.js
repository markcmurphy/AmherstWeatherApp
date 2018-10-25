import React from 'react';

const WeatherForecast = (props) => {
  return (
      <div>
      {props.forecastPeriod && <p> Forecast for {props.forecastPeriod} </p>}
      {props.forecastWeather && <p> {props.forecastWeather} </p>}
      </div>
    );
}

export default WeatherForecast;
