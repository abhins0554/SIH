import axios from 'axios';

import {BASE_URL} from '../Constant/Constant';

const fetch_weather = async (latitude, longitude, language, token) => {
  var data = JSON.stringify({
    latitude: 21.25,
    longitude: 81.629997,
    language: 'en',
  });

  var config = {
    method: 'get',
    url: 'http://192.168.29.179:3000/user/fetchWeather',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDg5MzVjMWMwN2VjMzJkOWNlMTIxYiIsImlhdCI6MTY0ODk2Mzg0OCwiZXhwIjoxNjQ5MDUwMjQ4fQ.Mod48JDsAG6CxKPbbx63S-QjJdLne8QmmGQid0NnIbk',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  let response = await axios(config);

  return response;
};

export default fetch_weather;
