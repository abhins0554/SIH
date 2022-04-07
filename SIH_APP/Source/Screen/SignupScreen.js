import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';
import validateEmail from '../Validators/EmailValidation';

function SignupScreen({navigation}) {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [conf_password, set_conf_password] = useState('');
  const [password_visible, set_password_visible] = useState(true);
  const [mobile, set_mobile] = useState('');
  const [name, set_name] = useState('');

  const changeSTE = async () => {
    set_password_visible(!password_visible);
  };

  const _send_data_to_new_page = async () => {
    if (
      validateEmail(email) &&
      password &&
      conf_password &&
      mobile &&
      name &&
      password === conf_password &&
      password.length >= 6 &&
      conf_password.length >= 6
    ) {
      navigation.navigate('SignpFormScreen', {
        email: email,
        password: password,
        name: name,
        mobile: mobile,
      });
    } else if (!validateEmail(email) && email !== '') {
      Toast.show({
        type: 'error',
        text1: 'Enter valid email',
        text2: 'Please enter valid email address',
      });
    } else if (email === '') {
      Toast.show({
        type: 'error',
        text1: 'Enter email',
        text2: 'Please enter email address',
      });
    } else if (password === '' || conf_password === '') {
      Toast.show({
        type: 'error',
        text1: 'Enter password',
        text2: 'Please enter password',
      });
    } else if (password !== conf_password) {
      Toast.show({
        type: 'error',
        text1: 'Password and Confirm mismatch',
        text2: 'Please check Password and Confirm match',
      });
    } else if (name === '') {
      Toast.show({
        type: 'error',
        text1: 'Enter Name',
        text2: 'Please enter your full name',
      });
    } else if (mobile === '') {
      Toast.show({
        type: 'error',
        text1: 'Enter Mobile Number',
        text2: 'Please enter valid mobile number',
      });
    }
  };

  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
      backgroundColor: ColorTheme.white,
    },
    heading: {
      textAlign: 'center',
      fontSize: 18,
      color: ColorTheme.black,
      fontWeight: FontTheme.weight.bold,
    },
    subheading: {
      textAlign: 'center',
      fontSize: 15,
      color: 'rgb(104,104,104)',
      fontWeight: FontTheme.weight.normal,
    },
    inputBoxStyle: {
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
      height: 50,
      marginTop: 10,
    },
    forgotPassword: {
      marginHorizontal: 20,
      marginTop: 10,
      textAlign: 'right',
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <View style={{zIndex: 99}}>
        <Toast />
      </View>
      <ScrollView style={{flex: 1}}>
        <AntDesign
          name="arrowleft"
          style={{textAlign: 'left', margin: 10}}
          size={30}
        />
        <Text style={[styles.heading, {marginTop: 10}]}>Lets Get Started</Text>
        <Text style={[styles.subheading, {marginTop: 10}]}>
          Create an account to access all feature
        </Text>
        <TextInput
          label="Name"
          value={name}
          onChangeText={text => set_name(text)}
          style={[styles.inputBoxStyle, {marginTop: 50}]}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => set_email(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => set_password(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
          secureTextEntry={password_visible}
          right={
            password_visible ? (
              <TextInput.Icon name="eye-off" onPress={changeSTE} />
            ) : (
              <TextInput.Icon name="eye" onPress={changeSTE} />
            )
          }
        />
        <TextInput
          label="Confirm Password"
          value={conf_password}
          onChangeText={text => set_conf_password(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
          secureTextEntry={password_visible}
          right={
            password_visible ? (
              <TextInput.Icon name="eye-off" onPress={changeSTE} />
            ) : (
              <TextInput.Icon name="eye" onPress={changeSTE} />
            )
          }
        />
        <TextInput
          label="Mobile"
          value={mobile}
          onChangeText={text => set_mobile(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <Button
          mode="contained"
          onPress={() => _send_data_to_new_page()}
          style={{
            width: Dimensions.get('window').width - 40,
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Next
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>
            Have an account? Signin
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignupScreen;
