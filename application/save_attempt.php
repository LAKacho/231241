<?php
// создадим переменную для формирования ответа $link=mysqli_connect("localhost", "root", "", "reg");
$link=mysqli_connect("localhost", "root", "", "xtvr");
$output ='';
$dataNow =  date('Y-m-d');
// если в массиве пост есть ключ nameUser, то

if (isset($_POST['nameUser'])) { 
  // в переменную name помещаем переданное с помощью запроса имя
  $myVar = $_POST['nameUser'];
  // добавляем в переменную output строку приветствия с именем
  $pieces = explode(" ", $myVar);
  $query = "SELECT datatime FROM `attempt` WHERE user_login='".$pieces[0]."' ORDER BY `attempt`.`datatime` DESC limit 1";
  $res = mysqli_query($link, $query);
  $row = mysqli_fetch_array($res, SQLSRV_FETCH_ASSOC);
  if($row) { $dateTime=$row[0]; 
    $time=explode(" ", $dateTime );
    $d1 = strtotime ($time[0]);
    $data2 = date ('Y-m-d',$d1);
    if ($dataNow==$data2){ $output = "0"; } 
    else { $output = "true";  } 
    
    } else { $output = "true"; }
  
 
 } 
 if ($output==="true" ) {mysqli_query($link,"INSERT INTO attempt SET user_login='".$pieces[0]."'");}
 mysqli_close ($link); 
  
  echo $output; 

?>

