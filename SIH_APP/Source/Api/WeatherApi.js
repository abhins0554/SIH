import axios from 'axios';

let lat = 21.1938475;
let long = 81.3509416;
let lang ='pa';

const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&appid=60a27bac5e46189541a2e929d81cf795`;

const _fetch_weather = async () => {
    let response = await axios.get(api);
    return response;
}

export default _fetch_weather;