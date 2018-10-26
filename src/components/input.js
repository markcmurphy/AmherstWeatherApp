import React from "react";

const Input = props => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-sm">
      <form onSubmit={props.loadCurrentWeather}>
        <input className={`form-control ${props.toggledState ? 'dark': null}`} type="text" name="zip" placeholder="ZIP Code" />
        <input className={`form-control ${props.toggledState ? 'dark': null}`} type="text" name="country" placeholder="Country Code" />
        <button className="btn btn-primary">Get Weather</button>
      </form>
      <button className="btn btn-primary" onClick={props.theme}>Toggle Dark</button>
      </div>
      </div>
      </div>
  );
};

export default Input;
