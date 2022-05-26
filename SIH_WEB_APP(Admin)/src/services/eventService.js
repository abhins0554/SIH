import axios from "axios";
import { BASE_URL } from "../constant/constant";


export const _fetch_event_data = async () => {
    let t =await localStorage.getItem('token');
    let response = await axios.get(`${BASE_URL}/event/fetchAll`,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}


export const _add_event_API = async (title,description,longitude,latitude,image)=>{

    let t =await localStorage.getItem('token');

    let data = new FormData();
    data.append('title',title);
    data.append('description',description);
    data.append('longitude',longitude);
    data.append('latitude',latitude);
    data.append('eventImage',image);

    let response = await axios.post(`${BASE_URL}/event/createEvent`,data,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;

}