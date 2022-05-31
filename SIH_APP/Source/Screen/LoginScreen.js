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
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';
import {NavigationContainer} from '@react-navigation/native';
import LoginAPI from '../Api/LoginApi';
import axios from 'axios';

function LoginScreen({navigation}) {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');
  const [password_visible, set_password_visible] = useState(true);

  const changeSTE = async () => {
    set_password_visible(!password_visible);
  };

  const _email_pwd_login = async () => {
    // LoginAPI(email, password, navigation);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        LoginAPI(response,navigation,email);
      })
      .catch(error => {
        console.log(error);
      });

      console.log("HAKHS");
  };



  const _sign = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '975075523871-rs932m4h5fj6ji1osbvt4jodpfcsjmh0.apps.googleusercontent.com',
        webClientSecret: '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',
        offlineAccess: true,
        hostedDomain: '',
        loginHint: '',
        forceConsentPrompt: true,
        accountName: '',
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
        userInfo.user,
        userInfo.serverAuthCode,
      );
      const firebaseUserCredential = await auth().signInWithCredential(
        credential,
      );
      console.log('FirebaseUserCredential', firebaseUserCredential);
      console.log('userInfo', userInfo);
      console.log('credential', credential);
      // await AsyncStorage.setItem('email',String(firebaseUserCredential.additionalUserInfo.profile.email + ''),);
      // await AsyncStorage.setItem('name',String(firebaseUserCredential.additionalUserInfo.profile.name),);
      // await AsyncStorage.setItem('userId',String(userInfo.user.id),);
      // updating_fmctoken_data_to_firebase(userInfo);
    } catch (error) {
      // alert(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Please Sign-In to Continue', '', [
          {
            text: 'Sign-in',
            onPress: () => {
              _sign();
            },
          },
          {
            text: 'Exit',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        // alert('success')
        // this.props.navigation.navigate('Main');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        // alert('Play service')
      } else {
        // some other error happened
        alert(error);
      }
    }
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
      <View style={{zIndex: 99}}>
        <Toast />
      </View>
      <ScrollView>
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={() => _email_pwd_login()}
          style={{width: 150, alignSelf: 'center', marginTop: 15}}>
          LogIn
        </Button>
        <Text
          style={[styles.forgotPassword, {textAlign: 'center', width: 250}]}>
          Or Connect using Google
        </Text>
        <GoogleSigninButton
          style={{width: 192, height: 48, alignSelf: 'center'}}
          size={GoogleSigninButton.Size.Wide}
          onPress={_sign}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={[styles.forgotPassword, {textAlign: 'center'}]}>
            Don't have an account? Signup
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
