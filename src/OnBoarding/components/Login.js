import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Login() {
    return (
        <View>
            <TextInput style={style.inputs} placeholder="Email" />
            <TextInput style={style.inputs} secureTextEntry={true} placeholder="Password" />
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
})