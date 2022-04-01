import moment from 'moment';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

import Header from '../Component/Atom/Header';
import ColorTheme from '../Theme/ColorTheme';

function NewsDescriptionScreen({navigation}) {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
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
      <SliderBox
        images={images}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        sliderBoxHeight={240}
      />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.datetxt}>{moment().format('DD-MM-YYYY')}</Text>
        <Text style={styles.mainheading}>
          A new tiger resioure is open in the distruic of tamil naidu and will
          conserver over 200 tigher
        </Text>
        <View style={styles.barsSeperator} />
        <Text style={styles.mainbodytxt}>
          A new tiger resioure is open in the distruic of tamil naidu and will
          conserver over 200 tigher A new tiger resioure is open in the distruic
          of tamil naidu and will conserver over 200 tigher A new tiger resioure
          is open in the distruic of tamil naidu and will conserver over 200
          tigher A new tiger resioure is open in the distruic of tamil naidu and
          will conserver over 200 tigher A new tiger resioure is open in the
          distruic of tamil naidu and will conserver over 200 tigher
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default NewsDescriptionScreen;
