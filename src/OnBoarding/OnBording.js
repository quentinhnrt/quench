import { StyleSheet, View, Text, Button, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { React, useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';





export default function OnBoarding() {
    const [form, setForm] = useState(false);
    const [formStyle, setformStyle] = useState([styles.formContainer, styles.formContainerHidden]);
    const translateValue = useSharedValue(Dimensions.get('window').height);

    const config = {
        duration: 1000,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            top: withTiming(translateValue.value, config),
        };
    });

    if(!form){
        translateValue.value = Dimensions.get('window').height;
    }

    useEffect(() => {
        if (form) {
            translateValue.value = 0;
        }
    }, [form]);


    return (
        <View style={{ backgroundColor: '#3a3f41' }} >
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.container} blurRadius={3}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => setForm('register')} style={styles.registerButton}>
                        <Text style={[styles.textButton, { color: 'white' }]}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setForm('login')} style={styles.loginButton}>
                        <Text style={styles.textButton}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={[formStyle, style]}>
                    <View style={{ backgroundColor: '#82461B', width: '100%', height: '70px', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0 }}>
                        <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', fontFamily: 'Roboto' }}>{form === 'login' ? 'Login' : 'Register'}</Text>
                    </View>
                    <View style={{ padding: 20, }}>
                        {form === 'login' ? <Login /> : null}
                        {form === 'register' ? <Register /> : null}
                        <Button title="Close" onPress={() => setForm(false)} />
                    </View>
                </Animated.View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'end',
        gap: 20,
        width: '65%',
        marginHorizontal: 'auto',
        marginBottom: '20vh',
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
    },
    formContainerHidden: {
        transform: [{ translateY: '100%' }],
    },
    formContainerShow: {
        transform: [{ translateY: '0%' }],
    },
    formContainer: {
        height: '50vh',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
    }
});