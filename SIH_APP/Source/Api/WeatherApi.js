import axios from 'axios';
import {OPENWEATHERMAPAPI} from '@env';

import {useDispatch} from 'react-redux';
import WeatherAction from '../Redux/Action/WeatherAction';

const _fetch_weather = async (Location, dispatch) => {
  let lang = 'en';
  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${Location?.coords?.latitude}&lon=${Location?.coords?.longitude}&lang=${lang}&appid=${OPENWEATHERMAPAPI}`;
  await axios
    .get(api)
    .then(response => {
      dispatch(WeatherAction(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export default _fetch_weather;
