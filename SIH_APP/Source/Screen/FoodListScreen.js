import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../Component/Atom/Header';
import ETCategoryCard from '../Component/Molecule/ETCategoryCard';
import colors from '../Theme/ColorTheme';

function FoodListScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Kiva - Cafe'} navigation={navigation} />
      <ETCategoryCard category="Recommended (2)" />
      <ETCategoryCard category="Stater (5)" />
      <ETCategoryCard category="Main Course (10)" />
    </SafeAreaView>
  );
}

export default FoodListScreen;
