import { BASE_URL } from "../Constant/Constant"
import axios from 'axios';
export const _fetchAttractionDataByCategory = async (type,idTokenResult) => {
    let response = await axios.get(`${BASE_URL}attraction/fetchByCategory`,{
        category:type,
    },{
        headers: {
          authorization: `Bearer ${idTokenResult.token}`
        }
      });
    return response;
}