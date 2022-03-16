import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

import {Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';

function OTPVerificationScreen(props) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    heading: {
      textAlign: 'center',
      fontSize: 25,
      color: ColorTheme.black,
      fontWeight: FontTheme.weight.bold,
    },
    subheading: {
      textAlign: 'left',
      fontSize: 16,
      color: ColorTheme.black,
      fontWeight: FontTheme.weight.normal,
      marginHorizontal: 25,
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 2,
    },
    underlineStyleHighLighted: {
      borderColor: ColorTheme.black,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <AntDesign
        name="arrowleft"
        style={{textAlign: 'left', margin: 10}}
        size={30}
      />
      <Text style={styles.heading}>Verification</Text>
      <Text style={styles.subheading}>
        {'We have send a Verification code at \n user@gmail.com'}
      </Text>
      <OTPInputView
        style={{width: '80%', height: 200,alignSelf:"center"}}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
        placeholderTextColor={ColorTheme.black}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{width: 100, alignSelf: 'center', marginTop: 15}}>
        Verify
      </Button>
    </SafeAreaView>
  );
}

export default OTPVerificationScreen;
