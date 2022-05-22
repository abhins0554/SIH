import axios from "axios";
let t = localStorage.getItem('token');

export const _fetch_user_data_mongodDB = async () => {
    let response = await axios.get('/user/get_allUserDataMongoDB',{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}


export const _fetch_user_data_firebase = async () => {
    let response = await axios.get('/user/get_allUserDataFirebase',{
        headers:{
            authorization:`Bearer ${t}`
        }
    });
    return response;
}