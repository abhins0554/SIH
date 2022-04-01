import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Header from '../Component/Atom/Header';
import ETCard from '../Component/Molecule/ETCard';

function EatndrinkScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Eat & Drink'} navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <ETCard
          title="Kiva - Cafe.Music"
          rating="4.1 (80+)"
          type="Cafe, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Arjun Dhaba"
          rating="4.6 (220+)"
          type="Dhabha"
          places="Ay Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Dhilllon Hotel"
          rating="4.1 (80+)"
          type="Hotel, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Amit International"
          rating="4.1 (80+)"
          type="Hotel, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Kiva - Cafe.Music"
          rating="4.1 (80+)"
          type="Cafe, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Kiva - Cafe.Music"
          rating="4.1 (80+)"
          type="Cafe, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
        <ETCard
          title="Kiva - Cafe.Music"
          rating="4.1 (80+)"
          type="Cafe, Pizza, Continental, Chinese"
          places="Xy Nagar"
          timing="12 AM"
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default EatndrinkScreen;
