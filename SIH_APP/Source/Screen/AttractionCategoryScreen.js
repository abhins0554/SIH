import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import { _fetchAttractionDataByCategory } from '../Api/AttractionAPI';

import AttractionCard from '../Component/Atom/AttractionCard';
import Header from '../Component/Atom/Header';
import auth from '@react-native-firebase/auth';
import { Get_Encrypted_AsyncStorage } from 'react-native-encrypted-asyncstorage';
import { BASE_URL } from '../Constant/Constant';

function AttractionCategoryScreen({navigation,route}) {

  const [attraction_list,set_attraction_list]=useState([]);
  
  const _get_data = async () => {
    _fetchAttractionDataByCategory(route?.params?.type)
      .then(response=>{
        if(response.data.code===200){
          set_attraction_list(response?.data?.data);
        }
      })
      .catch(error=>{
        console.log(error.response.data);
      })
  }

  React.useEffect(() => {
    _get_data();
  }, []);

  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={route?.params?.type.toUpperCase()} />
      <ScrollView style={{flex: 1}}>
        {
          attraction_list.map((item,index)=>{
            return (
              <AttractionCard
              key={index}
              navigation={navigation}
              item={item}
              title={item?.name}
              subtitle={item?.description}
              image={`${BASE_URL}${item?.image}`}
            />
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttractionCategoryScreen;
