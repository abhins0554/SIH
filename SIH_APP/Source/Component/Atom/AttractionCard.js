import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

function AttractionCard(props) {
  const styles = StyleSheet.create({
    cardframe: {
      width: Dimensions.get('window').width - 20,
      height: 220,
      overflow: 'hidden',
      alignSelf: 'center',
      borderRadius: 20,
    },
    img: {
      width: Dimensions.get('window').width - 20,
      height: 220,
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
        <Text>kedarnath Temple</Text>
      </View>
    </View>
  );
}

export default AttractionCard;
