import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Header ({ navigation }) {
    return (
        <View style={styles.headerWrapper}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity onPress={() => AsyncStorage.clear()}>
                <Text>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={30} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: '#874F28'

    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderRadius: 100
    }
});