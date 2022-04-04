import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import DateTimePicker from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {Button} from 'react-native-paper';

import Header from '../Component/Atom/Header';
import ColorTheme from '../Theme/ColorTheme';
import _create_payment from '../Services/PaymentGateway';

function AccomodationDetailScreen({navigation}) {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  const [datefrom, setDatefrom] = useState(new Date(1598051730000));
  const [dateto, setDateto] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [showfrom, setShowfrom] = useState(false);
  const [showto, setShowto] = useState(false);
  const userData = useSelector(S => S.userdata.userdata);

  console.log(userData);

  const onChangeDateFrom = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowfrom(false);
    setDatefrom(currentDate);
  };

  const onChangeDateTo = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowto(false);
    setDateto(currentDate);
  };

  const showDatepickerfrom = currentMode => {
    setShowfrom(true);
    setMode('date');
  };

  const showDatepickerto = currentMode => {
    setShowto(true);
    setMode('date');
  };

  return (
    <SafeAreaView style={styles.mainframe}>
      <Header navigation={navigation} title={'Accomadation'} />
      <ScrollView style={{flex: 1}}>
        <SliderBox
          images={images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          sliderBoxHeight={240}
        />
        <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
          <Text
            style={[
              styles.engtechdatatxt,
              {fontSize: 14, marginRight: 20, marginLeft: 20},
            ]}
            numberOfLines={1}>
            Acura Night Shine
          </Text>
          <Text
            style={[
              styles.subtitletxt,
              {fontSize: 12, marginRight: 20, marginLeft: 20},
            ]}
            numberOfLines={1}>
            The hotel description
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#F6F6F6',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <Text
            style={[styles.engtechdatatxt, {marginTop: 10}]}
            numberOfLines={1}>
            Price
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Starting Price
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
            <Text
              style={[styles.datanametxt, {color: '#303633'}]}
              numberOfLines={1}>
              ₹ 957.500
            </Text>
          </View>
          <View style={styles.seperator} />
        </View>
        <View style={{margin: 5}} />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#F6F6F6',
              flex: 1,
              marginHorizontal: 20,
            }}>
            <Text
              style={[styles.engtechdatatxt, {marginTop: 10}]}
              numberOfLines={1}>
              Rating
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
              <Text style={styles.datanametxt} numberOfLines={1}>
                Expert Rating
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
              <Text
                style={[styles.datanametxt, {color: '#303633'}]}
                numberOfLines={1}>
                4.2 / 5
              </Text>
            </View>
            <View style={styles.seperator} />
            <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
              <Text style={styles.datanametxt} numberOfLines={1}>
                Customer Rating
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <AntDesign
                  style={{marginTop: 2.6, marginHorizontal: 1}}
                  color={ColorTheme.ratingColor}
                  name="star"
                />
                <AntDesign
                  style={{marginTop: 2.6, marginHorizontal: 1}}
                  color={ColorTheme.ratingColor}
                  name="star"
                />
                <AntDesign
                  style={{marginTop: 2.6, marginHorizontal: 1}}
                  color={ColorTheme.ratingColor}
                  name="star"
                />
                <AntDesign
                  style={{marginTop: 2.6, marginHorizontal: 1}}
                  color={ColorTheme.ratingColor}
                  name="staro"
                />
                <AntDesign
                  style={{marginTop: 2.6, marginHorizontal: 1}}
                  color={ColorTheme.ratingColor}
                  name="staro"
                />
                <Text
                  style={{alignSelf: 'center', marginHorizontal: 5}}
                  numberOfLines={1}>
                  {'(11)'}
                </Text>
              </View>
            </View>
            <View style={styles.seperator} />
          </View>
        </View>
        <View style={{margin: 5}} />
        <View
          style={{
            backgroundColor: '#F6F6F6',
            marginHorizontal: 20,
          }}>
          <Text style={styles.engtechdatatxt}>Book Now</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', marginTop: 5}}
            onPress={showDatepickerfrom}>
            <Text style={styles.dateheading}>Date From :- </Text>
            <Text style={styles.datetxt}>
              {moment(datefrom).format('DD-MM-YYYY')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', marginTop: 5}}
            onPress={showDatepickerto}>
            <Text style={styles.dateheading}>Date To :- </Text>
            <Text style={styles.datetxt}>
              {moment(dateto).format('DD-MM-YYYY')}
            </Text>
          </TouchableOpacity>
          {showfrom && (
            <DateTimePicker
              testID="dateTimePicker"
              value={datefrom}
              mode={mode}
              is24Hour={true}
              onChange={onChangeDateFrom}
            />
          )}
          {showto && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateto}
              mode={mode}
              is24Hour={true}
              onChange={onChangeDateTo}
            />
          )}
          <View
            style={{flexDirection: 'row', marginTop: 5}}
            onPress={showDatepickerto}>
            <Text style={styles.dateheading}>Total Price :- </Text>
            <Text style={styles.datetxt}>₹ 2500</Text>
          </View>
          <Button
            mode="contained"
            onPress={() => _create_payment(userData, 2500)}
            style={{width: 150, alignSelf: 'center', marginTop: 15}}>
            Book Now
          </Button>
        </View>

        <View style={{margin: 5}} />
        <View
          style={{
            backgroundColor: '#F6F6F6',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <Text
            style={[styles.engtechdatatxt, {marginTop: 10}]}
            numberOfLines={1}>
            Hotel Facilities
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
            <Text style={{color: ColorTheme.primary}} numberOfLines={1}>
              AC Room
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
            <Image
              source={require('../Assets/Image/ac_active.png')}
              style={{height: 35, width: 35}}
            />
          </View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Television
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
            <Entypo name="tv" size={25} />
          </View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={{color: ColorTheme.primary}} numberOfLines={1}>
              Free Wifi
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 5}}>
            <AntDesign name="wifi" size={25} color={ColorTheme.primary} />
          </View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Geyser
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Parking Facility
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              CCTV Camera
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Reception
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Security
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              24/7 CheckIn
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Daily HouseKeeping
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Fire-Extinguisher
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Attached Bathroom
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            <Text style={styles.datanametxt} numberOfLines={1}>
              Public Toilet
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 0,
              marginBottom: 5,
            }}></View>
          <View style={styles.seperator} />
          <TouchableOpacity>
            <Text
              style={{
                color: ColorTheme.textPrimary,
                marginTop: 10,
                marginBottom: 20,
              }}
              numberOfLines={1}>
              {'See all specifications >>'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainframe: {
    flex: 1,
  },
  seperator: {
    borderColor: '#E5E5E5',
    borderBottomWidth: 1,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  engtechdatatxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  datetxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateheading: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default AccomodationDetailScreen;
