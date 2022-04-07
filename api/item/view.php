
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");

// include database connection
include '../../conn-config.php';
include '../../class/item.php';

try{
	$filter=$_GET["filter"];
	$currentPage=$_GET["currentPage"];
	$pageLimit=$_GET["pageLimit"];
	$Item = new Item();
	echo json_encode($Item->viewTable($pageLimit, $currentPage, $filter));
}
// show error
catch(PDOException $exception){
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>