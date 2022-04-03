import Constant from '../../Constant/ReduxConstant';
const initWeather = {
  weather: {
    base: 'stations',
    clouds: {all: 6},
    cod: 200,
    coord: {lat: 21.2285, lon: 81.3469},
    dt: 1648926049,
    id: 1272181,
    main: {
      feels_like: 301.31,
      grnd_level: 976,
      humidity: 15,
      pressure: 1008,
      sea_level: 1008,
      temp: 303.17,
      temp_max: 303.17,
      temp_min: 303.17,
    },
    name: 'Durg',
    sys: {country: 'IN', sunrise: 1648945568, sunset: 1648990171},
    timezone: 19800,
    visibility: 10000,
    weather: [{description: 'clear sky', icon: '01n', id: 800, main: 'Clear'}],
    wind: {deg: 315, gust: 3.3, speed: 2.85},
  },
};

const WeatherReducer = (state = initWeather, action) => {
  switch (action.type) {
    case Constant.WEATHER:
      return {...state, weather: action.payload};
    default:
      return state;
  }
};
export default WeatherReducer;
