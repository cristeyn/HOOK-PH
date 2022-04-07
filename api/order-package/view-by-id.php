<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");

// include database connection
include '../../conn-config.php';
include '../../class/service.php';

try{
	$filter=$_GET["filter"];
    $Service = new Service();
    $Service->setID($filter);
	
	echo json_encode($Service->viewByID());
}
// show error
catch(PDOException $exception){
	
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>