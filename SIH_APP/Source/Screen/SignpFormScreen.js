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

function SignpScanner({navigation}) {
  const [address, set_address] = useState('');
  const [pincode, set_pincode] = useState('');
  const [aadhar, set_aadhar] = useState('');
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
      <AntDesign
        name="arrowleft"
        style={{textAlign: 'left', margin: 10}}
        size={30}
      />
      <Text style={[styles.subheading, {marginTop: 10}]}>
        Create an account to access all feature
      </Text>
      <TextInput
        label="Address"
        value={address}
        onChangeText={text => set_address(text)}
        style={[styles.inputBoxStyle, {marginTop: 50}]}
      />
      <TextInput
        label="Pincode"
        value={pincode}
        onChangeText={text => set_pincode(text)}
        style={[styles.inputBoxStyle, {marginTop: 20}]}
      />
      <TextInput
        label="Contry"
        // onChangeText={text => set_pincode(text)}
        style={[styles.inputBoxStyle, {marginTop: 20}]}
      />
      <TextInput
        label="Aadhar Number"
        value={aadhar}
        onChangeText={text => set_aadhar(text)}
        style={[styles.inputBoxStyle, {marginTop: 20}]}
      />
      <View style={{flexDirection: 'row',justifyContent:'center'}}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{width: 158, alignSelf: 'center', marginTop: 15,margin:5}}>
          Upload Aadhar
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{width: 158, alignSelf: 'center', marginTop: 15,margin:5}}>
          Upload Selfie
        </Button>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LandingScreen')}
        style={{width: 100, alignSelf: 'center', marginTop: 15}}>
        SignUp
      </Button>
    </SafeAreaView>
  );
}

export default SignpScanner;
