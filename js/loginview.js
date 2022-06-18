export function setTextFieldStyle(validCredentials) {
    if (validCredentials) {
        email.style.border = "3px solid #36B972";
        password.style.border = "3px solid #36B972";
        document.getElementById("eye-icon").src = "../icons/passwordicon.svg";
    } else {
        email.style.border = "3px solid #FB5F5F";
        password.style.border = "3px solid #FB5F5F";
        document.getElementById("eye-icon").src = "../icons/red-eye.jpg";

    }
}

export function setEyeIconStyle(showPassword) {
    if (showPassword) {
        document.getElementById("eye-icon").src = "../icons/crossed-eye.svg";
        togglePasswordVisibility(true);
    } else {
        document.getElementById("eye-icon").src = "../icons/passwordicon.svg";
        togglePasswordVisibility(false);
    }
}

function togglePasswordVisibility() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

