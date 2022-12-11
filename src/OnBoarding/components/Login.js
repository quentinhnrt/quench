import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import AuthHelper from "../../helpers/AuthHelper";

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        let response = new AuthHelper().login(email, password);
        if(response === true) {
            navigation.navigate('Home');
        }else{
            alert(response);
        }
    }

    return (
        <View style={{ gap: 20}}>
            <View>
                <TextInput style={style.inputs} onChangeText={(e) => setEmail(e)} placeholder="Email" />
                <TextInput style={style.inputs} secureTextEntry={true} onChangeText={(e) => setPassword(e)} placeholder="Password" />
            </View>
            <TouchableOpacity onPress={() => login()} style={style.buttonStyle}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    inputs: {
        backgroundColor: "#fff",
        borderColor: 'lightgrey',
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    buttonStyle: {
        borderColor: 'lightgrey',
        borderStyle: 'solid',
        borderWidth: 2,
        paddingVertical: 2,
        width: '25%',
        marginLeft: 'auto',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    }
})