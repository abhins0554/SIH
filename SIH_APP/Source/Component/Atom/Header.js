import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

import FontTheme from '../../Theme/FontTheme';
import ColorTheme from '../../Theme/ColorTheme';
import Drawer from '../../Component/Organism/Drawer';

function Header({title, navigation}) {
  const [modalState, setmodalState] = useState(false);
  const modalToggle = async () => {
    setmodalState(!modalState);
  };
  const styles = StyleSheet.create({
    headerbody: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignSelf: 'center',
    },
    heading: {
      flex: 10,
      textAlign: 'center',
      fontSize: 25,
      color: ColorTheme.primary,
      fontWeight: FontTheme.weight.normal,
      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.headerbody}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          style={{textAlign: 'left', margin: 10, flex: 1}}
          size={30}
          color={ColorTheme.primary}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <TouchableOpacity onPress={modalToggle}>
        {title !== '' ? (
          <Octicons
            name="three-bars"
            style={{textAlign: 'left', margin: 10, flex: 1}}
            size={30}
            color={ColorTheme.primary}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
      <Drawer
        navigation={navigation}
        modalState={modalState}
        modalToggle={modalToggle}
      />
    </View>
  );
}

export default Header;
