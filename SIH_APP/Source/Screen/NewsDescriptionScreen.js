import moment from 'moment';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,ScrollView} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

import Header from '../Component/Atom/Header';
import { BASE_URL,Image_BASE_URL } from '../Constant/Constant';
import ColorTheme from '../Theme/ColorTheme';

function NewsDescriptionScreen({navigation,route}) {
  const images = [
    `${Image_BASE_URL}${route?.params?.item?.image}`,
  ];
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    mainheading: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'justify',
      color: ColorTheme.textPrimary,
      marginTop: 7.5,
    },
    mainbodytxt: {
      fontSize: 14,
      fontWeight: '400',
      textAlign: 'justify',
      marginTop: 7.5,
      color: ColorTheme.textSecondary,
    },
    datetxt: {
      marginTop: 5,
      color: ColorTheme.textSecondary,
    },
    barsSeperator: {
      height: 3,
      width: 60,
      backgroundColor: ColorTheme.primary,
      marginTop: 20,
      marginBottom: 20,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'News'} />
      <ScrollView>
      <SliderBox
        images={images}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        sliderBoxHeight={240}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.datetxt}>{moment(route?.params?.item?.createdOn).format('DD-MM-YYYY')}</Text>
        <Text style={styles.mainheading}>
         {route?.params?.item?.title}
        </Text>
        <View style={styles.barsSeperator} />
        <Text style={styles.mainbodytxt}>
          {route?.params?.item?.description}
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsDescriptionScreen;
