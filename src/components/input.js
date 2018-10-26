import React from "react";

const Input = props => {
  return (
    <div class="container">
      <div class="row">
      <div class="col-sm">
      <form onSubmit={props.loadCurrentWeather}>
        <input className={`form-control ${props.toggledState ? 'dark': null}`} type="text" name="zip" placeholder="ZIP Code" />
        <input className={`form-control ${props.toggledState ? 'dark': null}`} type="text" name="country" placeholder="Country Code" />
        <button class="btn btn-primary">Get Weather</button>
      </form>
      <button class="btn btn-primary" onClick={props.theme}>Toggle Dark</button>
      </div>
      </div>
      </div>
  );
};

export default Input;
