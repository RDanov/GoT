<?php
session_start();
define('HOUSES', ['House_Arryn', 'House_Baratheon', 'House_Greyjoy', 'House_Lannister', 'House_Martell',
    'House_Stark', 'House_Targaryen', 'House_Tully', 'House_Tyrell']);
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Public/css/reset.css">
    <link rel="stylesheet" href="Public/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css">
    <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Open+Sans&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jquery-dropdown/2.0.3/jquery.dropdown.css">
    <link rel="stylesheet" type="text/css" href="Public/css/dd.css">
    <title>game of thrones</title>
</head>
<body>
<div class="wrapper">
    <div class="column">
        <div class="owl-carousel owl-theme column">
            <?php
            foreach (HOUSES as $item) echo "<img src='Public/img/$item.png' alt='$item'>" ?>
        </div>
    </div>
    <div class="column">
        <div class="title"><h3>game of thrones</h3></div>
        <form id="login" class="active menu-game">
            <div class="font-menu">Enter your email</div>
            <label for="email" class="input-email">
                <input type="email" id="email" placeholder="arya@westeros.com"
                       class="input-username"/>
            </label>
            <div class="font-menu">Choose secure password</div>
            <div class="font-submenu">Must be at least 8 characters</div>
            <label for="user-password" class="input-email">
                <input type="password" id="user-password" maxlength="30" minlength="8" placeholder="password"
                       class="input-username"/>
            </label>
            <label class="container">
                <input type="checkbox">
                <span class="checkbox"></span>
                <p>Remember me</p>
            </label>
            <input type="submit" id="button-login" class="button-submit" value="Sign Up">
        </form>
        <form id="start" class="not-active menu-game">
            <div class="sub-title"><p>You've succesfully joined the game</p>
                <p>Tell us more about yourself.</p></div>
            <div class="font-menu">Who are you?</div>
            <div class="font-submenu">Alpha-numeric username</div>
            <label for="username" class="input-email">
                <input type="text" id="username" placeholder="arya" class="input-username">
            </label>
            <div class="font-menu">You Great House</div>
            <div class="select" id="select">
                <select type="text" id="select-house" name="user_house" class="select-house">
                    <option>Select House</option>
                    <option value="0" data-image="public/img/House_Arryn.png">Arryn of the Eyrie</option>
                    <option value="1" data-image="public/img/House_Baratheon.png">Baratheon of Storm's End</option>
                    <option value="2" data-image="public/img/House_Greyjoy.png">Greyjoy of Pyke</option>
                    <option value="3" data-image="public/img/House_Lannister.png">Lannister of Casterly Rock</option>
                    <option value="4" data-image="public/img/House_Martell.png">Martell of Sunspear</option>
                    <option value="5" data-image="public/img/House_Stark.png">Stark of Winterfell</option>
                    <option value="6" data-image="public/img/House_Targaryen.png">Targaryen of King's Landing</option>
                    <option value="7" data-image="public/img/House_Tully.png">Tully of Riverrun</option>
                    <option value="8" data-image="public/img/House_Tyrell.png">Tyrell of Highgarden</option>
                </select>
            </div>
            <div class="font-menu" id="hobby">You preferences, hobbies, wishes, etc.</div>
            <label for="preferences" class="input-email">
                <textarea type="text" id="preferences" placeholder="I have a long TOKILL list..."
                          class="input-username"></textarea>
            </label>
            <input type="submit" id="button-submit" class="button-submit" value="Save">
        </form>
    </div>
</div>
<script src="Public/js/jquery-3.4.1.js" type="text/javascript"></script>
<script src="Public/js/jquery.dd.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js" type="text/javascript"></script>
<script src="Public/js/function.js" type="text/javascript"></script>
</body>
</html>
