import React from "react";

const WeatherForecast = props => {

function convertDate(x) {
  let a = new Date(x*1000);
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let daysofWeek = days[a.getDay()];
  return daysofWeek;
}

  return (
    <div>
  <ul>
    {props.forecastPeriod.map((item, i) => (
      <li key={item}>{convertDate(item[0])} - {item[1]}</li>
    ))}
  </ul>
</div>

  );
};

export default WeatherForecast;
