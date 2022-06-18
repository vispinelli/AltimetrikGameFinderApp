import { authenticate } from './authentication.js';
import { setTextFieldStyle } from './loginview.js';



function validateEmail(email) {
    var emailRegex = /^[a-z0-9.!#$%&’*+=?]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.value.match(emailRegex)

}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    return password.value.match(passwordRegex)
}

export function validateCredentials(email, password) {
    if (validateEmail(email) && validatePassword(password)) {
        setTextFieldStyle(true);
        authenticate(email.value, password.value)

    } else {
        setTextFieldStyle(false);

    }
}