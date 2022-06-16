const baseURL = "http://localhost:3000";


export function authenticate(email, password) {
    const loginPath = "/login";
    fetch(baseURL + loginPath, {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => {
            checkStatusCode(response.status);
        })
        .catch(error => {
            console.log("error happened");
            console.log(error);
        });

}

function checkStatusCode(statusCode) {
    if (statusCode === 200) {
        console.log("User Logged In");
        location.href = "home.html";
    } else {
        console.log("Rejected");
    }

}