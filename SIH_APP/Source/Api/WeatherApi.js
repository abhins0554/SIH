import axios from 'axios';

import {BASE_URL} from '../Constant/Constant';

const fetch_weather = async (url) => {
  let response = await axios.get(url);
  return response;
};

export default fetch_weather;
