import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from '../Component/Atom/Header';
import AccomodationCard from '../Component/Atom/AccomodationCard';

function AccomodationScreen(props) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Accomodation'} />
      <View style={{flexDirection: 'row'}}>
        <AccomodationCard
          hotel_name={'UNAHotels Deco Roma'}
          price={'500-700'}
          feature={'Wifi,Breakfast,Parking'}
          no_of_reviews={'20'}
          image={
            'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
          }
        />
        <AccomodationCard
          hotel_name={'UNAHotels Deco Roma2'}
          price={'500-700'}
          feature={'Wifi,Breakfast,Parking'}
          no_of_reviews={'600'}
          image={
            'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default AccomodationScreen;
