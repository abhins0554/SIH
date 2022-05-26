import {BASE_URL} from '../Constant/Constant';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
export const _fetchAttractionDataByCategory = async (type) => {
  const idTokenResult = await auth().currentUser.getIdTokenResult();
  let response = await axios.get(
    `${BASE_URL}attraction/fetchByCategory?category=${type}`,{
      category:type,
    },
    {
      headers: {
        authorization: `Bearer ${idTokenResult}`,
      },
    },
  );
  return response;
};
