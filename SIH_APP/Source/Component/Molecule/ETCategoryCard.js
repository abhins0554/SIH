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

import colors from '../../Theme/ColorTheme';

function ETCategoryCard({category}) {
  const [expand, set_expand] = useState(false);
  const [added, set_added] = useState(false);
  const [count, set_count] = useState(1);
  const styles = StyleSheet.create({
    foodCard: {
      width: Dimensions.get('window').width - 20,
      alignSelf: 'center',
      backgroundColor: 'lightgrey',
      padding: 7.5,
      borderRadius: 7.5,
      marginVertical: 7,
    },
    categoryHeadingTxt: {
      fontSize: 18,
      width: '90%',
      fontWeight: 'bold',
      color: 'black',
    },
    dishNameTxt: {
      fontSize: 16,
      fontWeight: '600',
      color: 'black',
    },
    dishDecs: {
      fontSize: 12,
    },
    productCounter: {
      padding: 5,
      borderWidth: 0.7,
      paddingHorizontal: 10,
      backgroundColor: colors.secondary,
    },
    symbol: {
      color: colors.white,
    },
  });
  return (
    <View style={styles.foodCard}>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => set_expand(!expand)}>
        <Text style={styles.categoryHeadingTxt}>{category}</Text>
        {expand ? (
          <AntDesign name="up" size={30} />
        ) : (
          <AntDesign name="down" size={30} />
        )}
      </TouchableOpacity>
      {expand ? (
        <>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{flex: 3}}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png',
                }}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.dishNameTxt}>Mix Veggie Wrap</Text>
              <Text style={styles.dishNameTxt}>₹ 109</Text>
              <Text style={styles.dishDecs}>Desi style mixed vegetables</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              {added ? (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.productCounter}
                      onPress={() => {
                        count > 1 ? set_count(count - 1) : set_added(!added);
                      }}>
                      <Text style={styles.symbol}>-</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        borderWidth: 1,
                        padding: 5,
                        paddingHorizontal: 10,
                      }}>
                      {count}
                    </Text>
                    <TouchableOpacity
                      style={styles.productCounter}
                      onPress={() => set_count(count + 1)}>
                      <Text style={styles.symbol}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <Button onPress={() => set_added(!added)}>Add</Button>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{flex: 3}}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png',
                }}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.dishNameTxt}>Dal Fry</Text>
              <Text style={styles.dishNameTxt}>₹ 80</Text>
              <Text style={styles.dishDecs}>Desi style fry dal</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              {added ? (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.productCounter}
                      onPress={() => {
                        count > 1 ? set_count(count - 1) : set_added(!added);
                      }}>
                      <Text style={styles.symbol}>-</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        borderWidth: 1,
                        padding: 5,
                        paddingHorizontal: 10,
                      }}>
                      {count}
                    </Text>
                    <TouchableOpacity
                      style={styles.productCounter}
                      onPress={() => set_count(count + 1)}>
                      <Text style={styles.symbol}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <Button onPress={() => set_added(!added)}>Add</Button>
              )}
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
}

export default ETCategoryCard;
