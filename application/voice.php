<?php
$uploadDir = '../../1/voice/';
//$uploadDir = '\\AMAB-FS\Storage\Education\Учебный центр\Distans_\_vidos\'
$typeFile = explode('/', $_FILES['voice']['type']);


$date = date("Y-m-d H-i-s");

$file = $_COOKIE['id_xtvs']." xtvs+";
$foo = $file.' '.$date;

$uploadFile = $uploadDir . basename($foo.'.'.$typeFile[1]);
if (move_uploaded_file($_FILES['voice']['tmp_name'], $uploadFile)) {
    $response = ['result'=>'OK', 'data'=>'../'.$uploadFile];
} else {
    $response = ['result'=>'ERROR', 'data'=>''];
}
echo json_encode($response);
//($_FILES['voice']['tmp_name'].time())
?>