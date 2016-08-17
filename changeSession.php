<?php

session_start();

if(isset($_POST['sentKeysToChange'])){
	//$_SESSION["sentKeysToChange"] = $_POST["sentKeysToChange"];
	echo json_encode($_SESSION[$_POST['sentKeysToChange']]);
}
//var_dump($_SESSION[$_POST['sentKeysToChange']]);
//echo json_encode($_SESSION[$_POST['sentKeysToChange']]);
