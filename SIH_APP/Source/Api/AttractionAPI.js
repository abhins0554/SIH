import {BASE_URL} from '../Constant/Constant';
import axios from 'axios';
export const _fetchAttractionDataByCategory = async (type, token) => {
  let response = await axios.get(
    `${BASE_URL}attraction/fetchByCategory?category=${type}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  return response;
};
