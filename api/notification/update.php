<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");
if(isset($_POST)){
	#Database Connection
	include '../../conn-config.php';
	include '../../class/notification.php';
	#Convert JSON parameters
	$json = file_get_contents("php://input");
	$data = json_decode($json,true);
	#Initialize properties
	$Notification = new Notification();
	$Notification->setStatus($data['Status']);
	$Notification->setID($data['ID']);

	#Execute command and return result as JSON Object
	if($Notification->update()=='success'){
		echo json_encode(array('result'=>'success'));
	}else{
		echo json_encode(array('result'=>'fail'));
	}
}
?>