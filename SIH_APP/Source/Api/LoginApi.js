import Toast from 'react-native-toast-message';
import axios from 'axios';

import validateEmail from '../Validators/EmailValidation';
import {BASE_URL} from '../Constant/Constant';

import {
  Set_Encrypted_AsyncStorage,
  Get_Encrypted_AsyncStorage,
} from 'react-native-encrypted-asyncstorage';

import auth from '@react-native-firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginAPI = async (response, navigation,email) => {
      const idTokenResult = await auth().currentUser.getIdTokenResult();
      await axios.post(`${BASE_URL}user/login`,{email:email},{
        headers: {
          authorization: `Bearer ${idTokenResult.token}`
        }
      })
      .then(response=>{

        saving_data_async(response?.data,navigation,idTokenResult.token);
      })
      .catch(error=>{
        console.log('Error 1', error);
        console.log('Error ', error?.response?.message);
        console.log('Error ', error?.response?.data);
      })
};

const saving_data_async = async (data, navigation,token) => {
  let userData = data?.data[0];
  try {
    await Set_Encrypted_AsyncStorage('object', 'userData', userData, 'SIH');
    await Set_Encrypted_AsyncStorage('text', 'token', token, 'SIH');
    navigation.navigate('LandingScreen');
  } catch (error) {
    console.log('Error ', error);
    console.log('Error ', error?.response?.message);
    console.log('Error ', error?.response?.data);
  }
};

export default LoginAPI;
