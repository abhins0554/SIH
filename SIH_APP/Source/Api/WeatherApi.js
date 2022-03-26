import axios from 'axios';
import {OPENWEATHERMAPAPI} from '@env'

const _fetch_weather = async () => {
    let lat = 21.1938475;
    let long = 81.3509416;
    let lang ='en';
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&appid=${OPENWEATHERMAPAPI}`;
    let response = await axios.get(api);
    return response;
}

export default _fetch_weather;