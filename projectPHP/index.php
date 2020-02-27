<?php
if(session_status() == PHP_SESSION_NONE ){
    session_start();
}
$fileInclude = "main.php";

define("SECURITY", true);

if(!isset($_SESSION['auth']) || $_SESSION['auth'] !== true){
    if($_SERVER['REQUEST_METHOD'] === "POST"){
        if(isset($_POST['login'], $_POST['password'])){
            include "login.php";
        }
        include "admin.php";
    }
}else{
    include "admin.php";
    $fileInclude = 'admin.php';
}
if(is_readable("url.txt")){
    $link = file_get_contents("url.txt");
    $xml = simplexml_load_file($link);
}
include 'views/'.$fileInclude;