import React from "react";

const WeatherForecast = props => {
  return (
    <div>
      <ul>
        {props.forecastPeriod.map((item, i) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
