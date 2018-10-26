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
    {props.forecastPeriod.map((item, i) => (
      <div className="card">
      <div className="card-body">
      <h5 key={item} className="card-title">{convertDate(item[0])}</h5>
      <div className="card-text">{item[1]} </div>
      <img src={item[2]} alt="weather icon" />
      </div>
      </div>
    ))}
</div>
  );
};

export default WeatherForecast;
