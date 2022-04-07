<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");
if(isset($_POST)){
	#Database Connection
	include '../../conn-config.php';
	include '../../class/item.php';
	// include '../../class/variation.php';
	#Convert JSON parameters
	$json = $_POST['data'];
	$data = json_decode($json,true);
	#Initialize properties
	$Item = new Item();
	$Item->setItem($data['Item']);
	$Item->setDescription($data['Description']);
	$Item->setWithVariants($data['WithVariants']);
	$Item->setAvailability($data['Availability']);
	$Item->setPrice($data['Price']);
	$Item->setVariation(json_encode($data['Variation']));
	$Item->setServiceID($data['ServiceID']);

	$ObjID = uniqid(date('Ymd.'),true);
	$Item->setID($ObjID);
	if(isset($_FILES['file'])){
		$folderPath = "../../upload/item/";
   
		$file_tmp = $_FILES['file']['tmp_name'];
		 $file_ext = '.jpg';
		$file = $folderPath . $ObjID .  $file_ext;
		move_uploaded_file($file_tmp, $file);
	}
	#Execute command and return result as JSON Object
	if($Item->save()=='success'){
		echo json_encode(array('result'=>'success'));
	}else{
		echo json_encode(array('result'=>'fail'));
	}
}
?>