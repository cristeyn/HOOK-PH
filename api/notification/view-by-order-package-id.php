
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");

// include database connection
include '../../conn-config.php';
include '../../class/notification.php';

try{
	$OrderPackageID=$_GET["OrderPackageID"];
	$Notification = new Notification();
	$Notification->setOrderPackageID($OrderPackageID);
	echo json_encode($Notification->viewByOrderPackageID());
}
// show error
catch(PDOException $exception){
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>