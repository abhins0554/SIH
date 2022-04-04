import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Get_Encrypted_AsyncStorage} from 'react-native-encrypted-asyncstorage';

import LandingScreen from './Source/Screen/LandingScreen';
import LoginScreen from './Source/Screen/LoginScreen';
import SignupScreen from './Source/Screen/SignupScreen';
import SignpFormScreen from './Source/Screen/SignpFormScreen';
import AccomodationScreen from './Source/Screen/AccomodationScreen';
import AttractionCategoryScreen from './Source/Screen/AttractionCategoryScreen';
import AttractionDetails from './Source/Screen/AttractionDetails';
import AttractionScreen from './Source/Screen/AttractionScreen';
import EventScreen from './Source/Screen/EventScreen';
import NewsDescriptionScreen from './Source/Screen/NewsDescriptionScreen';
import NewsScreen from './Source/Screen/NewsScreen';
import OTPVerificationScreen from './Source/Screen/OTPVerificationScreen';
import PaymentScreen from './Source/Screen/PaymentScreen';
import AccomodationDetailScreen from './Source/Screen/AccomodationDetailScreen';
import SettingScreen from './Source/Screen/SettingScreen';
import ForgotPassword from './Source/Screen/ForgotPassword';
import OtpScreen from './Source/Screen/OtpScreen';
import EatndrinkScreen from './Source/Screen/EatndrinkScreen';
import FoodListScreen from './Source/Screen/FoodListScreen';
import SuggestionComplaints from './Source/Screen/SuggestionComplaints';
import {userDataAction} from './Source/Redux/Action/UserDataAction';

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: 'AIzaSyBCOTRzr-yEjfQ0Td0w1Vq4xMRaCYTjY-U',
  authDomain: 'sihuttrakhandtourism.firebaseapp.com',
  projectId: 'sihuttrakhandtourism',
  storageBucket: 'sihuttrakhandtourism.appspot.com',
  messagingSenderId: '975075523871',
  appId: '1:975075523871:web:41569e1f8ac66b74f7842a',
  measurementId: 'G-8LVK44L0BH',
};

function App(props) {
  const [user_login, set_user_login] = useState(false);
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  const _check_login = async () => {
    let token = await Get_Encrypted_AsyncStorage('text', 'token', 'SIH');
    let userdata = await Get_Encrypted_AsyncStorage(
      'object',
      'userData',
      'SIH',
    );
    if (token !== '' && token !== null) {
      set_user_login(true);
    }
    if (userdata !== null) {
      dispatch(userDataAction(userdata));
    }
  };

  React.useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig); // FIREBASE INITILIZE
    }
    _check_login();
    setTimeout(() => {
      setloading(false);
    }, 3500);
  });

  if (loading) {
    return (
      <LottieView
        source={require('./Source/Assets/loading.json')}
        autoPlay
        style={{
          flex: 1,
          alignSelf: 'center',
        }}
        resizeMode="cover"
      />
    );
  }

  return (
    <>
      {user_login ? (
        <NavigationContainer>
          <StatusBar backgroundColor="black" />
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'LandingScreen'}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="SignpFormScreen" component={SignpFormScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen
              name="AccomodationScreen"
              component={AccomodationScreen}
            />
            <Stack.Screen
              name="AttractionCategoryScreen"
              component={AttractionCategoryScreen}
            />
            <Stack.Screen
              name="AttractionScreen"
              component={AttractionScreen}
            />
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen
              name="NewsDescriptionScreen"
              component={NewsDescriptionScreen}
            />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen
              name="OTPVerificationScreen"
              component={OTPVerificationScreen}
            />
            <Stack.Screen
              name="AttractionDetails"
              component={AttractionDetails}
            />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen
              name="AccomodationDetailScreen"
              component={AccomodationDetailScreen}
            />
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="EatndrinkScreen" component={EatndrinkScreen} />
            <Stack.Screen name="FoodListScreen" component={FoodListScreen} />
            <Stack.Screen
              name="SuggestionComplaints"
              component={SuggestionComplaints}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <StatusBar backgroundColor="black" />
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'LoginScreen'}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="SignpFormScreen" component={SignpFormScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen
              name="AccomodationScreen"
              component={AccomodationScreen}
            />
            <Stack.Screen
              name="AttractionCategoryScreen"
              component={AttractionCategoryScreen}
            />
            <Stack.Screen
              name="AttractionScreen"
              component={AttractionScreen}
            />
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen
              name="NewsDescriptionScreen"
              component={NewsDescriptionScreen}
            />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen
              name="OTPVerificationScreen"
              component={OTPVerificationScreen}
            />
            <Stack.Screen
              name="AttractionDetails"
              component={AttractionDetails}
            />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen
              name="AccomodationDetailScreen"
              component={AccomodationDetailScreen}
            />
            <Stack.Screen name="SettingScreen" component={SettingScreen} />
            <Stack.Screen name="EatndrinkScreen" component={EatndrinkScreen} />
            <Stack.Screen name="FoodListScreen" component={FoodListScreen} />
            <Stack.Screen
              name="SuggestionComplaints"
              component={SuggestionComplaints}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default App;
