<?php
if(!defined("SECURITY")){
    header("location: /project");
    exit();
}
if(is_readable("url.txt")){
    $fileName = file_get_contents("url.txt");
}
if($_SERVER["REQUEST_METHOD"] == 'GET'){
    if(isset($_GET['logout'])){
        session_destroy();
        header("location: /project");
        exit();
    }
}elseif($_SERVER['REQUEST_METHOD'] === "POST"){
    if(isset($_POST['file'])){
        if(is_readable('url.txt')){
            $h = fopen('url.txt', "w");
            fwrite($h, $_POST['file']);
            fclose($h);
        }
    }
}