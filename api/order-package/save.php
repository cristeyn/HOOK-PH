<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");
if(isset($_POST)){
	#Database Connection
	include '../../conn-config.php';
	include '../../class/order-package.php';
	#Convert JSON parameters
	$json = file_get_contents("php://input");
	$data = json_decode($json,true);
	#Initialize properties
	$OrderPackage = new OrderPackage();
	$OrderPackage->setClient($data['Client']);
	$OrderPackage->setClientContactNo($data['ClientContactNo']);
	$OrderPackage->setContactPerson($data['ContactPerson']);
	$OrderPackage->setContactPersonNo($data['ContactPersonNo']);
	$OrderPackage->setDeliveryDateTime($data['DeliveryDateTime']);
	$OrderPackage->setDestination($data['Destination']);
	$OrderPackage->setLandmark($data['Landmark']);
	$OrderPackage->setReceiver($data['Receiver']);
	$OrderPackage->setCelebration($data['Celebration']);
	$OrderPackage->setMessage($data['Message']);
	$OrderPackage->setPackageID($data['PackageID']);
	$OrderPackage->setPackageTotal($data['PackageTotal']);
	$OrderPackage->setSelectedAddOn(json_encode($data['SelectedAddOn']));
	$OrderPackage->setPaymentStatus($data['PaymentStatus']);
	$OrderPackage->setTxnStatus($data['TxnStatus']);
	$OrderPackage->setUserUID($data['UserUID']);
	#Execute command and return result as JSON Object
	//echo json_encode(array('result'=>'success'));
	if($OrderPackage->save()=='success'){
		echo json_encode(array('result'=>'success'));
	}else{
		echo json_encode(array('result'=>'fail'));
	}
}
?>