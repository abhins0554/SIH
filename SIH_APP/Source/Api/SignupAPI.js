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
    data.append('address', address);
    data.append('pincode', pincode);
    data.append('country', country);
    data.append('city', city);
    data.append('state', state);
    data.append('adhaar_number', aadhar);
    data.append('latitude',"82.0")
    data.append('longitude',"21.5")

    data.append('gender', gender);
    data.append('dob', moment(dob).format('YYYY/MM/DD'));
    for (let i = 0; i < aadharImage.length; i++) {
      data.append('coverImage', aadharImage[i]);
    }

    for (let i = 0; i < selfieImage.length; i++) {
      data.append('userImage', selfieImage[i]);
    }
    _email_signUp_firebase(email, password, "d", mobile, address, city, state, pincode, country, gender, selfieImage, aadharImage, name, "navigate");


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


const _email_signUp_firebase = async (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate) => {

  auth().createUserWithEmailAndPassword(email,password)
  .then(response=>{
    _apiSignUp(email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate);
  })
  .catch(error=>{
    console.log(error);
  })
}


const _apiSignUp = async (email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate) => {
  const idTokenResult = await auth().currentUser.getIdTokenResult();
  _send_data_to_node_server(idTokenResult.token, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate)
}



const _send_data_to_node_server = async (t, email, password, rpassword, phone, address, city, state, pincode, country, gender, profileI, profileCover, name, navigate) => {
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
  data.append('userImage',profileI);
  data.append('coverImage',profileCover);
  await axios.post(`${BASE_URL}user/signup`, data , {
      headers: {
          authorization: `Bearer ${t}`
      }
  })
      .then(response => {
          console.log(response.data);
          if (response?.data?.code === 200) {
              alert("SignUp Successful, Welcome User");
              setTimeout(() => {
                  // navigate('/home');
              }, 700);
          }
          else if (response?.data?.code === 400) {
              alert('400 Database Error');
          }
      })
      .catch(error => {
          if (error?.response?.status === 401) {
              alert(error?.response?.statusText);
          }
          else {
              alert(error?.response?.statusText);
          }
      })
}

export default SignupAPI;
