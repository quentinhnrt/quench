import AsyncStorage from "@react-native-async-storage/async-storage";

const bcrypt = require('react-native-bcrypt');

export default class AuthHelper {
    
    register(email, name, phone, password, confirmPassword) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let errors = [];

        bcrypt.hash(password, 10, function (err, hash) {
            console.log(hash);
        });

        if (email === '' && reg.test(email) === false) {
            errors.push('Email is not valid');
        }

        if (name === '') {
            errors.push('Name is required');
        }

        if (phone === '' && phone.length < 10 && phone.length > 10) {
            errors.push('Phone is not valid');
        }

        if (password === '' && password === confirmPassword) {
            errors.push('Password is not valid');
        }

        if (errors.length > 0) {
            return errors;
        } else{
            password = bcrypt.hashSync(password, 10);
            return true;
        }
        
    }

    login(email, password) {
        let customers = require('../../data/customer.json');
        if(customers.email === email && customers.password === password) {
            AsyncStorage.setItem('user', JSON.stringify(customers));
            return true;
        }else{
            return 'Email or password is not valid';
        }
    }
}