import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import ColorTheme from '../../Theme/ColorTheme';

function ETCard({title, rating, type, places, timing, navigation}) {
  const styles = StyleSheet.create({
    cards: {
      width: Dimensions.get('window').width - 20,
      height: 125,
      alignSelf: 'center',
      flexDirection: 'row',
      backgroundColor: 'lightgrey',
      padding: 7.5,
      borderRadius: 7.5,
      marginVertical: 7,
    },
    resturantName: {
      fontSize: 16,
      fontWeight: '800',
    },
    seperator: {
      width: '100%',
      borderWidth: 0.4,
      marginVertical: 5,
      opacity: 0.3,
    },
  });
  return (
    <TouchableOpacity
      style={styles.cards}
      onPress={() => navigation.navigate('FoodListScreen')}>
      <View style={{flex: 1}}>
        <Image
          source={{
            uri: 'https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg',
          }}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 2, marginHorizontal: 10}}>
        <Text style={styles.resturantName}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" color={ColorTheme.ratingColor} />
          <Text>{rating}</Text>
        </View>
        <Text numberOfLines={1}>{type}</Text>
        <Text>{places}</Text>
        <View style={styles.seperator} />
        <Text>{timing}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ETCard;
