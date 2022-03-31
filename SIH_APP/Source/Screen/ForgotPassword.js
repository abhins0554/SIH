import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions} from 'react-native';

import {TextInput,Button} from 'react-native-paper';

import Header from '../Component/Atom/Header';

function ForgotPassword({navigation}) {
  const [email, set_email] = useState('');
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    inputBoxStyle: {
      width: Dimensions.get('window').width - 20,
      alignSelf: 'center',
    },
    headingtxt: {
      fontSize: 20,
      marginHorizontal: 20,
      marginTop: 15,
      color: 'black',
    },
    subheadingtxt: {
      fontSize: 16,
      marginHorizontal: 20,
      marginTop: 5,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={''} navigation={navigation} />
      <Text style={styles.headingtxt}>Forgot Password</Text>
      <Text style={styles.subheadingtxt}>
        Enter your email and an otp will be send to your email.
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => set_email(text)}
        style={[styles.inputBoxStyle, {marginTop: 20}]}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('OtpScreen')}
        style={{width: 120, alignSelf: 'center', marginTop: "25%", margin: 5}}>
        Submit
      </Button>
    </SafeAreaView>
  );
}

export default ForgotPassword;
