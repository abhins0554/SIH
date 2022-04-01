import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';

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
  React.useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig); // FIREBASE INITILIZE
    }
  });

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'LoginScreen'}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="SignpFormScreen" component={SignpFormScreen} />
          <Stack.Screen
            name="AccomodationScreen"
            component={AccomodationScreen}
          />
          <Stack.Screen
            name="AttractionCategoryScreen"
            component={AttractionCategoryScreen}
          />
          <Stack.Screen name="AttractionScreen" component={AttractionScreen} />
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
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="EatndrinkScreen" component={EatndrinkScreen} />
          <Stack.Screen name="FoodListScreen" component={FoodListScreen} />
          <Stack.Screen
            name="SuggestionComplaints"
            component={SuggestionComplaints}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
