import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from './src/OnBoarding/OnBording';
import Homepage from './src/Homepage/Homepage';
import Header from './src/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomBar from './src/BottomBar';
import Camera from "./src/Camera/Camera";
import CardDetails from "./src/Card/CardDetails";

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <SafeAreaView style={{width: '100%', height: "100%"}}>
            <NavigationContainer>
                <Tab.Navigator tabBar={props => <BottomBar {...props} />} screenOptions={{
                    header: props => <Header {...props} />,
                }}>
                    <Tab.Screen name="Home" component={Homepage}/>
                    <Tab.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoarding}/>
                    <Tab.Screen name="Profile" component={Homepage}/>
                    <Tab.Screen name='StoreMap' component={Homepage}/>
                    <Tab.Screen name='Camera' component={Camera}/>
                    <Tab.Screen name={'CardDetails'} component={CardDetails}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
