import React from "react";

const Input = props => {
  return (
    <div>
      <form onSubmit={props.loadCurrentWeather}>
        <input type="text" name="zip" placeholder="ZIP Code" />
        <button>Get Current Weather</button>
      </form>
    </div>
  );
};

export default Input;
