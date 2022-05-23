import React,{useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import NewsEventCard from '../Component/Atom/NewsEventCard';
import Header from '../Component/Atom/Header';
import fetch_event from '../Api/FetchEvent';

import auth from '@react-native-firebase/auth';

function EventScreen({navigation}) {

  const [event_data,set_event_data]=useState([]);

  const get_news = async () => {
    const idTokenResult = await auth().currentUser.getIdTokenResult();

      await fetch_event(idTokenResult)
      .then(response=>{
        if(response.data.code===200){
          set_event_data(response?.data?.data);
        }
      })
      .catch(error=>{
        console.log(error);
        console.log(error.response);
      })
  }

  React.useEffect(() => {
    get_news();
  }, []);


  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Events'} />
      <ScrollView style={{flex: 1}}>
      {event_data?.map((item,index)=>{
          return (
            <NewsEventCard
            item={item}
            navigation={() => navigation.navigate('NewsDescriptionScreen',{item:item})}
          />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventScreen;
