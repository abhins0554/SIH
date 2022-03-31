import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Component/Atom/Header';
import ColorTheme from '../Theme/ColorTheme';

function AttractionDetails({navigation, route}) {
  const [active_tab, set_active_tab] = useState('info');
  const images = [
    'https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg',
    'https://static.toiimg.com/thumb/75601271.cms?resizemode=75&width=1200&height=900',
    'https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg',
  ];
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    icons: {
      textAlign: 'center',
      fontSize: 35,
    },
    icontxt: {
      textAlign: 'center',
    },
    descriptiontxt: {
      fontSize: 18,
      textAlign: 'justify',
      marginHorizontal: 20,
    },
    headingimage: {
      marginTop: 200,
      color: ColorTheme.secondary,
      backgroundColor: 'white',
      marginHorizontal: 5,
      padding: 2.5,
      fontSize: 22,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Kedarnath'} />
      <ScrollView style={{flex: 1}}>
        <SliderBox
          images={images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          sliderBoxHeight={240}
        />
        <View style={{position: 'absolute'}}>
          {/* <Text style={styles.headingimage}>Kedarnath</Text> */}
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'column'}}
            onPress={() => set_active_tab('info')}>
            <Feather
              name="info"
              style={styles.icons}
              color={
                active_tab === 'info' ? ColorTheme.primary : ColorTheme.textGrey
              }
            />
            <Text
              style={[
                styles.icontxt,
                {
                  color:
                    active_tab === 'info'
                      ? ColorTheme.primary
                      : ColorTheme.textGrey,
                },
              ]}>
              Information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'column'}}
            onPress={() => set_active_tab('video')}>
            <Feather
              name="video"
              style={styles.icons}
              color={
                active_tab === 'video'
                  ? ColorTheme.primary
                  : ColorTheme.textGrey
              }
            />
            <Text
              style={[
                styles.icontxt,
                {
                  color:
                    active_tab === 'video'
                      ? ColorTheme.primary
                      : ColorTheme.textGrey,
                },
              ]}>
              Video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, flexDirection: 'column'}}
            onPress={() => set_active_tab('nearby')}>
            <MaterialCommunityIcons
              name="near-me"
              style={styles.icons}
              color={
                active_tab === 'nearby'
                  ? ColorTheme.primary
                  : ColorTheme.textGrey
              }
            />
            <Text
              style={[
                styles.icontxt,
                {
                  color:
                    active_tab === 'nearby'
                      ? ColorTheme.primary
                      : ColorTheme.textGrey,
                },
              ]}>
              Nearby
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginBottom: 10,
          }}
        />
        {active_tab === 'info' ? (
          <>
            <Text style={styles.descriptiontxt}>{route.params.subtitle}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Text style={{color: ColorTheme.textPrimary, fontSize: 20}}>
                    14.2
                  </Text>
                  <Text
                    style={{
                      color: ColorTheme.textSecondary,
                      marginTop: 5,
                      marginHorizontal: 5,
                    }}>
                    KM
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: ColorTheme.textSecondary,
                  }}>
                  Distance
                </Text>
              </View>
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Text style={{color: ColorTheme.textPrimary, fontSize: 20}}>
                    ~30
                  </Text>
                  <Text
                    style={{
                      color: ColorTheme.textSecondary,
                      marginTop: 5,
                      marginHorizontal: 5,
                    }}>
                    min
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: ColorTheme.textSecondary,
                  }}>
                  Duration
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg',
              }}
              style={{width: '100%', height: 200}}
            />
            <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Nodal Officer :- +919876543210
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Website :- kedarnath.gov.in
            </Text>
            <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Email :- kedarnath@gov.in
            </Text>
          </>
        ) : active_tab === 'video' ? (
          <></>
        ) : active_tab === 'nearby' ? (
          <></>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionDetails;
