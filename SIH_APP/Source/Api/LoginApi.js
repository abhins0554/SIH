import Toast from 'react-native-toast-message';
import axios from 'axios';

import validateEmail from '../Validators/EmailValidation';
import {BASE_URL} from '../Constant/Constant';

import {
  Set_Encrypted_AsyncStorage,
  Get_Encrypted_AsyncStorage,
} from 'react-native-encrypted-asyncstorage';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginAPI = async (email, password, navigation) => {
  if (validateEmail(email) && password && password.length >= 6) {
    await axios
      .post(`${BASE_URL}user/userlogin`, {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.status === 200) {
          Toast.show({
            type: 'success',
            text1: `Login Sucessfull ${response.status}`,
            text2: `${response.data.message}`,
          });
          saving_data_async(response.data, navigation);
        }
      })
      .catch(error => {
        console.log('1', error.response.status);
        console.log(error.response.data.message);
        Toast.show({
          type: 'error',
          text1: `Login Error ${error.response.status}`,
          text2: `${error.response.data.message}`,
        });
      });
  } else if (email === '' || email === null) {
    Toast.show({
      type: 'error',
      text1: 'Enter Email',
      text2: 'Please enter email address',
    });
  } else if (!validateEmail(email)) {
    Toast.show({
      type: 'error',
      text1: 'Enter valid email',
      text2: 'Please enter valid email address',
    });
  } else if (password === '' || password === null) {
    Toast.show({
      type: 'error',
      text1: 'Enter password',
      text2: 'Please enter password',
    });
  }
};

const saving_data_async = async (data, navigation) => {
  let userData = data.result[0];
  let token = data.token;
  try {
    await Set_Encrypted_AsyncStorage('object', 'userData', userData, 'SIH');
    await Set_Encrypted_AsyncStorage('text', 'token', token, 'SIH');
    navigation.navigate('LandingScreen');
  } catch (error) {
    console.log('Error ', error);
  }
};

export default LoginAPI;
