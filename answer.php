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

$link=mysqli_connect("localhost", "root", "", "xtvr");
$query = "SELECT * FROM `xtvr_sesions24` WHERE user_login='".$_COOKIE['id']."' ORDER BY time_in DESC ";
$res = mysqli_query($link, $query);
$count=0;
$lesson=[];
while($row = mysqli_fetch_array($res, SQLSRV_FETCH_ASSOC))
{ $count++;
//echo "dsm# ".$count."<br>\n";
$result[$count]=$row[5];
if($row[4]) {$lesson[$count]=$row[4]; $dateTime[$count]=$row[3];} 
else {$lesson[$count]=0; $dateTime[$count]=0;}



}
echo '<div class="lesson2">
            <label for="date" class="control-label">Начало</label>
            <input name="date" type="date" class="form-control" id="theDate1" />
            
          
         
          
            <label for="date1" class="control-label">Конец </label>
            <input name="date1" type="date" class="form-control" id="theDate" /> 
            
          </div>';
}


?>