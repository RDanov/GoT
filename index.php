<?php
session_start();
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
            <div><img src="Public/img/House_Arryn.png" alt="0"></div>
            <div><img src="Public/img/House_Baratheon.png" alt="1"></div>
            <div><img src="Public/img/House_Greyjoy.png" alt="2"></div>
            <div><img src="Public/img/House_Lannister.png" alt="3"></div>
            <div><img src="Public/img/House_Martell.png" alt="4"></div>
            <div><img src="Public/img/House_Stark.png" alt="5"></div>
            <div><img src="Public/img/House_Targaryen.png" alt="6"></div>
            <div><img src="Public/img/House_Tully.png" alt="7"></div>
            <div><img src="Public/img/House_Tyrell.png" alt="8"></div>
        </div>
    </div>
    <div class="column">
        <div class="title"><h3>game of thrones</h3></div>
        <?php
        if (!isset($_SESSION['user'])) {
            require_once 'App/views/form_login.php';
        } else {
            require_once 'App/views/form_start.php';
        }
        ?>

    </div>
</div>
<script src="Public/js/jquery-3.4.1.js" type="text/javascript"></script>
<script src="Public/js/jquery.dd.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js" type="text/javascript"></script>
<script src="Public/js/slider.js" type="text/javascript"></script>
</body>
</html>
