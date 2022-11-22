import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../global";
import Card from "./Card";


export default function CardDetails({ route, navigation }) {
    const card = route.params;
    return (
        <View style={globalStyles.container}>
        <Card>
          <Text>
              { card.title }
          </Text>
          <Text>
              { card.body }
          </Text>
        </Card>
      </View>
    )
}
const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
  });