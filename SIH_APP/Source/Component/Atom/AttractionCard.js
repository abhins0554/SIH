import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import ColorTheme from '../../Theme/ColorTheme';

function AttractionCard({navigation, title, subtitle, image}) {
  const styles = StyleSheet.create({
    cardframe: {
      width: Dimensions.get('window').width - 20,
      height: 220,
      overflow: 'hidden',
      alignSelf: 'center',
      borderRadius: 20,
      margin: 8,
    },
    img: {
      width: Dimensions.get('window').width - 20,
      height: 220,
      opacity: 0.5,
      backgroundColor: 'black',
    },
    headingtxt: {
      color: ColorTheme.white,
      marginHorizontal: 7,
      marginTop: 135,
      fontSize: 18,
      fontWeight: 'bold',
    },
    subheadingtxt: {
      color: ColorTheme.white,
      marginHorizontal: 7,
      fontSize: 14,
      marginTop: 5,
    },
  });
  return (
    <TouchableOpacity
      style={styles.cardframe}
      onPress={() =>
        navigation.navigate('AttractionDetails', {subtitle: subtitle})
      }>
      <Image source={{uri: image}} style={styles.img} resizeMode="cover" />
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
        <Text style={styles.headingtxt}>{title}</Text>
        <Text style={styles.subheadingtxt} numberOfLines={2}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default AttractionCard;
