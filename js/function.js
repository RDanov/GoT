let flagEnter = true;
let flagEmail = false;
let flagPassword = false;
let flagName = false;
let flagHouse = false;
let flagPreferences = false;
const validEmail = /.+@.+\..+/i;
const validPassword = /[0-9a-zA-Z!@#$%^&*]{8,}/;
const validName = /^[a-zA-Z'][a-zA-Z' ]+[a-zA-Z']?$/;
const validPreferences = /^[a-zA-Z'][a-zA-Z' ]+[a-zA-Z']{10,}?$/;


document.getElementById('email').addEventListener('focusout', () => {
    const userEmail = document.getElementById('email');
    if (!validEmail.test(userEmail.value) && flagEnter) {
        userEmail.style.color = 'red';
        flagEmail = false;
        flagEnter = false;
        return false;
    }
});

document.getElementById('email').addEventListener('input', () => {
    const userEmail = document.getElementById('email');
    userEmail.style.color = "";
    if (!validEmail.test(userEmail.value) && !flagEnter) {
        userEmail.style.color = 'red';
        return false;
    } else {
        userEmail.style.color = "";
        flagEmail = true;
    }
});


document.getElementById('user-password').addEventListener('focusout', () => {
    const userPassword = document.getElementById('user-password');
    if (!validPassword.test(userPassword.value) && flagEnter) {
        userPassword.style.color = 'red';
        flagPassword = false;
        flagEnter = false;
        return false;
    }
});


document.getElementById('user-password').addEventListener('input', () => {
    const userPassword = document.getElementById('user-password');
    userPassword.style.color = "";
    if (!validPassword.test(userPassword.value) && !flagEnter) {
        userPassword.style.color = 'red';
        return false;
    } else {
        userPassword.style.color = "";
        flagPassword = true;
    }
});

document.getElementById('button-login').addEventListener('click', (e) => {
    e.preventDefault();
    if (flagEmail && flagPassword) {
        const login = document.getElementById("login");
        login.style.display = 'none';
        const start = document.getElementById("start");
        start.style.display = 'block';
        flagEnter = true;
    }
});

document.getElementById('username').addEventListener('focusout', () => {
    const userName = document.getElementById('username');
    if (!validName.test(userName.value) && flagEnter) {
        userName.style.color = 'red';
        flagName = false;
        flagEnter = false;
        return false;
    } else {
        userName.style.color = "";
        flagName = true;
    }

});

document.getElementById('username').addEventListener('input', () => {
    if (flagEnter) {
        return false;
    }
    const userName = document.getElementById('username');
    userName.style.color = "";
    if (!validName.test(userName.value)) {
        userName.style.color = 'red';
        flagName = false;
        flagEnter = false;
        return false;
    } else {
        userName.style.color = "";
        flagName = true;
    }
});

document.getElementById("select-house").addEventListener('blur', () => {
        const selectHouse = document.getElementById("select-house");
        if (selectHouse.value !== "Select House") {
            flagHouse = true;
            selectHouse.style.border = 'none';
        } else {
            selectHouse.style.border = '2px solid red';
            flagHouse = false;
            flagEnter = false;
            return false;
        }
    }
);


document.getElementById("preferences").addEventListener('focusout', () => {
    if (!flagEnter) {
        return false;
    }
    const yourPreferences = document.getElementById("preferences");
    if (validPreferences.test(yourPreferences.value)) {
        yourPreferences.style.color = "";
        flagPreferences = true;
    } else {
        yourPreferences.style.color = 'red';
        flagPreferences = false;
        flagEnter = false;
        return false
    }
});

document.getElementById("preferences").addEventListener('input', () => {
    if (flagEnter) {
        return false;
    }
    const yourPreferences = document.getElementById("preferences");
    yourPreferences.style.color = "";
    if (!validPreferences.test(yourPreferences.value)) {
        yourPreferences.style.color = 'red';
        flagPreferences = false;
        flagEnter = false;
        return false
    } else {
        yourPreferences.style.color = "";
        flagPreferences = true;
    }
});

document.getElementById('button-submit').addEventListener('click', (e) => {
    e.preventDefault();
    if (flagName && flagPreferences && flagHouse) {
        const login = document.getElementById("login");
        login.style.display = 'block';
        const start = document.getElementById("start");
        start.style.display = 'none';
        flagEnter = true;
    } else return false;
});