import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {TextInput, Button} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';
import SignupAPI from '../Api/SignupAPI';

function SignpScanner({navigation, route}) {
  const [address, set_address] = useState('');
  const [pincode, set_pincode] = useState('');
  const [aadhar, set_aadhar] = useState('');
  const [city, set_city] = useState('');
  const [state, set_state] = useState('');
  const [country, set_country] = useState('');
  const [gender, set_gender] = useState('');
  const [dob, set_dob] = useState(new Date());
  const [aadharImage, setaadharImage] = useState([]);
  const [selfieImage, setselfieImage] = useState([]);

  const [aadharImagePicked, setaadharImagePicked] = useState(false);
  const [selfieImagePicked, setselfieImagePicked] = useState(false);

  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    set_dob(currentDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const _signUP = async () => {
    if (aadharImagePicked && selfieImagePicked) {
      SignupAPI(
        route?.params?.email,
        route?.params?.password,
        route?.params?.name,
        route?.params?.mobile,
        route?.params?.googleId,
        address,
        pincode,
        aadhar,
        city,
        state,
        country,
        dob,
        gender,
        aadharImage,
        selfieImage,
      );
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please Upload Images',
        text2: 'Please upload aadhar and selfie images',
      });
    }
  };

  const _pickAADHAR_Image = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 150,
      cropping: false,
      useFrontCamera: false,
      showCropFrame: false,
      showCropGuidelines: false,
      freeStyleCropEnabled: false,
    })
      .then(image => {
        let temp = [];
        temp.push(image);
        setaadharImage(temp);
        setaadharImagePicked(temp.length !== 0 ? true : false);
      })
      .catch(error => {
        setaadharImagePicked(false);
      });
  };

  const _pickSELFIE_Image = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 150,
      cropping: false,
      useFrontCamera: true,
      showCropFrame: false,
      freeStyleCropEnabled: false,
    })
      .then(image => {
        let temp = [];
        temp.push(image);
        setselfieImage(temp);
        setselfieImagePicked(temp.length !== 0 ? true : false);
      })
      .catch(error => {
        setselfieImagePicked(false);
      });
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
    imagePickerstyle: {
      width: 150,
      height: 75,
      alignSelf: 'center',
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
          label="City"
          value={city}
          onChangeText={text => set_city(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="State"
          value={state}
          onChangeText={text => set_state(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Country"
          value={country}
          onChangeText={text => set_country(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <TextInput
          label="Aadhar Number"
          value={aadhar}
          onChangeText={text => set_aadhar(text)}
          style={[styles.inputBoxStyle, {marginTop: 20}]}
        />
        <View
          style={[
            {
              borderBottomWidth: 1,
              marginTop: 10,
              height: 60,
              borderColor: 'grey',
              width: Dimensions.get('window').width - 40,
              alignSelf: 'center',
              backgroundColor: 'lightgrey',
            },
          ]}>
          <Picker
            selectedValue={gender}
            placeholder="Select Gender"
            style={[styles.inputBoxStyle]}
            onValueChange={(itemValue, itemIndex) => set_gender(itemValue)}>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="M" />
            <Picker.Item label="Female" value="F" />
            <Picker.Item label="Other" value="O" />
          </Picker>
        </View>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            marginTop: 10,
            height: 30,
            borderColor: 'grey',
            width: Dimensions.get('window').width - 40,
            alignSelf: 'center',
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
          }}
          onPress={() => setShow(true)}>
          <Text style={{textAlign: 'left', fontSize: 20, marginHorizontal: 10}}>
            Select DOB :- {moment(dob).format('DD/MM/YYYY')}
          </Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          icon="camera"
          onPress={() => _pickAADHAR_Image()}
          style={{width: 190, alignSelf: 'center', marginTop: 15, margin: 5}}>
          Upload Aadhar
        </Button>
        {aadharImagePicked ? (
          <View>
            <Image
              source={{uri: aadharImage[0].path}}
              style={styles.imagePickerstyle}
            />
          </View>
        ) : null}
        <Button
          mode="contained"
          icon="camera"
          onPress={() => _pickSELFIE_Image()}
          style={{width: 190, alignSelf: 'center', marginTop: 15, margin: 5}}>
          Upload Selfie
        </Button>
        {selfieImagePicked ? (
          <View>
            <Image
              source={{uri: selfieImage[0].path}}
              style={styles.imagePickerstyle}
            />
          </View>
        ) : null}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dob}
            mode={'date'}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Button
          mode="contained"
          onPress={() => _signUP()}
          style={{
            width: 100,
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 50,
          }}>
          SignUp
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignpScanner;
