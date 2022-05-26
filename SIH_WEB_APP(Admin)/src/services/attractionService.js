import axios from "axios";
import { BASE_URL } from "../constant/constant";


export const _fetch_attraction_data = async () => {
    let t =await localStorage.getItem('token');
    let response = await axios.get(`${BASE_URL}/attraction/fetchAll`,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}

export const _add_attrcation = async (name,description,image,longitude,latitude,category,cEmail,cPhone,videoLink) => {
    let t =await localStorage.getItem('token');
    let data = new FormData();
    data.append('name',name);
    data.append('description',description);
    data.append('longitude',longitude);
    data.append('latitude',latitude);
    data.append('attractionImage',image);
    data.append('email',cEmail);
    data.append('phone',cPhone);
    data.append('video',videoLink);
    data.append('category',category);

    let response = await axios.post(`${BASE_URL}/attraction/createAttraction`,data,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}