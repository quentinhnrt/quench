import {StyleSheet, View, Text, Button, ImageBackground, Dimensions, TouchableOpacity} from "react-native";
import {React, useState, useEffect} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function OnBoarding({navigation}) {



    const [form, setForm] = useState(null);
    const [formStyle, setformStyle] = useState([styles.formContainer, styles.formContainerHidden]);

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            if(user !== null) {
                navigation.navigate('Home');
            }
        });
    })

    useEffect(() => {
        if(form) {
            setformStyle([styles.formContainer, styles.formContainerShow]);
        }else{
            setformStyle([styles.formContainer, styles.formContainerHidden]);
        }
    }, [form]);

    return (
        <View style={{backgroundColor: '#3a3f41', flex: 1}}>
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.container}
                             blurRadius={3}>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => setForm('register')} style={styles.registerButton}>
                        <Text style={[styles.textButton, {color: 'white'}]}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setForm('login')} style={styles.loginButton}>
                        <Text style={styles.textButton}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={[formStyle]}>
                    <View style={{
                        backgroundColor: '#82461B',
                        width: '100%',
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25,
                            textAlign: 'center',
                            fontFamily: 'Roboto'
                        }}>{form === 'login' ? 'Login' : 'Register'}</Text>
                    </View>
                    <View style={{padding: 20,}}>
                        {form === 'login' ? <Login navigation={navigation} /> : null}
                        {form === 'register' ? <Register/> : null}
                        <Button title="Close" onPress={() => setForm(false)}/>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '65%',
        marginBottom: 150,
    },
    textButton: {
        fontSize: 14,
        fontWeight: '500',
    },
    registerButton: {
        backgroundColor: '#82461B',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    formContainerHidden: {
        transform: [{translateY: 300}],
    },
    formContainerShow: {
        transform: [{translateY: 0}],
    },
    formContainer: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
    }
})