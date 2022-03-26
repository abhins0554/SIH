// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import {useSelector} from 'react-redux';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const theme = useSelector(s => s.theme.theme);

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header navigation={navigation} />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {StatusBar, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';


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


const Stack = createStackNavigator();

function App(props) {
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
          <Stack.Screen name="AccomodationScreen" component={AccomodationScreen} />
          <Stack.Screen name="AttractionCategoryScreen" component={AttractionCategoryScreen} />
          <Stack.Screen name="AttractionScreen" component={AttractionScreen} />
          <Stack.Screen name="EventScreen" component={EventScreen} />
          <Stack.Screen name="NewsDescriptionScreen" component={NewsDescriptionScreen} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
          <Stack.Screen name="AttractionDetails" component={AttractionDetails} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="AccomodationDetailScreen" component={AccomodationDetailScreen} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
