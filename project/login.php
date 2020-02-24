<?php
if(!defined("SECURITY")){
    header("location: /project");
    exit();
}
$logpass = file_get_contents("secret.txt");
[$login, $password] = explode("@", $logpass);
$inputLogin = $_POST['login'];
$inputPassword = $_POST["password"];

if($inputLogin === $login && $inputPassword === $password){
    $_SESSION['auth'] = true;
    $fileInclude = "admin.php";

}else{

}