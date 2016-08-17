<?php
session_start();
//var_dump($_POST);
$session = count($_SESSION)- 1;

	for($i = 0; $i < $session; $i++){
		if(isset($_SESSION["keys" . $i]) ==  (isset($_POST["keys" . $i]))){
			//$_SESSION["keys" . $i] = $_POST["keys" . $i];
			//$_SESSION["keys" . $i]["thirthPrice"] = $_POST["keys" . $i]["getPrice"];
			//$_SESSION["keys" . $i]["thirthQuality"] = $_POST["keys" . $i]["getQuality"];
	}
}
echo json_encode($_SESSION);
