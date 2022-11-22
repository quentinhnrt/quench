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
        password = bcrypt.hashSync(password, 10);
        let password2 = bcrypt.hashSync(password, 10);

        let test = bcrypt.compareSync(password, password2);

        console.log(test);
    }
}