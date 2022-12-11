import React from "react";

import {Image, StyleSheet, Text, View} from "react-native";

export default function Card(props) {
    const card = props.item;

    function cardList() {
        let list = [];
        for (let i = 0; i < 10; i++) {
            let rotate = Math.floor(Math.random() * 180) - 5;
            let rotateValue = rotate + 'deg';

            if(i < card.nbr) {
                list.push(
                    <View key={i} style={styles.stamp}>
                        <View style={styles.innerStamp}>
                            <Image style={{width: '100%', height: '100%', transform: [{rotate: rotateValue}]}} source={require('../../assets/logo.png')}/>
                        </View>
                    </View>
                );
            }else{
                list.push(
                    <View key={i} style={styles.stamp}>
                        <View style={styles.innerStamp}></View>
                    </View>
                );
            }
        }
        return list;
    }

    return (
        <View style={styles.card}>
            {card.nbr === 10 ?

                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', position: 'absolute', top: 0, left: 0, zIndex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Claim your reward !</Text>
                </View>

                : null}

          <View style={{ paddingVertical: 15, paddingHorizontal: 25 }}>
            <Text style={{color: 'white', fontFamily: 'Roboto', marginBottom: 10, fontSize: 20}} >{card?.store?.name}</Text>
              <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                  {cardList()}
              </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#99582A',
        shadowOffset: {width:1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        zIndex: 10,
        position: 'relative',
        overflow: 'hidden'
    },
    stamp: {
        width: '20%',
        aspectRatio: 1,
        padding: 10,
    },
    innerStamp: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 100,
    }
});