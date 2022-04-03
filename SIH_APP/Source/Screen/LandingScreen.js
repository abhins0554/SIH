import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';
import _fetch_weather from '../Api/WeatherApi';
import LandingScreenServices from '../Services/LandingScreenServices';

function LandingScreen({navigation}) {
  const dispatch = useDispatch();

  const [more_modal, set_more_modal] = useState(false);
  const [show_nearby, set_show_nearby] = useState(false);
  const weather_data = useSelector(state => state.weather.weather);

  React.useEffect(() => {
    fetch_weather_Report();
  }, []);

  const fetch_weather_Report = async () => {
    await LandingScreenServices.fetch_weather(dispatch);
  };

  function upperCaseConverter(mySentence) {
    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
      letter.toUpperCase(),
    );
    return finalSentence;
  }

  function kelvinToCelsiusConverter(Kelvin) {
    let Celsius = Kelvin - 273.15;
    return Celsius.toFixed(2);
  }

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
      height: Dimensions.get('window').width / 2.8,
      width: Dimensions.get('window').width / 2.8,
      margin: 5,
    },
    logocontainer: {
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 25,
      borderRadius: 15,
    },
    subplacetext: {
      fontSize: 25,
      fontWeight: FontTheme.weight.semi,
      color: ColorTheme.white,
      textAlign: 'center',
      marginTop: 45,
      marginBottom: 20,
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
      marginTop: 45,
    },
    informationContentStart: {
      flex: 1,
      backgroundColor: ColorTheme.white,
      marginTop: 10,
    },
    infoIcons: {
      borderRadius: 360,
      height: Dimensions.get('window').width / 5,
      width: Dimensions.get('window').width / 5,
      alignSelf: 'center',
    },
    datacontainer: {
      flex: 1,
      justifyContent: 'center',
      margin: 1,
      backgroundColor: 'white',
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
          <Text style={styles.subplacetext}>{weather_data?.name}</Text>
          <View style={styles.timeWeatherContainer}>
            <View style={[styles.bodyContainer, {flexDirection: 'column'}]}>
              <Text style={[styles.subtext, {fontSize: 12}]}>Local Time</Text>
              <Text
                style={[styles.subplacetext, {marginTop: 5, marginBottom: 5}]}>
                {moment().utcOffset('+0530').format('HH:MM A')}
              </Text>
              <Text style={[styles.subtext, {fontSize: 12}]}>10/12/2029</Text>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={[styles.subtext, {fontSize: 12}]}>TODAY</Text>
              <Text
                style={[styles.subplacetext, {marginTop: 5, marginBottom: 5}]}>
                {kelvinToCelsiusConverter(weather_data?.main?.temp)}°C
              </Text>
              <Text style={[styles.subtext, {fontSize: 12}]}>
                {upperCaseConverter(
                  weather_data !== {}
                    ? weather_data?.weather[0]?.description
                    : '',
                )}
              </Text>
            </View>
          </View>
          <View style={styles.informationContentStart}>
            <View
              style={{flex: 1, flexDirection: 'row', backgroundColor: 'grey'}}>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => navigation.navigate('AttractionScreen')}>
                <Image
                  source={require('../Assets/Image/attraction.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  Attractions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => navigation.navigate('EatndrinkScreen')}>
                <Image
                  source={require('../Assets/Image/fooddrink.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  {'Eat & Drink'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => navigation.navigate('AccomodationScreen')}>
                <Image
                  source={require('../Assets/Image/accomodation.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  Accomodation
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row', backgroundColor: 'grey'}}>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => navigation.navigate('EventScreen')}>
                <Image
                  source={require('../Assets/Image/event.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  Events
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => navigation.navigate('NewsScreen')}>
                <Image
                  source={require('../Assets/Image/news.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  News
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.datacontainer}
                onPress={() => set_more_modal(!more_modal)}>
                <Image
                  source={require('../Assets/Image/more.png')}
                  style={styles.infoIcons}
                />
                <Text
                  style={[
                    styles.subtext,
                    {fontSize: 16, color: ColorTheme.primary},
                  ]}>
                  More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Modal
        visible={more_modal}
        onRequestClose={() => set_more_modal(!more_modal)}
        transparent={true}
        animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View style={{backgroundColor: 'white'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SuggestionComplaints')}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  margin: 7,
                  borderWidth: 1,
                  padding: 10,
                  textAlign: 'center',
                }}>
                Suggestion & Complaints
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                marginHorizontal: 7,
              }}
              onPress={() => set_show_nearby(!show_nearby)}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  margin: 7,
                  flex: 1,
                  padding: 10,
                  textAlign: 'center',
                }}>
                Near By
              </Text>
              {show_nearby ? (
                <AntDesign
                  name="up"
                  size={30}
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    textAlign: 'center',
                  }}
                />
              ) : (
                <AntDesign
                  name="down"
                  size={30}
                  style={{justifyContent: 'center'}}
                />
              )}
            </TouchableOpacity>
            {show_nearby ? (
              <>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    margin: 7,
                    borderWidth: 1,
                    padding: 10,
                    textAlign: 'center',
                  }}>
                  Hospital
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    margin: 7,
                    borderWidth: 1,
                    padding: 10,
                    textAlign: 'center',
                  }}>
                  Police Station
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    margin: 7,
                    borderWidth: 1,
                    padding: 10,
                    textAlign: 'center',
                  }}>
                  Public Toilets
                </Text>
              </>
            ) : null}
            <TouchableOpacity onPress={() => set_more_modal(!more_modal)}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  margin: 7,
                  borderWidth: 1,
                  padding: 10,
                  textAlign: 'center',
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default LandingScreen;
