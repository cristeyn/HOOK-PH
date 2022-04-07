
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");

// include database connection
include '../../conn-config.php';
include '../../class/package.php';
include '../../class/inclusion.php';
include '../../class/addon.php';
try{
	$filter=$_GET["filter"];
	$currentPage=$_GET["currentPage"];
	$pageLimit=$_GET["pageLimit"];
	$Package = new Package();
	$Inclusion = new Inclusion();
	$AddOn = new AddOn();
	$data = $Package->viewTable($pageLimit, $currentPage, $filter);
	foreach ($data['data'] as $key => $value) {
		# code...
		
		$Inclusion->setPackageID($value['ID']);
		$AddOn->setPackageID($value['ID']);
		$data['data'][$key]['Inclusion'] = $Inclusion->viewByPackageID();
		foreach ($data['data'][$key]['Inclusion'] as $i => $v) {
			# code...
			$data['data'][$key]['Inclusion'][$i]['SelectedVariation'] = json_decode($v['SelectedVariation']);
			$data['data'][$key]['Inclusion'][$i]['Variation'] = json_decode($v['Variation']);
		};
		$data['data'][$key]['AddOn'] = $AddOn->viewByPackageID();
		foreach ($data['data'][$key]['AddOn'] as $i => $v) {
			# code...
			$data['data'][$key]['AddOn'][$i]['SelectedVariation'] = json_decode($v['SelectedVariation']);
			$data['data'][$key]['AddOn'][$i]['Variation'] = json_decode($v['Variation']);
		};
	}
	echo json_encode($data);
}
// show error
catch(PDOException $exception){
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>