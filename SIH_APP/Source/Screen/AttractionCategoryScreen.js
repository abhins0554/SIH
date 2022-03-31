import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import AttractionCard from '../Component/Atom/AttractionCard';
import Header from '../Component/Atom/Header';

function AttractionCategoryScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Char Dham'} />
      <ScrollView style={{flex: 1}}>
        <AttractionCard
          navigation={navigation}
          title={'Kedarnath'}
          subtitle={
            'Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district. '
          }
          image={
            'https://www.euttaranchal.com/tourism/photos/kedarnath-2240900.jpg'
          }
        />
        <AttractionCard
          navigation={navigation}
          title={'Badrinath'}
          image={
            'https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/07/lord-badrinath-temple-lord-vishnu_g.jpeg?fit=1200%2C900&ssl=1'
          }
          subtitle={`Badrinath is a town and nagar panchayat in Chamoli district in the state of Uttarakhand, India. A Hindu holy place, it is one of the four sites in India's Char Dham pilgrimage and is also part of India's Chota Char Dham pilgrimage circuit. It gets its name from the Badrinath Temple`}
        />
        <AttractionCard
          navigation={navigation}
          title={'Yamunotri'}
          image={
            'https://upload.wikimedia.org/wikipedia/commons/8/88/Yamunotri_temple_and_ashram.jpg'
          }
          subtitle={
            'Yamunotri, also Jamnotri, is the source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. '
          }
        />
        <AttractionCard
          navigation={navigation}
          title={'Gangotri'}
          image={'https://static.toiimg.com/img/87566657/Master.jpg'}
          subtitle={
            'Gangotri is a town and a Nagar Panchayat in Uttarkashi district in the state of Uttarakhand, India. It is 99 km from Uttarkashi, the main district headquarter. It is a Hindu pilgrim town on the banks of the river Bhagirathi and origin of the river Ganges.'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionCategoryScreen;
