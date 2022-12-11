import {Text, View} from "react-native";
import WebView from "react-native-webview";

export default function Store() {
    return (
        <WebView source={{ uri: 'https://www.openstreetmap.org/#map=5/46.225/2.153' }} />
    )
}