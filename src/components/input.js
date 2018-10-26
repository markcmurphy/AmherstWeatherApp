import React from "react";

const Input = props => {
  return (
    <div class="container">
      <div class="row">
      <div class="col-sm">
      <form onSubmit={props.loadCurrentWeather}>
        <input class="form-control" type="text" name="zip" placeholder="ZIP Code" />
        <input class="form-control" type="text" name="country" placeholder="Country Code" />
        <button class="btn btn-primary">Get Current Weather</button>
      </form>
      </div>
      </div>
      </div>
  );
};

export default Input;
