import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../Component/Atom/Header';

function SuggestionComplaints({naviagtion}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    inputBoxStyle: {
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
      height: 50,
      marginTop: 10,
      backgroundColor: 'white',
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Suggestion'} navigation={naviagtion} />
      <ScrollView>
        <TextInput
          label="Name"
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Email"
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Phone Number"
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Address"
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Pincode"
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Suggestion  Complaint"
          multiline={true}
          style={[styles.inputBoxStyle, {marginTop: 20, height: 200}]}
        />
        <Button
          icon="camera"
          mode="contained"
          style={{
            width: 180,
            alignSelf: 'center',
            marginBottom: 25,
            marginTop: 20,
          }}
          onPress={() => console.log('Pressed')}>
          Add Images
        </Button>
        <Button
          mode="contained"
          style={{
            width: 180,
            alignSelf: 'center',
            marginBottom: 25,
            marginTop: 35,
          }}
          onPress={() => console.log('Pressed')}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SuggestionComplaints;
