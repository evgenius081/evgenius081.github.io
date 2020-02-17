<?php

include 'session.php';

if (!isset($_SESSION['login'], $_SESSION['password'])) {
    if (isset( $_SESSION['error'])) {
        echo '<br>' . $_SESSION['error'] . '<br>';
        unset($_SESSION['error']);
    }
    ?>
    <form action='login.php' method="POST">
        <div>
            <label for="login">Логин
                <input id="login" name="login" type="text"/>
            </label>
        </div>
        <div>
            <label for="password">пароль
                <input id="password" name="password" type="password"/>
            </label>
            <div>
            </div>
            <input type="submit" value="Войти"/>
        </div>
    </form>
    <?php
} else {
    echo '<a href="/logout.php">выход</a><br>';
    echo 'Добро пожаловать ' . $_SESSION['login'] . '<br>';
    echo '<a href="security.php">защищенная страница</a>';
}

