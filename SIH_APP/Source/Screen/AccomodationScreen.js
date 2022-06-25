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
      {/* <FlatList 
        data={data}
        keyExtractor={data=>data._id}
        renderItem={({item,index})=>{
          return(

          )
        }}
        numColumns={2}
      /> */}

      <View style={{flexDirection:'row'}}>
      <AccomodationCard
            hotel_name={"Hotel Height"}
            price={400}
            feature={"AC, WiFi,"}
            no_of_reviews={'20'}
            image={`https://thumbs.dreamstime.com/b/hotel-10732347.jpg`}
            item={"item"}
            navigation={navigation}
          />
          <AccomodationCard
            hotel_name={"Hotel Motel"}
            price={700}
            feature={"AC, WiFi,"}
            no_of_reviews={'50'}
            image={`https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768`}
            item={"item"}
            navigation={navigation}
          />
      </View>
          

      </ScrollView>
    </SafeAreaView>
  );
}

export default AccomodationScreen;
