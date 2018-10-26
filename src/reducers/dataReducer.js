import initialState from './initialState';
import {TOGGLE_SWITCH, GET_CURRENT_WEATHER, GET_WEATHER_FORECAST, GET_WEATHER} from '../actions/actionTypes';

export default function data(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case TOGGLE_SWITCH:
      newState = action.data;
      console.log('TOGGLE_SWITCH Action')
      return action;
    case GET_CURRENT_WEATHER:
      newState = action.data;
      console.log('GET_CURRENT_WEATHER Action')
      return newState;
    case GET_WEATHER_FORECAST:
      newState = action.data;
      console.log('GET_WEATHER_FORECAST Action')
      return action;
    case GET_WEATHER:
      newState = action.data;
      console.log('GET_WEATHER Action')
      return action;
    default:
      return null;
  }
}
