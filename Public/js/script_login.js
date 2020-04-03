let flagEnter = true;
const validEmail = /.+@.+\..+/i;
const validPassword = /[0-9a-zA-Z!@#$%^&*]{8,}/;

function validation(userValue, validRegExp) {
    return validRegExp.test(userValue.value);
}

function validationHouse(selectHouse) {
    return (selectHouse.value !== "Select House");
}

document.getElementById('email').addEventListener('focusout', () => {
    const userEmail = document.getElementById('email');
    if (!validation(userEmail, validEmail) && flagEnter) {
        userEmail.classList.add("error-input");
        flagEnter = false;
        return false;
    }
});

document.getElementById('email').addEventListener('input', () => {
    const userEmail = document.getElementById('email');
    userEmail.classList.remove("error-input");
    if (!validation(userEmail, validEmail) && !flagEnter) {
        userEmail.classList.add("error-input");
        return false;
    }
});

document.getElementById('user-password').addEventListener('focusout', () => {
    const userPassword = document.getElementById('user-password');
    if (!validation(userPassword, validPassword) && flagEnter) {
        userPassword.classList.add("error-input");
        flagEnter = false;
        return false;
    }
});

document.getElementById('user-password').addEventListener('input', () => {
    const userPassword = document.getElementById('user-password');
    userPassword.classList.remove("error-input");
    if (!validation(userPassword, validPassword) && !flagEnter) {
        userPassword.classList.add("error-input");
        return false;
    }
});

document.getElementById('button-login').addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('user-password');
    if (validation(userEmail, validEmail) && validation(userPassword, validPassword)) {
        flagEnter = true;
        const login = document.getElementById('login');
        login.classList.remove('active');
        login.classList.add('not-active');
        document.getElementById('start').classList.add('active');
        $(document).ready(function () {
            try {
                $("body select").msDropDown();
            } catch (e) {
                alert(e.message);
            }
        });
    }
});