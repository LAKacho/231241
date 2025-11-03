<?php
header('Content-Type: text/html; charset=UTF-8');
header('Content-Type', 'application/json');
$link=mysqli_connect("localhost", "root", "", "xtvr");
if (isset($_POST['param'])) { 
$param = json_decode($_POST["param"]);

$name1=$param[0]->things;
$scopes=$param[0]->scopes;
mysqli_query($link,"INSERT INTO xtvr_answer24 SET name='".$name1."', name2='".$scopes."'");


}



//print_r($param[0]->name);
//$result = "Результат: name = ".$param->name."; answer = ".$param->answer;
//print_r($param[1]->name);//die($result);

?>

