import axios from "axios";
import { BASE_URL } from "../constant/constant";


export const _fetch_news_data = async () => {
    let t =await localStorage.getItem('token');
    let response = await axios.get(`${BASE_URL}/news/fetchAll`,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}

export const _delete_news_data = async (id) => {
    let t =await localStorage.getItem('token');
    let response = await axios.post(`${BASE_URL}/news/deleteNews`,{id:id},{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}

export const _add_News_API = async (title,description,image) =>{

    let t =await localStorage.getItem('token');

    let data = new FormData();
    data.append('title',title);
    data.append('description',description);
    data.append('newsImage',image);

    let response = await axios.post(`${BASE_URL}/news/createNews`,data,{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}