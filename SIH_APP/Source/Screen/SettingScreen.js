import React from 'react';
import {SafeAreaView, StyleSheet, Text, Modal, View} from 'react-native';

import Header from '../Component/Atom/Header';
import ColorTheme from '../Theme/ColorTheme';

function SettingScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    headingtxt:{
        fontSize:16,
        marginHorizontal:20,
        fontWeight:'bold',
        marginTop:25
    },
    pickerbody: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor:ColorTheme.borderColor,
      marginHorizontal:20,
      marginTop:15,
      padding:10
    },
    pickertext:{
        fontSize:16
    },
    seperator: {
        borderColor: '#E5E5E5',
        borderBottomWidth: 1,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
      },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Setting'} navigation={navigation} />
      <Text style={styles.headingtxt}>Select Langage</Text>
      <View style={styles.pickerbody}>
        <Text style={styles.pickertext}>English</Text>
      </View>
      <Text style={styles.headingtxt}>My Profile</Text>
      <View style={styles.seperator}/>
      <Text style={styles.headingtxt}>Policy</Text>
      <View style={styles.seperator}/>
      <Text style={styles.headingtxt}>Terms & Condition</Text>
      <View style={styles.seperator}/>
      <Text style={styles.headingtxt}>Log Out</Text>
    </SafeAreaView>
  );
}

export default SettingScreen;
