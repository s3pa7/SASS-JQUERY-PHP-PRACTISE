<?php
session_start();

$name = "login";
$pass = "password";


$getName = $_POST["login"];
$getPass = $_POST["pass"];
$test = "Success";

if($name == $getName && $pass == $getPass) {
	echo json_encode($_SESSION);
}else {
	echo "Erorr";
}