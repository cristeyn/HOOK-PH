<?php
require_once('../../vendor/autoload.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Authorization, Content-Type, Accept");
if(isset($_POST)){
	#Database Connection
	include '../../conn-config.php';
	include '../../class/notification.php';
	#Convert JSON parameters
	//$json = file_get_contents("php://input");
	$json=file_get_contents("php://input");
	$data = json_decode($json,true);
	#Initialize properties
	$Notification = new Notification();
	$Notification->setUserUID($data['UserUID']);
	$Notification->setNotification($data['Notification']);
	$Notification->setStatus($data['Status']);
	$Notification->setOrderPackageID($data['OrderPackageID']);

	$config = ClickSend\Configuration::getDefaultConfiguration()
			->setUsername('care.hook.ph@gmail.com')
			->setPassword('@dm!n@kO123');

			$apiInstance = new ClickSend\Api\SMSApi(new GuzzleHttp\Client(),$config);
			$msg = new \ClickSend\Model\SmsMessage();
			$msg->setBody('Hook PH: '.$data['Notification']); 
			$msg->setTo('+63' . $data['ClientContactNo']);
			$msg->setSource("sdk");
			
			// \ClickSend\Model\SmsMessageCollection | SmsMessageCollection model
			$sms_messages = new \ClickSend\Model\SmsMessageCollection(); 
			$sms_messages->setMessages([$msg]);
			
			try {
				$result = $apiInstance->smsSendPost($sms_messages);
				//print_r($result);
			} catch (Exception $e) {
				//echo 'Exception when calling SMSApi->smsSendPost: ', $e->getMessage(), PHP_EOL;
			}

	if($Notification->save()=='success'){
		
		echo json_encode(array('result'=>'success'));
	}else{
		echo json_encode(array('result'=>'fail'));
	}
}
?>