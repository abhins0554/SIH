import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';

function SignupScreen(props) {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [conf_password, set_conf_password] = useState('');
  const [password_visible, set_password_visible] = useState(true);
  const [mobile, set_mobile] = useState('');
  const [name, set_name] = useState('');

  const changeSTE = async () => {
    set_password_visible(!password_visible);
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
      <AntDesign name="arrowleft" style={{textAlign: 'left', margin: 10}} size={30}/>
      <Text style={[styles.heading,{marginTop:10}]}>Lets Get Started</Text>
      <Text style={[styles.subheading,{marginTop:10}]}>
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
        onPress={() => console.log('Pressed')}
        style={{width: 100, alignSelf: 'center', marginTop: 15}}>
        Next
      </Button>
      <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>
        Have an account? Signin
      </Text>
    </SafeAreaView>
  );
}

export default SignupScreen;
