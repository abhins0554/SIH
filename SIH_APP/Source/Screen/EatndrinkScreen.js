import React from 'react';
import { SafeAreaView,StyleSheet,View,ScrollView } from 'react-native';
import Header from '../Component/Atom/Header';
import ETCard from '../Component/Molecule/ETCard';


function EatndrinkScreen({navigation}) {
    const styles = StyleSheet.create({
        mainframe:{
            flex:1,
        },
    })
    return (
        <SafeAreaView style={styles.mainframe}>
            <Header title={"Eat & Drink"} navigation={navigation} />
            <ScrollView style={{flex:1,}}>
                <ETCard />
                <ETCard />
                <ETCard />
                <ETCard />
                <ETCard />
                <ETCard />
                <ETCard />
            </ScrollView>
        </SafeAreaView>
    );
}

export default EatndrinkScreen;