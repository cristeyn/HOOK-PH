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
    $Package = new Package();
    $Package->setID($filter);
	$Inclusion = new Inclusion();
	$AddOn = new AddOn();

	$data = $Package->viewByID();

		$Inclusion->setPackageID($data['ID']);
		$AddOn->setPackageID($data['ID']);
		$data['Inclusion'] = $Inclusion->viewByPackageID();
		foreach ($data['Inclusion'] as $i => $v) {
			# code...
			$data['Inclusion'][$i]['SelectedVariation'] = json_decode($v['SelectedVariation']);
			$data['Inclusion'][$i]['Variation'] = json_decode($v['Variation']);
		};
		$data['AddOn'] = $AddOn->viewByPackageID();
		foreach ($data['AddOn'] as $i => $v) {
			# code...
			$data['AddOn'][$i]['SelectedVariation'] = json_decode($v['SelectedVariation']);
			$data['AddOn'][$i]['Variation'] = json_decode($v['Variation']);
		};
	
	echo json_encode($data);

}
// show error
catch(PDOException $exception){
	http_response_code(401);
	die('ERROR: ' . $exception->getMessage());
}
?>