import axios from 'axios';

import {BASE_URL} from '../Constant/Constant';

const fetch_weather = async (latitude, longitude, language, token) => {
  let locationAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${language}&appid=60a27bac5e46189541a2e929d81cf795`;
  let response = await axios(locationAPI);
  return response;
};

export default fetch_weather;
