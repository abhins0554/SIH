import Geolocation from 'react-native-geolocation-service';

const get_geo_location = async () => {
  const granted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (granted) {
    console.log('You can use the ACCESS_FINE_LOCATION');
  } else {
    console.log('ACCESS_FINE_LOCATION permission denied');
  }

  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};

export default get_geo_location;
