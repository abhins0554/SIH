import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import ColorTheme from "../../Theme/ColorTheme";

function AttractionCard(props) {
  const styles = StyleSheet.create({
    cardframe: {
      width: Dimensions.get('window').width - 20,
      height: 220,
      overflow: 'hidden',
      alignSelf: 'center',
      borderRadius: 20,
      margin:8,
    },
    img: {
      width: Dimensions.get('window').width - 20,
      height: 220,
    },
    headingtxt:{
      color:ColorTheme.white,
      marginHorizontal:7,
      marginTop:135,
      fontSize:18,
      fontWeight:'bold'
    },
    subheadingtxt:{
      color:ColorTheme.white,
      marginHorizontal:7,
      fontSize:14,
      marginTop:5,
    },
  });
  return (
    <View style={styles.cardframe}>
      <Image
        source={require('../../Assets/Image/kedarnath.jpg')}
        style={styles.img}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          opacity: 0.2,
        }}
      />
      <View style={{position: 'absolute'}}>
        <Text style={styles.headingtxt}>Kedarnath Temple</Text>
        <Text style={styles.subheadingtxt}>A Kedarnath is a place to find th degnighty of shiva.</Text>
      </View>
    </View>
  );
}

export default AttractionCard;
