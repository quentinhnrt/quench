import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  constructor(navigation) {
    super(navigation)
  }
  render() {
    return (
      <View style={styles.headerWrapper}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/house.png')} style={{
            width: 30,
            height: 30,
          }} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#874F28',
    height: 80,
    paddingHorizontal: 20,
  },
  logo: {
    height: '75%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});