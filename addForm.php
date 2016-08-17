<?php

session_start();
//session_unset();


if(isset($_POST['sentKeysToDelete'])){
	unset($_SESSION[$_POST['sentKeysToDelete']]);
}

if(!isset($_SESSION["keys0"])){
	$next = 0;
}else {
	$next = count($_SESSION);
}

if (isset($_POST['keys'])) {
	if(isset($_POST['keys']['key'])){
		$_SESSION[$_POST['keys']['key']] = $_POST["keys"];
		//echo $_POST['keys']['key'];
	}else {
		$_SESSION['keys' . $next] = $_POST["keys"];
		
	}
}

echo json_encode($_SESSION);
