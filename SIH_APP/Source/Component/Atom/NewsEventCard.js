import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';
import { BASE_URL } from '../../Constant/Constant';

import ColorTheme from "../../Theme/ColorTheme";

function NewsEventCard({navigation,item}) {
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
    <TouchableOpacity style={styles.cardframe} onPress={navigation}>
      <Image
        source={{uri:`${BASE_URL}${item.image}`}}
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
        <Text style={styles.headingtxt} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.subheadingtxt} numberOfLines={1}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default NewsEventCard;
