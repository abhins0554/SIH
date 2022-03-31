import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import NewsEventCard from '../Component/Atom/NewsEventCard';
import Header from '../Component/Atom/Header';

function EventScreen(props) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Events'} />
      <ScrollView style={{flex: 1}}>
        <NewsEventCard />
        <NewsEventCard />
        <NewsEventCard />
        <NewsEventCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventScreen;