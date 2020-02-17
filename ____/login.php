<?php
include 'session.php';
$user = 'admin';
$password = 'admin';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login'], $_POST['password'])) {
        if (trim($_POST['login']) !== '') {
            if ($_POST['login'] === $user) {
                $_SESSION['login'] = $_POST['login'];
                if (trim($_POST['password']) !== '') {
                    if ($_POST['password'] === $password) {
                        $_SESSION['password'] = $password;
                    } else {
                        $_SESSION['error'] = 'пароль не верен<br>';
                    }
                } else {
                    $_SESSION['error'] = 'пароль не должен быть пустым<br>';
                }
            } else {
                $_SESSION['error'] = 'имя пользователя не верно<br>';
            }
        } else {
            $_SESSION['error'] = 'логин не должен быть пустым<br>';
        }
    } else {
        $_SESSION['error'] = 'Вы неввели логин или пароль<br>';
    }
}
header('Location: index.php');