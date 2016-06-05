<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");

if(isset($_POST['roomName']) && isset($_POST['hasTV']) && isset($_POST['beds']) && isset($_POST['kvadratura']) ){
	
$roomName = $_POST['roomName'];
$hasTV = intval($_POST['hasTV']);
$beds = intval($_POST['beds']);
$kvadratura = intval($_POST['kvadratura']);

addRoom($roomName,$hasTV,$beds,$kvadratura);
}
?>