import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

import FontTheme from "../../Theme/FontTheme";
import ColorTheme from '../../Theme/ColorTheme';

function Header({title}) {
  const styles = StyleSheet.create({
    headerbody:{
        width:'100%',height:50,
        flexDirection:"row",
        alignSelf:"center"
    },
    heading: {
        flex:10,
        textAlign: 'center',
        fontSize: 25,
        color: ColorTheme.black,
        fontWeight: FontTheme.weight.normal,
        alignSelf:'center',
      },
  });
  return (
    <View style={styles.headerbody}>
      <AntDesign
        name="arrowleft"
        style={{textAlign: 'left', margin: 10,flex:1}}
        size={30}
        color={ColorTheme.black}
      />
      <Text style={styles.heading}>{title}</Text>
      <Octicons
        name="three-bars"
        style={{textAlign: 'left', margin: 10,flex:1}}
        size={30}
        color={ColorTheme.black}
      />
    </View>
  );
}

export default Header;
