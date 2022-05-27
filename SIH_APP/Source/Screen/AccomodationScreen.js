import React,{useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, FlatList} from 'react-native';

import Header from '../Component/Atom/Header';
import AccomodationCard from '../Component/Atom/AccomodationCard';
import { getAccomodattion } from '../Api/AccAPI';
import { BASE_URL, Image_BASE_URL } from '../Constant/Constant';

function AccomodationScreen({navigation}) {
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });

  const [data,set_data]=useState([]);

  const get_data= async () => {
    getAccomodattion()
    .then(response=>{
      if (response.data.code===200) {
        set_data(response?.data?.data);
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  React.useEffect(() => {
    get_data();
    console.log("hero");
  }, []);


  return (
    <SafeAreaView style={styles.mainframe}>
      <Header title={'Accomodation'} navigation={navigation} />
      <ScrollView>
      <FlatList 
        data={data}
        keyExtractor={data=>data._id}
        renderItem={({item,index})=>{
          return(
            <AccomodationCard
            hotel_name={item?.name}
            price={item?.price}
            feature={item?.tags}
            no_of_reviews={'20'}
            image={`${Image_BASE_URL}${item?.image}`}
            item={item}
            navigation={navigation}
          />
          )
        }}
        numColumns={2}
      />
          

      </ScrollView>
    </SafeAreaView>
  );
}

export default AccomodationScreen;
