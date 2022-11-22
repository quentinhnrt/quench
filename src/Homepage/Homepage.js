import { Text, View,FlatList ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

import {globalStyles} from "../global";
import Card from "../Card/Card";


export default function Homepage({props,navigation}) {
    const [reviews]= useState([
        {title:'Starbucks', body: 'lorem ipsum' },
        {title:'Teste', body: 'lorem ipsum' },
    ]);
    return (
        <View>
            <Text>Homepage</Text>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('CardDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}