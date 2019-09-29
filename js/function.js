let flagEnter = true;
const validEmail = /^[\w\.\-\_]+\@\w+\.\w{2,8}$/i;
const validPassword = /[0-9a-zA-Z!@#$%^&*]{8,}/;

document.getElementById('email').addEventListener('focusout', (ev) => {
    const userEmail = document.getElementById('email');
    if (!validEmail.test(userEmail.value)) {
        userEmail.style.color = 'red';
        flagEnter = false;
        return false;
    } else {
        userEmail.style.color = "";
        flagEnter = true;
    }
});

document.getElementById('user-password').addEventListener('focusout', (ev) => {
    const userPassword = document.getElementById('user-password');
    userPassword.style.color = "";
    if (!validPassword.test(userPassword.value) && flagEnter) {
        userPassword.style.color = 'red';
        flagEnter = false;
        return false;
    }
});

document.getElementById('user-password').addEventListener('input', (ev) => {
    const userPassword = document.getElementById('user-password');
    userPassword.style.color = "";
    if (!validPassword.test(userPassword.value) && !flagEnter) {
        userPassword.style.color = 'red';
        flagEnter = false;
        return false;
    } else {
        userPassword.style.color = "";
        flagEnter = true;
    }
});

document.getElementById('email').addEventListener('input', (ev) => {
    const userEmail = document.getElementById('email');
    userEmail.style.color = "";
    if (!validEmail.test(userEmail.value) && !flagEnter) {
        userEmail.style.color = 'red';
        flagEnter = false;
        return false;
    } else {
        userEmail.style.color = "";
        flagEnter = true;
    }
});


document.getElementById('button-login').addEventListener('click', (e) => {
    e.preventDefault();
    if (flagEnter) {
        const login = document.getElementById("login");
        login.style.display = 'none';
        const start = document.getElementById("start");
        start.style.display = 'block';
    }
});

document.getElementById('username').addEventListener('focusout', (evt) => {
    const userName = document.getElementById('username');
    userName.style.color = "";
    if (!userName && flagEnter) {
        userName.style.color = 'red';
        flagEnter = false;
        return false;
    } else {
        userName.style.color = "";
        flagEnter = true;
    }

});

document.getElementById('username').addEventListener('input', (ev) => {
    const userName = document.getElementById('username');
    userName.style.color = "";
    if (!userName && !flagEnter) {
        userName.style.color = 'red';
        flagEnter = false;
        return false;
    } else {
        userName.style.color = "";
        flagEnter = true;
    }
});

document.getElementById("your-preferences").addEventListener('focusout', (e) => {
    const yourPreferenses = document.getElementById("your-preferences");
    yourPreferenses.style.color = "";
    if (!yourPreferenses && flagEnter) {
        yourPreferenses.style.color = 'red';
        flagEnter = false;
        return false
    } else {
        yourPreferenses.style.color = "";
        flagEnter = true;
    }
});

document.getElementById("your-preferences").addEventListener('input', (e) => {
    const yourPreferenses = document.getElementById("your-preferences");
    yourPreferenses.style.color = "";
    if (!yourPreferenses && !flagEnter) {
        yourPreferenses.style.color = 'red';
        flagEnter = false;
        return false
    } else {
        yourPreferenses.style.color = "";
        flagEnter = true;
    }
});