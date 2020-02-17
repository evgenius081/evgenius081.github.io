<?php
include 'session.php';
if (isset($_SESSION['login'], $_SESSION['password'])) {
    echo '<a href="/logout.php">выход</a><br>';
    echo 'Добро пожаловать ' . $_SESSION['login'] . '<br>';
    echo 'здесть храниться секретная информация';
} else {
    echo 'эта страница безопастности. вам доступ запрещен.';
    echo '<a href="index.php">войти</a>';
}