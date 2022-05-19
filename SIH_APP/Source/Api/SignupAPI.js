import Toast from 'react-native-toast-message';
import axios from 'axios';
import moment from 'moment';

import validateEmail from '../Validators/EmailValidation';
import {BASE_URL} from '../Constant/Constant';

const SignupAPI = async (
  email,
  password,
  name,
  mobile,
  googleId,
  address,
  pincode,
  aadhar,
  city,
  state,
  country,
  dob,
  gender,
  aadharImage,
  selfieImage,
) => {
  if (
    validateEmail(email) &&
    name &&
    mobile &&
    address &&
    pincode &&
    aadhar &&
    city &&
    state &&
    country &&
    dob &&
    gender &&
    aadharImage &&
    selfieImage
  ) {
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('mobile', mobile);
    if (password) {
      data.append('password', password);
    }
    if (googleId) {
      data.append('googleId', googleId);
    }
    data.append('address', address);
    data.append('pincode', pincode);
    data.append('country', country);
    data.append('city', city);
    data.append('state', state);
    data.append('adhaar_number', aadhar);

    data.append('gender', gender);
    data.append('dob', moment(dob).format('YYYY/MM/DD'));
    for (let i = 0; i < aadharImage.length; i++) {
      let ext = aadharImage[i].mime.split('/').pop();
      data.append('adhaar_pic', {
        name: 'name' + String(Math.random()) + '.' + ext,
        type: aadharImage[i].mime,
        uri:
          Platform.OS === 'android'
            ? aadharImage[i].path
            : aadharImage[i].uri.replace('file://', ''),
      });
    }

    for (let i = 0; i < selfieImage.length; i++) {
      let ext = selfieImage[i].mime.split('/').pop();
      data.append('selfie_pic', {
        name: 'name' + String(Math.random()) + '.' + ext,
        type: selfieImage[i].mime,
        uri:
          Platform.OS === 'android'
            ? selfieImage[i].path
            : selfieImage[i].uri.replace('file://', ''),
      });
    }
    console.log("response1");
    axios
      .post(`${BASE_URL}user/register`, data)
      .then(function (response) {
        console.log(response.data);
        alert("SIGN UP Successful ");
      })
      .catch(function (error) {
        console.log(error);
      });
  } else if (address === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter Address',
      text2: 'Please valid address',
    });
  } else if (pincode === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter pincode',
      text2: 'Please valid pincode',
    });
  } else if (city === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter city',
      text2: 'Please valid city',
    });
  } else if (city === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter city',
      text2: 'Please valid city',
    });
  } else if (state === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter state',
      text2: 'Please valid state',
    });
  } else if (country === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter country',
      text2: 'Please valid country',
    });
  } else if (aadhar === '') {
    Toast.show({
      type: 'error',
      text1: 'Enter aadhar',
      text2: 'Please valid aadhar',
    });
  } else {
    Toast.show({
      type: 'error',
      text1: 'Enter Every Detail',
      text2: 'Please enter every details',
    });
  }
};

export default SignupAPI;
