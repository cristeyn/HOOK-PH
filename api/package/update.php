<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");
if(isset($_POST)){
	#Database Connection
	include '../../conn-config.php';
	include '../../class/package.php';
	include '../../class/inclusion.php';
	include '../../class/addon.php';
	#Convert JSON parameters
	$json = $_POST['data'];
	$data = json_decode($json,true);
	#Initialize properties
	$Package = new Package();
	$Package->setServiceID($data['ServiceID']);
	$Package->setPackage($data['Package']);
	$Package->setPrice($data['Price']);
	$Package->setAvailability($data['Availability']);
	$Package->setID($data['ID']);
	$Package->update();
	#Execute command and return result as JSON Object
	$Inclusion = new Inclusion();
	$Inclusion->setPackageID($data['ID']);
	$Inclusion->delete();
	foreach ($data['Inclusion'] as $key => $value) {
		$Inclusion->setItemListID($value['ID']);
		if(isset($value['SelectedVariation'])){
			$Inclusion->setSelectedVariation(json_encode($value['SelectedVariation']));
		}else{
			$Inclusion->setSelectedVariation('{}');
		}
		$Inclusion->setAvailability($value['Availability']);
		$Inclusion->save();
	}
	$AddOn = new AddOn();
	$AddOn->setPackageID($data['ID']);
	$AddOn->delete();
	foreach ($data['AddOn'] as $key => $value) {
		$AddOn->setItemListID($value['ID']);
		if(isset($value['SelectedVariation'])){
			$AddOn->setSelectedVariation(json_encode($value['SelectedVariation']));
		}else{
			$AddOn->setSelectedVariation('{}');
		}
		$AddOn->setAvailability($value['Availability']);
		$AddOn->save();
	}

	if(isset($_FILES['file'])){
		$folderPath = "../../upload/package/";
   
		$file_tmp = $_FILES['file']['tmp_name'];
		 $file_ext = '.jpg';
		$file = $folderPath . $data['ID'] .  $file_ext;
		move_uploaded_file($file_tmp, $file);
	}

	echo json_encode(array('result'=>'success'));
}
?>
