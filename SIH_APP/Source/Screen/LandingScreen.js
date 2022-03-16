import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';

function LandingScreen(props) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    bgimage: {
      flex: 1,
    },
    bodyContainer: {
      flex: 1,
    },
    applogo: {
      height: Dimensions.get('window').width / 2,
      width: Dimensions.get('window').width / 2,
      margin: 5,
    },
    logocontainer: {
      backgroundColor: ColorTheme.lightGrey,
      alignSelf: 'center',
      marginTop: 25,
      borderRadius: 15,
    },
    subplacetext: {
      fontSize: 25,
      fontWeight: FontTheme.weight.semi,
      color: ColorTheme.white,
      textAlign: 'center',
      marginTop: 15,
    },
    subtext: {
      fontSize: 16,
      fontWeight: FontTheme.weight.low,
      color: ColorTheme.white,
      textAlign: 'center',
      marginTop: 5,
    },
    timeWeatherContainer: {
      flexDirection: 'row',
      marginTop: 25,
    },
    informationContentStart: {
      flex: 1,
      backgroundColor: ColorTheme.white,
      marginTop: 10,
    },
    infoIcons: {
      textAlign: 'center',
    },
    datacontainer:{
      flex: 1,
      justifyContent:'center',
      margin:1,
      backgroundColor:'white'
    },
  });

  return (
    <SafeAreaView style={styles.mainframe}>
      <ImageBackground
        source={require('../Assets/Image/kedarnath.jpg')}
        style={styles.bgimage}>
        <View style={styles.bodyContainer}>
          <View style={styles.logocontainer}>
            <Image
              source={{
                uri: 'https://uttarakhandtourism.gov.in/sites/default/files/2021-09/uttarakhand-logo-english.png',
              }}
              style={styles.applogo}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.subplacetext}>Dehradun</Text>
          <Text style={styles.subtext}>Capital of Uttarakhand</Text>
          <View style={styles.timeWeatherContainer}>
            <View style={[styles.bodyContainer, {flexDirection: 'column'}]}>
              <Text style={[styles.subtext, {fontSize: 12}]}>Local Time</Text>
              <Text style={[styles.subplacetext, {marginTop: 5}]}>
                10:30 PM
              </Text>
              <Text style={[styles.subtext, {fontSize: 12}]}>10/12/2029</Text>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={[styles.subtext, {fontSize: 12}]}>TODAY</Text>
              <Text style={[styles.subplacetext, {marginTop: 5}]}>-2°C</Text>
              <Text style={[styles.subtext, {fontSize: 12}]}>
                Statterred Cloudy
              </Text>
            </View>
          </View>
          <View style={styles.informationContentStart}>
            <View style={{flex: 1, flexDirection: 'row',backgroundColor:'grey'}}>
              <TouchableOpacity style={styles.datacontainer}>
                <MaterialIcons
                  name="attractions"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  Attractions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.datacontainer}>
                <MaterialIcons
                  name="food-bank"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  {'Eat & Drink'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.datacontainer}>
                <MaterialIcons
                  name="shopping-bag"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  Accomodation
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row',backgroundColor:'grey'}}>
              <TouchableOpacity style={styles.datacontainer}>
                <MaterialIcons
                  name="event"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  Events
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.datacontainer}>
                <Ionicons
                  name="newspaper-outline"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  News
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.datacontainer}>
                <Octicons
                  name="three-bars"
                  size={35}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.black},
                  ]}>
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default LandingScreen;
