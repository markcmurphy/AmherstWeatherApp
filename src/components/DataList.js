import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dataActions from '../actions/dataActions';
import PropTypes from 'prop-types';
import React from 'react';
const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      location: "",
      currentTemp: undefined,
      todaysHigh: undefined,
      todaysLow: undefined,
      currentWeather: undefined,
      forecastPeriod: [],
      forecastWeather: [],
      forecastTemp: undefined,
      forecastIcon: [],
      darkToggled: false
    };
    this.getCurrentWeather = this.getCurrentWeather.bind(this);
    this.getWeatherForecast = this.getWeatherForecast.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch(e) {
    this.setState({
      darkToggled: !this.state.darkToggled
    });
  }

  getCurrentWeather(event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&units=imperial&appid=${API_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        this.setState({
          location: jsonResult.name,
          currentTemp: jsonResult.main.temp,
          todaysHigh: jsonResult.main.temp_max,
          todaysLow: jsonResult.main.temp_min,
          currentWeather: jsonResult.weather[0].description
        });
      }, event.preventDefault());
  }

  getWeatherForecast(event) {
    const zip = event.target.elements.zip.value;
    const country = event.target.elements.country.value;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${zip},${country}&units=imperial&appid=${API_KEY}`
    )
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        let updatedForecast = this.state.forecastPeriod.slice();
        let updatedForecastWeather = this.state.forecastWeather.slice();
        let updatedForecastIcon = this.state.forecastIcon.slice();
        for (let i = 1; i < 6; i++) {
          updatedForecast.push(jsonResult.list[i].dt);
          updatedForecast.push(jsonResult.list[i].weather[0].description);
          updatedForecast.push(`https://openweathermap.org/img/w/${jsonResult.list[i].weather[0].icon}.png`);
        }

        function seperateArr (arr) {
          const newArr = [];
          for (let i=0; i<15; i+=3) {
            var sliceArr = arr.slice(i, i + 3);
            newArr.push(sliceArr)
          }
          return newArr;
        }

        let day = seperateArr(updatedForecast);

        this.setState({
          forecastPeriod: day,
          forecastWeather: updatedForecastWeather,
          forecastIcon:updatedForecastIcon
        });
      }, event.preventDefault());
  }

  getWeather(e) {
    this.getCurrentWeather(e);
    this.getWeatherForecast(e);
  }


  render() {
    return (

      <div className="container">
        <div className="row">
        <div className="col-sm">
        <form onSubmit={this.props.loadCurrentWeather}>
          <input className={`form-control ${this.props.toggledState ? 'dark': null}`} type="text" name="zip" placeholder="ZIP Code" />
          <input className={`form-control ${this.props.toggledState ? 'dark': null}`} type="text" name="country" placeholder="Country Code" />
          <button className="btn btn-primary">Get Weather</button>
        </form>
        <button className="btn btn-primary" onClick={this.props.theme}>Toggle Dark</button>
        </div>
        </div>

      <div className="card">
      <div className="card-header">
      {this.props.location && <p> Current Weather In {this.props.location}</p>}
      </div>
      <div>
      <ul className="list-group list-group-flush">
      {this.props.currentTemp && <li className="list-group-item"> Current Temp: {this.props.currentTemp}</li>}
      {this.props.todaysHigh && <li className="list-group-item"> Today's High: {this.props.todaysHigh}</li>}
      {this.props.todaysLow && <li className="list-group-item"> Today's Low: {this.props.todaysLow}</li>}
      {this.props.currentWeather && <li className="list-group-item"> Current Weather: {this.props.currentWeather}</li>}
      </ul>
      </div>
      </div>
      </div>
    );
  }
}

DataList.propTypes = {
  dataActions: PropTypes.object,
  data: PropTypes.array
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataList);
