import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';
import {NavigationContainer} from '@react-navigation/native';

function LoginScreen({navigation}) {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [password_visible, set_password_visible] = useState(true);

  const changeSTE = async () => {
    set_password_visible(!password_visible);
  };

  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
      backgroundColor: ColorTheme.lightGrey,
    },
    applogo: {
      height: Dimensions.get('window').width / 2,
      width: Dimensions.get('window').width / 2,
      margin: 5,
    },
    logocontainer: {
      backgroundColor: ColorTheme.white,
      alignSelf: 'center',
      marginTop: 15,
      borderRadius: 15,
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
      backgroundColor: 'white',
    },
    forgotPassword: {
      marginHorizontal: 20,
      marginTop: 10,
      textAlign: 'right',
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <View style={styles.logocontainer}>
        <Image
          source={{
            uri: 'https://uttarakhandtourism.gov.in/sites/default/files/2021-09/uttarakhand-logo-english.png',
          }}
          style={styles.applogo}
          resizeMode={'cover'}
        />
      </View>
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subheading}>Log in to your existing account</Text>
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
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LandingScreen')}
        style={{width: 80, alignSelf: 'center', marginTop: 15}}>
        LogIn
      </Button>
      <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>
        Or Connect using Google
      </Text>
      <GoogleSigninButton
        style={{width: 192, height: 48, alignSelf: 'center'}}
        size={GoogleSigninButton.Size.Wide}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>
          Don't have an account? Signup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
