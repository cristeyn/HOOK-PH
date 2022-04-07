
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");

// include database connection
include '../../conn-config.php';
include '../../class/order-package.php';

try{
	$date=$_GET["date"];
	$OrderPackage = new OrderPackage();
	echo json_encode($OrderPackage->viewTableByDate($date));
}
// show error
catch(PDOException $exception){
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>