import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Dimensions,ScrollView} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Component/Atom/Header';
import ColorTheme from '../Theme/ColorTheme';

function AttractionDetails({navigation}) {
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
    icons: {
      textAlign: 'center',
      color: ColorTheme.primary,
      fontSize: 35,
    },
    icontxt: {
      textAlign: 'center',
      color: ColorTheme.primary,
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
      <ScrollView style={{flex:1}}>
      <SliderBox
        images={images}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        sliderBoxHeight={240}
      />
      <View style={{position: 'absolute'}}>
        {/* <Text style={styles.headingimage}>Kedarnath</Text> */}
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Feather name="info" style={styles.icons} />
          <Text style={styles.icontxt}>Information</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Feather name="video" style={styles.icons} />
          <Text style={styles.icontxt}>Video</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <MaterialCommunityIcons name="near-me" style={styles.icons} />
          <Text style={styles.icontxt}>Nearby</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderColor: 'lightgrey',
          borderWidth: 1,
          marginBottom: 10,
        }}
      />
      <Text
        style={
          styles.descriptiontxt
        }>{`At that moment he had a thought that he'd never imagine he'd consider. "I could just cheat," he thought, "and that would solve the problem." He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to.
The wave roared towards them with speed and violence they had not anticipated. They both turned to run but by that time it was too late. The wave crashed into their legs sweeping both of them off of their feet. They now found themselves in a washing machine of saltwater, getting tumbled and not know what was up or down. Both were scared, not knowing how this was going to end, but it was by far the best time of the trip thus far.`}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
        <View style={{flexDirection: 'row',alignSelf:'center'}}>
            <Text style={{color:ColorTheme.textPrimary,fontSize:20}}>14.2</Text>
            <Text style={{color:ColorTheme.textSecondary,marginTop:5,marginHorizontal:5}}>KM</Text>
          </View>
          <Text style={{textAlign:'center',color:ColorTheme.textSecondary}}>Distance</Text>
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row',alignSelf:'center'}}>
          <Text style={{color:ColorTheme.textPrimary,fontSize:20}}>~30</Text>
          <Text style={{color:ColorTheme.textSecondary,marginTop:5,marginHorizontal:5}}>min</Text>
          </View>
          <Text style={{textAlign:'center',color:ColorTheme.textSecondary}}>Duration</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionDetails;
