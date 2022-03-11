import React from 'react';
import {SafeAreaView,StyleSheet,View,ImageBackground} from 'react-native';



function LandingScreen(props) {
    
    const styles = StyleSheet.create({
        
    })
    
    return (
        <SafeAreaView>
            <ImageBackground source={require('../Assets/Image/kedarnath.jpg')} />
        </SafeAreaView>
    );
}

export default LandingScreen;