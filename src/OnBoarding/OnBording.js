import { StyleSheet, View, Text, Button, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { React, useState, useEffect } from "react";
import Login from "./components/Login";





export default function OnBoarding() {
    const [login, setlogin] = useState(false);
    const [signup, setsignup] = useState(false);
    const [formStyle, setformStyle] = useState([style.formContainer, style.formContainerHidden]);

    function setSignup() {
        setsignup(true);
        setlogin(false);
    }

    function setLogin() {
        setsignup(false);
        setlogin(true);
    }

    function resetStyle() {
        if (login) {
            setLogin(false);
        } else if (signup) {
            setSignup(false);
        }
        setformStyle([style.formContainer, style.formContainerHidden]);
    }

    useEffect(() => {
        if (login || signup) {
            setformStyle([style.formContainer, style.formContainerShow]);
        } else if (!login && !signup) {
            setformStyle([style.formContainer, style.formContainerHidden]);
        }
    }, [login, signup]);


    return (
        <View style={{ backgroundColor: '#3a3f41' }} >
            <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={style.container} blurRadius={3}>
                <View style={style.buttonsContainer}>
                    <TouchableOpacity onPress={setSignup} style={style.registerButton}>
                        <Text style={[style.textButton, { color: 'white' }]}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={setLogin} style={style.loginButton}>
                        <Text style={style.textButton}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={formStyle}>
                    <View style={{ backgroundColor: '#82461B', width: '100%', height: '70px', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', fontFamily: 'Roboto'}}>Login</Text>
                    </View>
                    <View style={{padding: 20,}}>
                        {login ? <Login /> : null}
                        {signup ? <Text>Signup</Text> : null}
                        <Button title="Close" onPress={resetStyle} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
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
    }
});