import {Text, View, StyleSheet, Button} from "react-native";
import {useEffect, useState} from "react";
import {BarCodeScanner} from "expo-barcode-scanner";
import QRCodeHelper from "../helpers/QRCodeHelper";

export default function Camera({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getScannerPermission = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getScannerPermission();
    }, [scanned])

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        new QRCodeHelper().sendQRCodeToServer(type, data, navigation);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});