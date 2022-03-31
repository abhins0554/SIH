import axios from 'axios';
import {OPENWEATHERMAPAPI} from '@env'

const _fetch_weather = async (Location) => {
    let lang ='en';
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${Location?.coords?.latitude}&lon=${Location?.coords?.longitude}&lang=${lang}&appid=${OPENWEATHERMAPAPI}`;
    await axios.get(api)
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })
}

export default _fetch_weather;