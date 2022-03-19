import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import NewsEventCard from '../Component/Atom/NewsEventCard';
import Header from '../Component/Atom/Header';

function NewsScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'News'} />
      <ScrollView style={{flex: 1}}>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
        <NewsEventCard navigation={()=>navigation.navigate('NewsDescriptionScreen')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsScreen;
