import RazorpayCheckout from 'react-native-razorpay';

const _create_payment = async (userData, price) => {
  const options = {
    description: 'Credits towards Accomadations',
    image:
      'https://uttarakhandtourism.gov.in/sites/default/files/2021-09/uttarakhand-logo-english.png',
    currency: 'INR',
    key: 'rzp_test_WAzL3OFMO9fPlU', // Your api key
    amount: price * 100,
    name: 'Uttrakhand Tourism', // Your Company Name
    prefill: {
      email: userData.email,
      contact: userData.mobile,
      name: userData.name,
    },
    theme: {color: '#14B0C9'},
  };
  RazorpayCheckout.open(options)
    .then(data => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      navigation.push('DemoScreen');
    })
    .catch(error => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
      if (error.code === 0) {
        console.log('done');
      }
    });
};

export default _create_payment;
