import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from './src/OnBoarding/OnBording';
import Homepage from './src/Homepage/Homepage';
import Header from './src/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomBar from './src/BottomBar';
import CardDetails from "./src/Card/CardDetails";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <BottomBar {...props} />} screenOptions={{
                header: props => <Header {...props} />,
            }}>
                <Tab.Screen name="Home" component={Homepage}/>
                <Tab.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoarding}/>
                <Tab.Screen name="Profile" component={Homepage}/>
                <Tab.Screen name='StoreMap' component={Homepage}/>
                <Tab.Screen name='Camera' component={Homepage}/>
                <Tab.Screen name={'CardDetails'} component={CardDetails}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
