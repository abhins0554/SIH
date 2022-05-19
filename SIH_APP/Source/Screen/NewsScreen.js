import React,{useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

import fetch_news from '../Api/FetchNews';

import NewsEventCard from '../Component/Atom/NewsEventCard';
import Header from '../Component/Atom/Header';
import colors from '../Theme/ColorTheme';
import axios from 'axios';

function NewsScreen({navigation,props}) {
  const [news_category,set_category]=useState('all');
  const [news_data,set_news_data]=useState([]);

  const get_news = async () => {
      await fetch_news(news_category)
      .then(response=>{
        console.log(response.data);
        alert("No data found");
      })
      .catch(error=>{
        console.log(error);
        console.log(error.response);
      })
  }

  React.useEffect(() => {
    get_news();
  }, [news_category]);
  
  const styles = StyleSheet.create({
    mainframe: {
      flex: 1,
    },
    catgory:{
      borderRadius:12,
      marginHorizontal:10,
      marginVertical:5,
    },
    catgorytxt:{
      padding:10,
      textAlign:"center",
      alignSelf:"center",
    },
  });
  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'News'} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="all"?colors.primary:colors.secondary}]} onPress={()=>set_category('all')}>
            <Text style={[styles.catgorytxt,{color:news_category==="all"?"white":"black"}]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="travel"?colors.primary:colors.secondary}]} onPress={()=>set_category('travel')}>
            <Text style={[styles.catgorytxt,{color:news_category==="travel"?"white":"black"}]}>Travel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="technology"?colors.primary:colors.secondary}]} onPress={()=>set_category('technology')}>
            <Text style={[styles.catgorytxt,{color:news_category==="technology"?"white":"black"}]}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="science"?colors.primary:colors.secondary}]} onPress={()=>set_category('science')}>
            <Text style={[styles.catgorytxt,{color:news_category==="science"?"white":"black"}]}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="sports"?colors.primary:colors.secondary}]} onPress={()=>set_category('sports')}>
            <Text style={[styles.catgorytxt,{color:news_category==="sports"?"white":"black"}]}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="politics"?colors.primary:colors.secondary}]} onPress={()=>set_category('politics')}>
            <Text style={[styles.catgorytxt,{color:news_category==="politics"?"white":"black"}]}>Politics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.catgory,{backgroundColor:news_category==="business"?colors.primary:colors.secondary}]}  onPress={()=>set_category('business')}>
            <Text style={[styles.catgorytxt,{color:news_category==="business"?"white":"black"}]}>Business</Text>
          </TouchableOpacity>
        </ScrollView>
        {news_data?.map((item,index)=>{
          return (
            <NewsEventCard
            item={item}
            navigation={() => navigation.navigate('NewsDescriptionScreen',{item:item})}
          />
          )
        })}
          <NewsEventCard
            navigation={() => navigation.navigate('NewsDescriptionScreen',{item:item})}
          />

      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsScreen;
