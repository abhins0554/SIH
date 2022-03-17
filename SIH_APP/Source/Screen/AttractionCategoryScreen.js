import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import AttractionCard from '../Component/Atom/AttractionCard';
import Header from '../Component/Atom/Header';

function AttractionCategoryScreen(props) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Char Dham'} />
      <ScrollView style={{flex: 1}}>
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
        <AttractionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionCategoryScreen;
