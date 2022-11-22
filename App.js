import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer, useNavigationContainerRef, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './src/OnBoarding/OnBording';
import Homepage from './src/Homepage/Homepage';
import Header from './src/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from './src/BottomBar';
import Camera from "./src/Camera/Camera";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomBar {...props} />} screenOptions={{
        header: props => <Header {...props} />,
      }}>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen options={{ headerShown: false }} name="OnBoarding" component={OnBoarding} />
        <Tab.Screen name="Profile" component={Homepage} />
        <Tab.Screen name='StoreMap' component={Homepage} />
        <Tab.Screen name='Camera' component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
