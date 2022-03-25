import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions} from 'react-native';

import {TextInput,Button} from 'react-native-paper';

import Header from '../Component/Atom/Header';

function OtpScreen({navigation}) {
    const [otp,set_otp]=useState("");
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
        <Text style={styles.headingtxt}>Enter OTP</Text>
        <Text style={styles.subheadingtxt}>
          Enter OTP which is send to your email at abhins.0554@gmail.com
        </Text>
        <TextInput
          label="OTP"
          value={otp}
          onChangeText={text => set_otp(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
          maxLength={6}
          keyboardType='number-pad'
        />
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{width: 120, alignSelf: 'center', marginTop: "25%", margin: 5}}>
          Submit
        </Button>
      </SafeAreaView>
    );
}

export default OtpScreen;