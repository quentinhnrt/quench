import React from "react";
import {Platform, Text, View} from "react-native";
import {globalStyles} from "../global";
import Card from "./Card";
import WebView from "react-native-webview";


export default function CardDetails({route}) {
    const card = route.params;
    let openStreetMap = `https://www.openstreetmap.org/?mlat=${card.store.lat}&mlon=${card.store.long}#map=19/${card.store.lat}/${card.store.long}`;

    return (
        <View style={globalStyles.container}>
            <View>
                <Card item={card}/>
            </View>

            <View style={{paddingVertical: 50}}>
                <Text style={{fontSize: 18, paddingBottom: 20}}>Expiration Date : {card.expirationDate}</Text>
                <Text style={{fontSize: 18}}>Company Name : {card.store.name}</Text>
            </View>
            <WebView source={{ uri: openStreetMap }} />
        </View>
    )
}