import Toast from 'react-native-toast-message';
import axios from 'axios';
import moment from 'moment';

import validateEmail from '../Validators/EmailValidation';
import {BASE_URL} from '../Constant/Constant';


import auth from '@react-native-firebase/auth';

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
  navigation,
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
    _email_signUp_firebase(email, password, "d", mobile, address, city, state, pincode, country, gender, selfieImage, aadharImage, name, navigation);
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


const _email_signUp_firebase = async (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigation) => {
  auth().createUserWithEmailAndPassword(email,password)
  .then(response=>{
    _apiSignUp(email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigation);
  })
  .catch(error=>{
    console.log(error);
  })
}


const _apiSignUp = async (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigation) => {
  const idTokenResult = await auth().currentUser.getIdTokenResult();
  _send_data_to_node_server(idTokenResult.token, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigation)
}



const _send_data_to_node_server = async (t, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigation) => {


  axios.post(`${BASE_URL}user/signup`, createFormData2(email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name,{ userid: '1' }) , {
      headers: {
          authorization: `Bearer ${t}`
      }
  })
      .then(response => {
          console.log(response.data);
          if (response?.data?.code === 200) {
              Toast.show({
                type: 'success',
                text1: 'SignUp Successful',
                text2: 'Please Login to Continue',
              });
              setTimeout(() => {
                  navigation.navigate("LoginScreen")
              }, 700);
          }
          else if (response?.data?.code === 400) {
              alert('400 Database Error');
          }
      })
      .catch(error => {
        console.log(error.response.message);  
        // if (error?.response?.status === 401) {
          //     alert(error?.response?.statusText);
          // }
          // else {
          //     alert(error?.response?.statusText);
          // }
      })
}




const createFormData2 = (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name,body) => {
  let array = [];

  let data = new FormData();
  data.append('name', name);
  data.append('email', email);
  data.append('mobile', phone);
  data.append('address', address);
  data.append('pincode', pincode);
  data.append('city', city);
  data.append('state', state);
  data.append('country', country);
  data.append('longitude', '80.21');
  data.append('latitude', '21.55');
  array = profileI;
  for (let i = 0; i < profileI.length; i++) {
      // console.log(array[i]);
      let ext = profileI[i].mime.split('/').pop();
      data.append('userImage', {
          name: 'name' + String(Math.random()) + '.' + ext,
          type: profileI[i].mime,
          uri:
              Platform.OS === 'android'
                  ? profileI[i].path
                  : profileI[i].uri.replace('file://', ''),
      });
  }
  array = profileCover;
  for (let i = 0; i < profileCover.length; i++) {
      // console.log(array[i]);
      let ext = profileCover[i].mime.split('/').pop();
      data.append('coverImage', {
          name: 'name' + String(Math.random()) + '.' + ext,
          type: profileCover[i].mime,
          uri:
              Platform.OS === 'android'
                  ? profileCover[i].path
                  : profileCover[i].uri.replace('file://', ''),
      });
  }

  Object.keys(body).forEach(key => {
      data.append(key, body[key]);
  });
  return data;
};

export default SignupAPI;
