let flagEnter = true;
const validEmail = /.+@.+\..+/i;
const validPassword = /[0-9a-zA-Z!@#$%^&*]{8,}/;
const validName = /^[a-zA-Z'][0-9a-zA-Z' ]+[0-9a-zA-Z']{2,20}?$/;
const validPreferences = /^[a-zA-Z'][a-zA-Z' ]+[a-zA-Z']{10,}?$/;

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

document.getElementById('username').addEventListener('focusout', () => {
    const userName = document.getElementById('username');
    if (!validation(userName, validName) && flagEnter) {
        userName.classList.add("error-input");
        flagEnter = false;
        return false;
    }
});

document.getElementById('username').addEventListener('input', () => {
    if (flagEnter) {
        return false;
    }
    const userName = document.getElementById('username');
    userName.classList.remove("error-input");
    if (!validation(userName, validName)) {
        userName.classList.add("error-input");
        return false;
    } else {
        userName.classList.remove("error-input");
    }
});

document.getElementById("preferences").addEventListener('focusout', () => {
    if (!flagEnter) {
        return false;
    }
    const yourPreferences = document.getElementById("preferences");
    if (!validation(yourPreferences, validPreferences)) {
        yourPreferences.classList.add("error-input");
        flagEnter = false;
    }
});

document.getElementById("preferences").addEventListener('input', () => {
    if (flagEnter) {
        return false;
    }
    const yourPreferences = document.getElementById("preferences");
    yourPreferences.classList.remove("error-input");
    if (!validation(yourPreferences, validPreferences)) {
        yourPreferences.classList.add("error-input");
        return false
    } else {
        yourPreferences.classList.remove("error-input");
    }
});

document.getElementById('button-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username');
    const yourPreferences = document.getElementById("preferences");
    const selectHouse = document.getElementById('select-house');
    if (validation(userName, validName) && validation(yourPreferences, validPreferences) && (validationHouse(selectHouse))) {
        alert('Validation was successful!');
    } else return false;
});

const owl = $('.owl-carousel');
$(function () {
    owl.owlCarousel({
        items: 1,
        center: true,
        autoWidth: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 2000
    });
});

$('#select-house').on('change', function () {
    if (validationHouse(document.getElementById('select-house'))) {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('to.owl.carousel', document.getElementById('select-house').value);
        $("select").children().removeClass('error-select');
    } else {
        owl.trigger('play.owl.autoplay');
        $("select").children().addClass('error-select');
        return false;
    }
});

owl.on('resized.owl.carousel', function () {
    if (validationHouse(document.getElementById('select-house'))) {
        owl.trigger('stop.owl.autoplay');
    }
});