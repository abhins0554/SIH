import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../Theme/ColorTheme';
import {BASE_URL} from '../../Constant/Constant';

function Drawer({navigation, modalState, modalToggle}) {
  const userData = useSelector(s => s.userdata.userdata);

  const _logout = async () => {
    AsyncStorage.clear();
    RNRestart.Restart();
  };

  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
      flexDirection: 'row',
    },
    blankspace: {
      flex: 2,
    },
    drawerContainer: {
      flex: 3,
      backgroundColor: colors.white,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 45,
    },
    userProfilePicture: {
      height: 150,
      width: 150,
      alignSelf: 'center',
      borderRadius: 360,
    },
    seperator: {
      borderColor: '#E5E5E5',
      borderBottomWidth: 1,
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15,
    },
    userName: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.black,
      marginVertical: 10,
      alignSelf: 'center',
    },
    email: {
      fontSize: 12,
      fontWeight: '700',
      color: colors.black,
      marginVertical: 10,
      marginTop: -10,
      alignSelf: 'center',
    },
    category: {
      fontSize: 16,
      color: colors.textSecondary,
      marginVertical: 10,
      alignSelf: 'center',
    },
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalState}
      onRequestClose={() => modalToggle()}>
      <View style={styles.mainframe}>
        <TouchableOpacity style={styles.blankspace} onPress={modalToggle} />
        <View style={styles.drawerContainer}>
          <AntDesign
            name="close"
            style={{textAlign: 'right', margin: 10}}
            size={30}
            color={colors.primary}
          />
          <Image
            source={{
              uri: `${BASE_URL}${userData.selfie_pic}`,
            }}
            style={styles.userProfilePicture}
          />
          <Text style={styles.userName} numberOfLines={1}>
            {userData?.name}
          </Text>
          <Text style={styles.email} numberOfLines={1}>
            {userData?.email}
          </Text>
          <View style={styles.seperator} />
          <Text style={styles.category} numberOfLines={1}>
            View Profile
          </Text>
          <View style={styles.seperator} />
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen')}>
            <Text style={styles.category} numberOfLines={1}>
              Settings
            </Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <Text style={styles.category} numberOfLines={1}>
            Policy
          </Text>
          <View style={styles.seperator} />
          <Text style={styles.category} numberOfLines={1}>
            Terms & Condition
          </Text>
          <View style={styles.seperator} />
          <Text style={styles.category} numberOfLines={1}>
            Send SOS
          </Text>
          <View style={styles.seperator} />
          <TouchableOpacity onPress={() => _logout()}>
            <Text style={styles.category} numberOfLines={1}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default Drawer;
