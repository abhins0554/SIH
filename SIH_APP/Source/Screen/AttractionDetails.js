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
import VideoPlayer from 'react-native-video-player';
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';

import Header from '../Component/Atom/Header';
import {BASE_URL, Image_BASE_URL} from '../Constant/Constant';
import ColorTheme from '../Theme/ColorTheme';

function AttractionDetails({navigation, route}) {
  const [active_tab, set_active_tab] = useState('info');
  const images = [route.params.item.category=="other" ? `${route?.params?.item?.image}` :`${Image_BASE_URL}${route?.params?.item?.image}`];
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
      <Header navigation={navigation} title={route?.params?.item?.name} />
      <ScrollView style={{flex: 1}}>
        <SliderBox images={images} sliderBoxHeight={240} />
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
            onPress={() => {route.params.item.category=="other" ?"":set_active_tab('video')}}>
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
            <Text style={styles.descriptiontxt}>
              {route?.params?.item?.description}
            </Text>
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
            {
              route.params.item.category=="other" ?
              <>
              </>
              :
              <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Nodal Officer :- {route?.params?.item?.phone}
            </Text>
            }

            {/* <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Website :- kedarnath.gov.in
            </Text> */}
            {
              route.params.item.category=="other" ?
              <>
              </>
              :
              <Text
              style={{
                textAlign: 'left',
                color: ColorTheme.textSecondary,
                marginHorizontal: 20,
                fontSize: 18,
                fontWeight: '700',
                marginVertical: 20,
              }}>
              Email :- {route?.params?.item?.email}
            </Text>
            }
          </>
        ) : active_tab === 'video' ? (
          <>
            <WebView
              style={{
                marginTop: Platform.OS == 'ios' ? 20 : 0,
                height: 250,
                width: '100%',
                backgroundColor:'black'
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: `https://www.youtube.com/embed/${route?.params?.item?.video.split('https://youtu.be/')[1]}`}}
            />
          </>
        ) : active_tab === 'nearby' ? (
          <></>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionDetails;
