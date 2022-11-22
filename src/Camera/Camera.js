import {Text, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";

export default function Camera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {

    });
    return (
        <View style={styles.container}>
            <Text>Camera</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})