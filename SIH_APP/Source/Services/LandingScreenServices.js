import Geolocation from 'react-native-geolocation-service';

import _fetch_weather from '../Api/WeatherApi';
import get_geo_location_permission from './LocationPermission';

const fetch_weather = async dispatch => {
  let granted = get_geo_location_permission();
  let Location = {
    coords: {
      accuracy: 22.465999603271484,
      altitude: 228.39999389648438,
      altitudeAccuracy: 1.0940029621124268,
      heading: 0,
      latitude: 21.228544,
      longitude: 81.3468707,
      speed: 0,
    },
    mocked: false,
    provider: 'fused',
    timestamp: 1648318206293,
  };

  if (granted) {
    Geolocation.getCurrentPosition(
      position => {
        Location = position;
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    send_data_weathr_API(Location, dispatch);
  } else {
    alert('Location Permission is necessary for smooth onboarding process');
  }
};

const send_data_weathr_API = async (Location, dispatch) => {
  await _fetch_weather(Location, dispatch);
};

export default {fetch_weather};
