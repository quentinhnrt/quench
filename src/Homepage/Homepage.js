import {Text, View, FlatList, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'

import {globalStyles} from "../global";
import Card from "../Card/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../../data/stores.json";
import allCards from "../../data/cards.json";

export default function Homepage({props, navigation}) {
    const [cards, setCards] = useState([]);
    const isFocused = navigation.isFocused();

    useEffect(() => {
        navigation.addListener('focus', () => {
            AsyncStorage.getItem('user').then((user) => {
                if (user === null) {
                    navigation.navigate('OnBoarding');
                    return;
                }
                user = JSON.parse(user);

                let currCards = [];

                AsyncStorage.getItem('cards').then((cards) => {
                    if(cards === null) {
                        let allCards = require('../../data/cards.json');
                        AsyncStorage.setItem('cards', JSON.stringify(allCards))

                        allCards.forEach((item) => {
                            if(item.userId === user.id) {
                                let store = require('../../data/stores.json');
                                store.forEach((store) => {
                                    if (store.id === item.storeId) {
                                        item.store = store;
                                    }
                                })
                                currCards.push(item);
                            }
                        });
                        setCards(currCards);

                    }else{
                        cards = JSON.parse(cards);
                        cards.forEach((item) => {
                            if(item.userId === user.id) {
                                let store = require('../../data/stores.json');
                                store.forEach((store) => {
                                    if (store.id === item.storeId) {
                                        item.store = store;
                                    }
                                })
                                currCards.push(item);
                            }
                        });
                        setCards(currCards);
                    }

                })


            });
        });
    }, [navigation])

    return (
        <View>
            <FlatList style={{ paddingVertical: 25, paddingHorizontal: 15 }} data={cards} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('CardDetails', item)}>
                    <Card item={item}/>
                </TouchableOpacity>
            )}/>
        </View>
    );
}