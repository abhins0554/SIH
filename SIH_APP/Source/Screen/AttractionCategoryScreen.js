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
        <AttractionCard navigation={navigation} />
        <AttractionCard navigation={navigation} />
        <AttractionCard navigation={navigation} />
        <AttractionCard navigation={navigation} />
        <AttractionCard navigation={navigation} />
        <AttractionCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionCategoryScreen;
