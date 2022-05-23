import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Header from '../Component/Atom/Header';
import FontTheme from '../Theme/FontTheme';
import ColorTheme from '../Theme/ColorTheme';

function AttractionScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    attraction1img: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      opacity: 0.5,
      backgroundColor: 'black',
    },
    attraction2img: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      opacity: 0.5,
      backgroundColor: 'black',
    },
    att1container: {
      padding: 8,
    },
    heading: {
      position: 'absolute',
      color: ColorTheme.textPrimary,
      justifyContent: 'center',
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      marginTop: '20%',
    },
    att1container: {
      padding: 8,
    },
    att2container: {
      margin: 8,
      flex: 1,
    },
    heading: {
      position: 'absolute',
      color: ColorTheme.white,
      justifyContent: 'center',
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      marginTop: '20%',
    },
    heading2: {
      position: 'absolute',
      color: ColorTheme.white,
      justifyContent: 'center',
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      marginTop: '40%',
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Attractions'} />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.att1container}
            onPress={() => navigation.navigate('AttractionCategoryScreen',{type:'chardham'})}>
            <Image
              source={require('../Assets/Image/kedarnath.jpg')}
              style={styles.attraction1img}
              resizeMode={'cover'}
            />
            <Text style={styles.heading}>Char Dham</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.att2container}
            onPress={() => navigation.navigate('AttractionCategoryScreen',{type:'cultural'})}>
            <Image
              source={{
                uri: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Baijnath-Temple-700x445.jpg',
              }}
              style={styles.attraction2img}
              resizeMode={'cover'}
            />
            <Text style={styles.heading2}>Cultural</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.att2container}
            onPress={() => navigation.navigate('AttractionCategoryScreen',{type:'architecture'})}>
            <Image
              source={{
                uri: 'https://www.tourmyindia.com/blog//wp-content/uploads/2015/07/Historical-Places-to-visit-in-Uttarakhand.jpg',
              }}
              style={styles.attraction2img}
              resizeMode={'cover'}
            />
            <Text style={styles.heading2}>Architecture</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.att2container}
            onPress={() => navigation.navigate('AttractionCategoryScreen',{type:'museums'})}>
            <Image
              source={{
                uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/cover-for-museums-in-dehradun.jpg',
              }}
              style={styles.attraction2img}
              resizeMode={'cover'}
            />
            <Text style={styles.heading2}>Museums</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.att2container}
            onPress={() => navigation.navigate('AttractionCategoryScreen',{type:'camping'})}>
            <Image
              source={{
                uri: 'https://ihplb.b-cdn.net/wp-content/uploads/2015/05/chopta.jpg',
              }}
              style={styles.attraction2img}
              resizeMode={'cover'}
            />
            <Text style={styles.heading2}>Camping</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default AttractionScreen;
