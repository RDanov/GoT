<?php
session_start();
define("LENGTH_PASSWORD", "8");
define("LENGTH_TEXTAREA", "2");
define("DIR", '../../app/data/');
//form login processing
if (isset($_POST['signUp'])) {
    $_SESSION['user'] = 'user';
    $mail = $_POST['mail'];
    $password = $_POST['password'];

    if (!preg_match('/.+@.+\..+/i', $mail) || (strlen($password) < LENGTH_PASSWORD)) {
        return;
    } else
        $_SESSION['user'] = $mail;
    if (!file_exists(DIR . $mail . '.json')) {
        $data['password'] = $password;
        $data = json_encode($data);
        file_put_contents(DIR . $mail . '.json', $data);
        header('location: ' . $_SERVER['HTTP_REFERER']);
        exit();
    } else {
        $data = json_decode(file_get_contents(DIR . $mail . '.json'), true);
        $_SESSION['data'] = $data;
        if ($data['password'] === $password) {
            header('location: ' . $_SERVER['HTTP_REFERER']);
            exit();
        } else {
            header('location: ' . $_SERVER['HTTP_REFERER']);
            exit();
        }
    }
}


//form start processing
if (isset($_POST['start'])) {
    $name = $_POST['name'];
    $preferences = $_POST['preferences'];
    $house = $_POST['user_house'];
    $user_name = $_SESSION['user'];

    if (!preg_match('/^[a-zA-Z\'][0-9a-zA-Z\' ]+[0-9a-zA-Z\']{2,20}?$/', $name) ||
        (strlen($preferences) < LENGTH_TEXTAREA) || $house === "Select House") {
        return;
    } else {

        $_SESSION['name'] = $name;
        $json = file_get_contents(DIR . $user_name . '.json');
        $user_info = json_decode($json, true);
        $user_info['name'] = $name;
        $user_info['house'] = $house;
        $user_info['preferences'] = $preferences;
        file_put_contents(DIR . $user_name . '.json', json_encode($user_info));
        header('location: ' . $_SERVER['HTTP_REFERER']);
        exit();

    }
}
?>