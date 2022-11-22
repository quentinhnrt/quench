import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function BottomBar({state, descriptors, navigation}) {

    const currentRoute = state.routes[state.index].name;

    let mapColor = currentRoute === "StoreMap" ? "#874F28" : "#909090";
    let profileColor = currentRoute === "Profile" ? "#874F28" : "#909090";

    if (state.routes[state.index].name === 'OnBoarding') {
        return null
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('StoreMap')}>
                <FontAwesome5 name="store" size={30} color={mapColor} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={{transform: [{translateY: -40}]}}>
                <LinearGradient colors={['#E16710', '#6D3711']}
                                style={{width: 60, height: 60, alignItems: 'center', borderRadius: 100}}>
                    <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>+</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={30} color={profileColor} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        height: 80,
        borderTopColor: 'grey',
        borderTopWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between'
    }
});
