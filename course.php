<?php
 header('Content-Type: text/html; charset=UTF-8'); // Заголовок станицы с кодировкой (для корректного отображения в браузере)
mb_internal_encoding('UTF-8'); // Установка внутренней кодировки в UTF-8
mb_http_output('UTF-8'); // Установка кодировки UTF-8 входных данных HTTP-запроса
mb_http_input('UTF-8'); // Установка кодировки UTF-8 выходных данных HTTP-запроса
mb_regex_encoding('UTF-8'); // Установка кодировки UTF-8 для многобайтовых регулярных выражений 
setcookie("times787","");

if(isset($_POST['a']))
{
$course = $_POST['a'];
$time[0]=0;
$link=mysqli_connect("localhost", "root", "", "xtvr");
$query = "SELECT * FROM `xtvr_sesions24` WHERE user_login='".$_COOKIE['id_xtvs']."' ORDER BY time_in DESC ";

$res = mysqli_query($link, $query);
$count=0;
$lesson=[];
$testing = false;
$dataNow =  date('Y-m-d');

while($row = mysqli_fetch_array($res, SQLSRV_FETCH_ASSOC))
{ $count++;

$result[$count]=$row[5];
if($row[4]) {$lesson[$count]=$row[4]; $dateTime[$count]=$row[3];} 
else {$lesson[$count]=0; $dateTime[$count]=0;}

$time=explode(" ", $dateTime[$count] );
$d1 = strtotime ($time[0]);
$data2 = date ('Y-m-d',$d1);


if($row[4]==="305"||$row[4]==="303"){
	if ($dataNow==$data2){ $testing = true; }   }

//echo "dsm# ".$row[4]."+".$data2."+".$testing."+".$dataNow."<br>\n";
} 










$name="times787";

if($testing){ 
	setcookie($name,"1");
	} else {setcookie($name,"0");}

$lines = file('course/course'.$course.'.txt');
$ii=0;
// Осуществим проход массива и выведем содержимое в виде HTML-кода вместе с номерами строк.
foreach ($lines as $line_num => $line) {
	if ($line[0]==="1" or $line[0]==="2" or $line[0]==="3")
	{ $ii++;
	
$lessonFile=$line[0].$line[2].$line[3];
    
	echo "<table width='100%' cellspacing='0' cellpadding='0'><tr>
	<td width='85%'>
	<div onclick='go(this)' class='lesson1' 
	id='lesson".$course."_".($ii)."'>" . $line . "</div></td>";
	
	
	$key = array_search($lessonFile, $lesson);
	if($key) //!empty($lesson[$ii])&&
	{ 
	
	$resultNum = (int)$result[$key];
	if ($resultNum>80){echo "<td><div class='lessonGreen'>".$result[$key]." %</div></td></tr></table>";} 
	else {echo "<td><div class='lesson2'>".$result[$key]." %</div></td></tr></table>";}
	} 
	
	else 
	
	{echo "<td><div class='lesson2'>0 %</div></td></tr></table>";}
	
	}
	
	else { echo "<div class='lesson-title' ><b>" . $line . "</b></div>"; }
}	

    echo "<br>";
}
?>