import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Button, Image, Pressable, TouchableHighlight } from 'react-native'
import { View, Text } from 'react-native'

export default function BottomBar({ state, descriptors, navigation }) {

  if (state.routes[state.index].name === 'OnBoarding') {
    return null
  }

  return (
    <View style={{ backgroundColor: 'white', height: 80, borderTopColor: 'grey', borderTopWidth: 2, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' }}>
      <TouchableHighlight onPress={() => navigation.navigate('StoreMap')}>
        <Image source={require('../assets/store.svg')} style={{ width: 48, height: 43 }} />
      </TouchableHighlight>

      <TouchableHighlight onPress={navigation.navigate('Camera')} style={{transform: [{translateY: '-70%'}]}}>
        <LinearGradient colors={['#E16710', '#6D3711']} style={{width: 60, height: 60, alignItems: 'center', borderRadius: '100%' }}>
          <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>+</Text>
        </LinearGradient>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/profile.svg')} style={{ width: 38, height: 43 }} />
      </TouchableHighlight>
    </View>
  )
}
