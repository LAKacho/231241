
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script><![endif]-->
    <title></title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="xtvs_css/style_welcome.css" rel="stylesheet">
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

/*var div = document.getElementById("id");
div.onclick = function (e) {
  var e = e || window.event;
  var target = e.target || e.srcElement;
  if (this == target) alert("Вместо меня должно стоять модальное окно");*/


 window.onload = function () {
    imput.onclick = function (e) {
      var el = e ? e.target : window.event.srcElement;
      while (el !== this) {
        if (el.className == "course1") {
          
		  
		  let last = el.id;
		  
		  last = last.slice(-1)*1;	
		  bildingPage(last);
		  
          break;  
        }
        el = el.parentNode;
      }
    };
  };
  
  function go(obj) {
  let lesson1 = document.querySelectorAll('.lesson1');
  for( let i = 0; i < lesson1.length; i++ ){
  lesson1[i].outerHTML = "";
	}
  var elem = document.createElement("div");
  
  elem.id = obj.id;
  imput.append(elem);
  
  document.getElementById("imput").innerHTML="<h2> Занятие "+obj.innerHTML+"</h2>";
  		
  var fr = document.createElement("object");
  fr.data = "./course/course1/lessons1/description_"+obj.id+".html";
  fr.width="100%";
  fr.height="400px";
  imput.append(fr);

	var button = document.createElement("button");
	button.className = "button button4";
	button.innerHTML = "назад";
	
	var buttonGo = document.createElement("button");
	buttonGo.className = "button button5";
	buttonGo.innerHTML = "приступить";
	let course = obj.innerHTML[0]*1;
	let courseGo = obj.innerHTML[0]+obj.innerHTML[2]+obj.innerHTML[3];
	buttonGo.setAttribute('onclick','alert('+courseGo+')');
	button.setAttribute('onclick','bildingPage('+course+')');
	imput.append(button); imput.append(buttonGo);
	var br = document.createElement("br");
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
    imput.append(br); imput.append(br1); imput.append(br2);
  //window.location.href = './course/lessons1/'+obj.id+'.html'; <button class="button button4">Gray</button>
  }


function bildingPage(course)
{
let last=course;
let courseText;
	
	if (last==1){
	courseText="Курс 1. Начальный уровень <br> по изучению теневых изображений";	
	}
	if (last==2){
	courseText="Курс 2. Средний уровень <br> по изучению теневых изображений";	
	}
	if (last==3){
	courseText="Курс 3. Продвинутый уровень <br> по изучению теневых изображений";	
	}
	
let elem = document.getElementById('welcome'); 
		  elem.innerHTML="<h1>x-ray TV simulator</h1> <h2>(симулятор рентгено-телевизионной установки)</h2>  <h2>"+courseText+"</h2>";


summa(last);

function summa(post) {
     
    xmlhttp = new XMLHttpRequest();// Создаём объект XMLHTTP
    xmlhttp.open('POST', 'course.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("a=" + encodeURIComponent(post)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
    var elem = document.createElement("div"); 
	elem.id = "imput";
	welcome.append(elem);
	
	document.getElementById("imput").innerHTML = xmlhttp.responseText; // Выводим ответ сервера
    var button = document.createElement("button");
	var br = document.createElement("br");
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	button.className = "button button4";
	button.innerHTML = "назад";
	button.setAttribute('onclick','location.reload(); return false;');
	imput.append(button);
	imput.append(br); imput.append(br1); imput.append(br2);
			}}};
	
			  
			  }

	
}	




</SCRIPT>
</head>

<body>

<div id="username"></div>


<div id="textname">Дмитрий Сергеевич (логин 343)</div>
<div id="welcome"> 

    <h1>Добро пожаловать на <br> x-ray TV simulator</h1> <h2>(симулятор рентгено-телевизионной установки)</h2>  <h1>выберите необходимый <br> вам курс</h1>
	
   <div id="imput"> 
   
        <div class="course1" id="course1">Курс 1. Начальный уровень <br> по изучению теневых изображений</div>  
        <div class="course1" id="course2">Курс 2. Средний уровень <br> по изучению теневых изображений</div> 
		<div class="course1" id="course3">Курс 3. Продвинутый уровень <br> по изучению теневых изображений</div>  		
    
   </div>
 
 
</div>
<div id="footer">
<img src="imageTopic/MASH_Security_logo2.svg" id="logo" width="200px" style="float:left; margin: 0px 0px 0px 100px" 
            alt="foto" > <br>&#169; Шереметьево безопасность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

</body>
</html>
