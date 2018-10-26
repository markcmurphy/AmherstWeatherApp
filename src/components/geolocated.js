import React from 'react';
import {geolocated} from 'react-geolocated';

const Demo = (props) => {
  return(

  <button onClick={props.getGeo}>weather</button>


        )
  }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);
