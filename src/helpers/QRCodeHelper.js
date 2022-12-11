import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../../data/stores.json";

export default class QRCodeHelper {
    sendQRCodeToServer(qrCode, id, navigation) {
        AsyncStorage.getItem('user').then((user) => {
            user = JSON.parse(user);

            AsyncStorage.getItem('cards').then((cards) => {
                id = parseInt(id);
                let cardsJson = JSON.parse(cards);
                let goodIndex = -1;

                for (let i = 0; i < cardsJson.length; i++) {
                    let item = cardsJson[i];
                    if (item.userId === user.id && item.storeId === id) {
                        cardsJson[i].nbr++;
                        goodIndex = i;
                    }
                }

                AsyncStorage.setItem('cards', JSON.stringify(cardsJson)).then(r => {
                    navigation.navigate('Home');
                });
            });
        });

        return true;
    }
}