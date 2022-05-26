import axios from "axios";
import { BASE_URL } from "../constant/constant";


export const _fetch_user_data_mongodDB = async () => {
    let t =await localStorage.getItem('token');
    let response = await axios.post(`${BASE_URL}/user/fetchUser`,{
        data:'data',
    },{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}