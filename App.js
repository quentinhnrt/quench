import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomBar from "./src/BottomBar";
import Header from "./src/Header";
import Homepage from "./src/Homepage/Homepage";
import OnBoarding from "./src/OnBoarding/OnBording";
import CardDetails from "./src/Card/CardDetails";
import Camera from "./src/Camera/Camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Store from "./src/Store/Store";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{width: '100%', height: "100%"}}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName={"OnBoarding"} tabBar={props => <BottomBar {...props} />}
                               screenOptions={{
                                   header: props => <Header {...props} />,
                               }}>
                    <Tab.Screen name="Home" component={Homepage}/>
                    <Tab.Screen options={{headerShown: false}} name="OnBoarding" component={OnBoarding}/>
                    <Tab.Screen name="Profile" component={Homepage}/>
                    <Tab.Screen name='StoreMap' component={Store}/>
                    <Tab.Screen name='Camera' component={Camera}/>
                    <Tab.Screen name='CardDetails' component={CardDetails}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
