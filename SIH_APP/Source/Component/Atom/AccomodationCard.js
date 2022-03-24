import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import ColorTheme from '../../Theme/ColorTheme';

function AccomodationCard({
  image,
  hotel_name,
  price,
  feature,
  no_of_reviews,
  rating,
  navigation
}) {
  const styles = StyleSheet.create({
    cardview: {
      flex: 1,
      alignItems: 'center',
      margin: 5,
    },
    hotelimage: {
      width: Dimensions.get('window').width / 2 - 20,
      height: Dimensions.get('window').width / 2 - 20,
      alignSelf: 'center',
      borderRadius: 15,
    },
    hotelName: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: 2,
      color:ColorTheme.textSecondary,
    },
    reviews: {
      fontSize: 12,
      alignSelf: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    featuretxt: {
      fontSize: 12,
      color:ColorTheme.textGrey,
    },
    pricetxt: {
      color: 'red',
    },
  });
  return (
    <TouchableOpacity style={styles.cardview} onPress={()=>navigation.navigate('AccomodationDetailScreen')}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.hotelimage}
      />
      <Text style={styles.hotelName} numberOfLines={1}>
        {hotel_name}
      </Text>
      <Text style={styles.pricetxt}>₹{price}</Text>
      <Text style={styles.featuretxt}>{feature}</Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <AntDesign name="star" color={ColorTheme.ratingColor} />
        <AntDesign name="star" color={ColorTheme.ratingColor} />
        <AntDesign name="star" color={ColorTheme.ratingColor} />
        <AntDesign name="star" color={ColorTheme.ratingColor} />
        <AntDesign name="staro" color={ColorTheme.ratingColor} />
        <Text style={styles.reviews}>{no_of_reviews} Reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

export default AccomodationCard;
