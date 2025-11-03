<?php
header('Content-Type: application/json');


$lesson = $_POST['fname'];
$course = $_POST['lname'];

$dir  = '../course/course'.$course.'/'.$lesson.'/image_rti';
//пропускаем точки '.$course.'
$skip = array('.', '..');
$files = scandir($dir);
$findme = '+NO.jpg';
$goodFiles= array();
$i=0;
    foreach($files as $file) {
    //if(in_array($file, $skip)); array_splice($files, 1, 1);   

$pos = strpos($file, $findme);

// Заметьте, что используется ===.  Использование == не даст верного 
// результата, так как 'a' находится в нулевой позиции.
if ($pos !== false) {
    array_push($goodFiles, str_replace('+NO.jpg','',$file)); 
} 


}

//str_replace('что меняем', 'на что меняем', 'в чем меняем');

echo json_encode($goodFiles);
//print_r($files);
exit();

?>




