import React, {useState} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';


function PaymentScreen({navigation, route}) {


  return (
    <View style={styles.main}>
      <StatusBar />
      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 15, borderRadius: 30}}
        onPress={() => {
          var options = {
            description: 'Credits towards Accomadations',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_WAzL3OFMO9fPlU', // Your api key
            amount: 700 * 100,
            name: 'SIH', // Your Company Name
            prefill: {
              email: "abhins.0554@gmail.com",
              contact: '9200234536',
              name: "Abhishek Tripathi",
            },
            theme: {color: '#F37254'},
          };
          RazorpayCheckout.open(options)
            .then((data) => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
              navigation.push('DemoScreen');
            })
            .catch((error) => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
              if(error.code===0){
                console.log("done");
              }
            });
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default PaymentScreen;