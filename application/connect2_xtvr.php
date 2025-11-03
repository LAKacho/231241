<?php
// создадим переменную для формирования ответа $link=mysqli_connect("localhost", "root", "", "reg");
$link=mysqli_connect("localhost", "root", "", "xtvr");
$output ='';
// если в массиве пост есть ключ nameUser, то

if (isset($_POST['nameUser'])) { 
  // в переменную name помещаем переданное с помощью запроса имя
  $myVar = $_POST['nameUser'];
  // добавляем в переменную output строку приветствия с именем
  $pieces = explode(" ", $myVar);
  $query = "SELECT user_name FROM `users_act` WHERE user_login='".$pieces[0]."'limit 1";
  $res = mysqli_query($link, $query);
  $row = mysqli_fetch_array($res, SQLSRV_FETCH_ASSOC);
  
  
  $output .= 'Здравствуйте, '.$name.'! ';
  // добавляем в переменную output IP-адрес пользователя
  if ($_SERVER['REMOTE_ADDR']) {
    $output .= 'Ваш IP адрес: '. $_SERVER['REMOTE_ADDR'];
  }
  else {
   $output .= 'Ваш IP адрес неизвестен.';
  }
  $insip = date('Y/m/d H:i:s');
 } 
 mysqli_query($link,"INSERT INTO xtvr_sesions24 SET user_login='".$pieces[0]."', 
 res1='".$insip."', lesson_result='".$pieces[2]."', user_name='".$row[0]."', lesson_name='".$pieces[3]."', 
 res2='".$pieces[4]."', lesson_times='".$pieces[5]."', forOne='".$pieces[6]."', 
 answer_24='".$pieces[7]."', object_result='".$pieces[8]."'");
   
  
  echo $output; 

?>

