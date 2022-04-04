import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

import Header from '../Component/Atom/Header';
import AccomodationCard from '../Component/Atom/AccomodationCard';

function AccomodationScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Accomodation'} />
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <AccomodationCard
            hotel_name={'UNAHotels Deco Roma'}
            price={'600'}
            feature={'Wifi, Breakfast, Parking'}
            no_of_reviews={'20'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
          <AccomodationCard
            hotel_name={'UNAHotels Deco Roma2'}
            price={'900'}
            feature={'Breakfast, Parking'}
            no_of_reviews={'600'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <AccomodationCard
            hotel_name={'Amit Internation'}
            price={'600'}
            feature={'Wifi, Breakfast, Parking'}
            no_of_reviews={'20'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
          <AccomodationCard
            hotel_name={'Dream Night Stay'}
            price={'900'}
            feature={'Breakfast, Parking'}
            no_of_reviews={'600'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <AccomodationCard
            hotel_name={'UNAHotels Deco Roma'}
            price={'600'}
            feature={'Wifi, Breakfast, Parking'}
            no_of_reviews={'20'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
          <AccomodationCard
            hotel_name={'UNAHotels Deco Roma2'}
            price={'900'}
            feature={'Breakfast, Parking'}
            no_of_reviews={'600'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <AccomodationCard
            hotel_name={'Amit Internation'}
            price={'600'}
            feature={'Wifi, Breakfast, Parking'}
            no_of_reviews={'20'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
          <AccomodationCard
            hotel_name={'Dream Night Stay'}
            price={'900'}
            feature={'Breakfast, Parking'}
            no_of_reviews={'600'}
            image={
              'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg'
            }
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccomodationScreen;
