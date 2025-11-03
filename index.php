<?php
// Страница авторизации
setcookie("id_xtvs", ""); 
setcookie("id", "", "", "/"); 
setcookie("course", "");
setcookie("courseGo", "");
setcookie("nowLesson", "");
setcookie("name_xtvr", "");
foreach($_COOKIE as $key => $value) setcookie($key, '', time() - 3600, '/');
// мобильное?




// Функция для генерации случайной строки
function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
            $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}
$login="";
$passw="";
if(isset($_POST['login'])){
$login = $_POST['login'];
$passw = $_POST['password'];

//--------------проверка на птсд----------
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$is_mobile = preg_match('/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge\\
|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)
|vodafone|wap|windows ce|xda|xiino/i', $user_agent);

if ($is_mobile) {
echo "Это мобильное устройство не поддерживается "; exit();
}

$http = $_SERVER['HTTP_USER_AGENT'];
$mobile = stripos($http,"Windows");
if ($mobile===false) {  //$hello="это мобильное устройство"; $_POST['login']="";  
    echo "<br>Это устройство не поддерживается"; exit();
} 

//--------------конец проверка на птсд----------

} 
 
$hello = "";
// Соединямся с БД 
$link=mysqli_connect("localhost", "root", "", "xtvr");
if(isset($_POST['login'])&&$login[0]=="B"&&$passw[0]=="B")
{	
	$login = mb_substr($login,1);
 	$passw = mb_substr($passw,1);
    //$login = $_POST['submit'];
	// Вытаскиваем из БД запись, у которой логин равняеться введенному
    $query = mysqli_query($link,"SELECT user_password FROM users_act WHERE user_login='".mysqli_real_escape_string($link,$login)."' LIMIT 1");
    $data = mysqli_fetch_assoc($query);
  
    // Сравниваем пароли
    if($data!==null&&$data['user_password'] === $passw)
    {
        // Генерируем случайное число и шифруем его
        $hash = (generateCode(10));

        $insip = date('Y/m/d H:i:s');
		if ($data['user_password'] === "boss") {header("Location: xtvs_answers.php");}
		
        // Записываем в БД новый хеш авторизации и IP
        //mysqli_query($link, "UPDATE users SET user_hash='".$hash."' ".$insip." WHERE user_id='".$data['user_id']."'");
		//mysqli_query($link,"INSERT INTO sess SET sum='".$data['user_id']."', time='".$insip."'");
        // Ставим куки
        setcookie("id_xtvs", $login, (time()+60*60*24*6), "/");
        //setcookie("hash", $hash, time()+60*60*24*30, "/", null, null, true); // httponly !!!
		//setcookie("DSMCookie", $data, time()+3600);
        // Переадресовываем браузер на страницу проверки нашего скрипта
		
		if (isset($_COOKIE['id_xtvs'])) {echo "Город: " . $_COOKIE["id_xtvs"] . "<br>";}
        header("Location: welcome.php");  exit(); 
    }
    else
    {	
		$hello = "Вы ввели неправильный логин/пароль";
		if ($data === null) { $hello = "Нет такого пользователя, обрататитесь к администратору"; }
    }
	
  
	
} else {
        //$hello = "Вы ввели неправильный логин/пароль";
        }
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><![endif]-->
    <title></title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="xtvs_css/style_xtvs.css" rel="stylesheet">
<style>
textarea[name="password"] {
  resize: none;
  -webkit-text-security: disc !important;
}
</style>

<head>

<SCRIPT LANGUAGE="JavaScript">
function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
</SCRIPT>

</head>

<body>

<form id="login" method="POST" name="myForm" autocomplete="false"> <img id="pro" src="imageTopic/20090201_104241_зиппо.hif+B.jpg" 
width="169px" alt="foto" >
    <h1>x-ray TV simulator</h1> <h2>симулятор рентгено-телевизионной установки</h2>  <h3></h3>
	
    <fieldset id="inputs">
        <input id="username" type="login" name="login" placeholder="логин" autocomplete="off" autofocus required>   
        <input id="password" type="password" name="password" autocomplete="new-password" autocomplete="off" placeholder="пароль" required>
    </fieldset>
    <fieldset id="actions">
        <input type="submit" id="submit" value="войти" name="submit">
        <img src="imageTopic/MASH_Security_logo2.svg" width="200px" style="float:left; margin: 0px 0px 0px 100px" 
            alt="foto" >
    </fieldset>
    <a href="" id="back">&#169; Шереметьево безопасность</a>
	<div id="errorLog" class="blink"> <?php echo $hello;?> </div>
	
</form>


</body>

<SCRIPT>
const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
if(isMobile){errorLog.innerHTML = "Доступ с мобильных устройств - отключен"; submit.setAttribute("disabled", "true");}
document.myForm.reset();

</SCRIPT>

</html>
