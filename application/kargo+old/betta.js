let nowLesson = getCookie("nowLesson");
let course = getCookie("course"); 
console.log(nowLesson);
let files = loadDoc(nowLesson, course); //loadDoc собирает изображения из папки аргумента.

console.log(pathAria.length,files.length);
var image_rti = "./image_rti/";
var image_object = "./image_object/";

let viewport = document.getElementById("viewport").offsetWidth;
//let pathname2.name; let pathname.name.name;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let btnPause = document.getElementById('pause1');

let btnOrganic = document.getElementById('organic1');
let btnNonOrganic = document.getElementById('nonorganic1');
let btnSensetiv = document.getElementById('sensetiv1');
let btnInverse = document.getElementById('inverse1');
let btnHi = document.getElementById('hi1');
let btnBlackwhite = document.getElementById('blackwhite1');
let btnExit = document.getElementById('exit1');

let btnZoom = document.getElementById('zoom');
let btnAZoom = document.getElementById('azoom');

let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');
let btnTop = document.getElementById('top');
let btnDown = document.getElementById('down'); 

let btnSpeed = document.getElementById('speed');

let region77=0;

var id_t="zerro";
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;
let nameSlide = 0;
let timerInput = document.getElementById("time");

let timerShow = document.getElementById("timer");
let viewSlideShow = document.getElementById("viewSlideShow");
let dop=0;
let viewobjectfind = document.getElementById("viewobjectfind");

let viewClicsShow = document.getElementById("clics");
viewClicsShow.innerHTML="0";
let timeMinut = 300000;
let timeGo = 0;
let fulltimeGo = 0;
let timeBack = 0;
var clicks  = 0;
var sumClicks =0;
let pauseGO = 1;
var qwert=0;
let scopess=0;
let viewobject = document.getElementById("viewobject");
let viewobjectslider;
let objectfind = [" ","Авокадо, Шоколад, Ручка, Нож канцелярский","Сетевой адаптер, Папка с кольцами, Дырокол",
"Радиочасы, Батарейка, Сетевой адаптер, Пистолет ", "Спрей, Ножницы, Бритва с лезвием" , "Конфеты в коробке, Орехи, Зарядное устройство, Кокос" , 
"Будильник, Триммер, Зарядное устройство, Нунчаки", "Гель для волос, Два лак для ногтей, Помада","Смартфон, Таблетки, два Флакона с духами",
"Рис, Соль, Конфеты, Ювелирные изделия", "Рулетка, СВУ, Баттарейки", "Фонарь, Флешка, Кофе, СВУ", "Аккумулятор, Бинокь, Смартфон, Нож","Авокадо, Шоколад, Ручка, Нож канцелярский","Сетевой адаптер, Папка с кольцами, Дырокол",
"Радиочасы, Батарейка, Сетевой адаптер, Пистолет ", "Спрей, Ножницы, Бритва с лезвием" , "Конфеты в коробке, Орехи, Зарядное устройство, Кокос" , 
"Будильник, Триммер, Зарядное устройство, Нунчаки", "Гель для волос, Два лак для ногтей, Помада","Смартфон, Таблетки, два Флакона с духами",
"Рис, Соль, Конфеты, Ювелирные изделия", "Рулетка, СВУ, Баттарейки", "Фонарь, Флешка, Кофе, СВУ", "Аккумулятор, Бинокь, Смартфон, Нож"]

let superTimer=0;
let viewobjecttext = document.getElementById("viewobjecttext");
let viewscope = document.getElementById("scope");


//let sumscopes=0;
let searchRegion={};
let scope = 0;
//let i=0;
var xx=0; var yy=0;
var	levelmva = window.storage.levelmva;
var pathname = image_rti;

var things = window.storage.things;
var length = window.storage.length;
var slideAll = window.storage.slideAll*1;
var min = window.storage.min;
var seconds = window.storage.seconds;
var sumscopes;
let random=[];
let nameClick1;
let speed=1;


for (let ii =1; ii < things.length; ii++) {
random[ii]=ii; 	
//searchRegion[ii]=false;
}

random[0]=0;
function shuffle() {
  for (let ii = things.length - 1; ii > 0; ii--) {
    let ji = Math.floor(Math.random() * (ii) )+1; // случайный индекс от 0 до i + 1

     
	//console.log("i=",i); console.log("j=", random[i]);
	// поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    
	
	
	
		
	[random[ii], random[ji]] = [random[ji], random[ii]];
	[things[ii], things[ji]] = [things[ji], things[ii]];
	
	[pathAria[ii], pathAria[ji]] = [pathAria[ji], pathAria[ii]];
	[description[ii], description[ji]] = [description[ji], description[ii]];
	[files[ii], files[ji]] = [files[ji], files[ii]]; 
	[scopes[ii], scopes[ji]] = [scopes[ji], scopes[ii]]; 
    }
}

shuffle();

files=files.splice(0, 58);
random=random.splice(0, 58);
things=things.splice(0, 58);
pathAria=pathAria.splice(0, 58);
description=description.splice(0, 58);
scopes=scopes.splice(0, 58);

while (i < things.length) { // выводит 0, затем 1, затем 2
		if	(typeof(things[i])==="string"){
		scopes[i]=10;	sumscopes=sumscopes+10;} else {scopes[i]=0;}
		i++; }
cloneScopes = scopes.slice();

/*random=random.reverse(4, 62);
things=things.reverse(4, 62);
pathAria=pathAria.reverse(4, 62);
description=description.reverse(4, 62);
scopes=scopes.reverse(4, 62);
files=files.reverse();*/



for(let i=0; i<=slideAll; i++) {

superb.insertAdjacentHTML('beforebegin', '<div class="slide"><img  usemap="#id'+random[i]+'_Map"  id="slide'+i+'" BORDER = "0" src='+image_rti+files[i]+'+NO.jpg alt=""></div>')
//./img/mva11/
if(pathAria[i]){superс.insertAdjacentHTML('beforebegin', pathAria[i]);}
console.log(i,files[i],things.length);

}


document.getElementsByClassName('slider')[0].style.width = 100*(things.length)+"%";

btnNext.addEventListener("click", function () { pauseGO=1; dop=0; region77=0;  // stopzooom(); 
	stopzooom();
	
	
	if (viewSlide > 0)	{document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname  + files[(viewSlide+0)] + '+NO.jpg'); }
		
	if (viewSlide != slideAll){	document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname  + files[(viewSlide+1)] + '+NO.jpg'); }});

function click_handler() { 
	superTimer++;
	
	if (pauseGO != 0&&superTimer<2){ let timer = setTimeout(function tick() { timer=setTimeout(tick ,10); 
	
	//if(superTimer>1){superTimer=0; clearInterval(tick); tick();}	

	
        
	btnPrev.addEventListener("click", function () { pauseGO=-1; timeBack=timeGo; stopzooom(); 
		
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src', pathname + files[(viewSlide+0)] + '+NO.jpg'); 
		
		if (viewSlide > 0){ document.getElementById('slide' + (viewSlide-1)).setAttribute('src',  pathname + files[(viewSlide-1)] + '+NO.jpg'); }});
        
	btnPause.addEventListener("click", function () { pauseGO=0; return pauseGO; });



    //seconds = timeMinut%60
    //minutes = timeMinut/60%60
    //hour = timeMinut/60/60%60
    
	//console.log("timer", timer);
	
	if (min == '15') {
						
        clearInterval(timer);
        //alert("Время закончилось");
		}
     
	 
	 
	 else { 
	 
	 
      //  let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
       // timerShow.innerHTML = strTimer; 
		  
		
    }
  
    
	if (pauseGO==1) {timeGo=timeGo+speed; fulltimeGo++; /*stopzooom();*/ if(timeGo>=999)
	{viewSlide++;timeGo=0; nameSlide++; 						
viewSlideShow.innerHTML = viewSlide; 

viewobjectfind.innerHTML = objectfind[viewSlide]; 

viewobject.innerHTML = '<img src=' + image_object  + (0) + '.png width="250" alt=""> ';}}
   
   if (viewSlide === (slideAll+1) && timeGo>=1 || min == '15' ) { 	
   
   clearInterval(timer); 

			var timefortest = min+'.'+seconds;
			var clicksover = (45 - clicks); 
			if (clicksover<0) { scopess = (Math.round((scope/sumscopes)*100) + 5*clicksover); } 
			else {scopess = Math.round(scope/sumscopes*100);}
   
			function demo2() {
				
			 sessionStorage.setItem('level', levelmva);
			 sessionStorage.setItem('errornomers', scopess);
			 sessionStorage.setItem('timefortest', timefortest);
			 sessionStorage.setItem('timefortestnew', clicks); 
			 setTimeout(document.location.href = "../../../application/otchet_xtvr.html",200);
			 }
        
		
		function demo1() {
  console.log('Taking a break...');
  
	let myVar = getCookie("id"); 
	let courseGo = getCookie("courseGo"); 			
		
			
			if (scopess<0) {scopess=0;}
			//var errorname = errornomers;
			myVar = 'nameUser='+ encodeURIComponent(myVar)+" "+encodeURIComponent(timefortest)+" "+encodeURIComponent(scopess)+" "+encodeURIComponent(courseGo)+" "+encodeURIComponent(clicks);   
			
			//myVar = 'nameMyVar=' + encodeURIComponent(myVar);
			//timefortest = 'nametimefortest=' + encodeURIComponent(timefortest);
			
			var request = new XMLHttpRequest();
			// 3. Настройка запроса
			request.open('POST','../../../application/connect2_xtvr.php',true);
			// 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
			
				//	с помощью которой зашифрован запрос. Это необходимо для того, чтобы сервер знал как его раскодировать.
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // 5. Отправка запроса на сервер. В качестве параметра указываем данные, которые необходимо передать (необходимо для POST)
			setTimeout(request.send(myVar),10);
			//request.send(myVar);
			//request.send(timefortest);
			//request.send(errorname);
           console.log("Hello A");

}
		
		
		
		
		    
	var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function a(){ demo1(); resolve(); }, 100);
})		
	
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function b(){ console.log("Hello B"); resolve();}, 500);
})

	
		var promise3 = new Promise(function(resolve, reject) {
    setTimeout(function c(){ console.log("C"); resolve();}, 500);
})






Promise.all([promise1, promise2, promise3]).then(function() {
  demo2();
});	

   }
   
   
   
      
   if (pauseGO==-1 && (timeBack-timeGo)<500 && viewSlide>=0) {timeGo--; if(timeGo<0)
	{viewSlide--;timeGo=1000; nameSlide = nameSlide--; 
viewobjectfind.innerHTML = objectfind[viewSlide];
viewSlideShow.innerHTML = viewSlide; } }
          


    slider.style.left = (-viewSlide * viewport-timeGo) + "px";
      
	
	
		
		
		
		return viewobjectslider='<img src="./img_object/'  + (0) +  '.png"  alt=""> '; 
		return dop;
		return pauseGO;
		return region77;
		return viewSlide;
		
},10);}

		
		
		btnSpeed.addEventListener("click", function () { if (speed==1) {speed=2; 
		document.getElementById('speed').innerHTML="скорость Х1"} else {speed=1; 
		document.getElementById('speed').innerHTML="скорость Х2"} } );
		
		
		btnSensetiv.addEventListener("click", function () {dop = "S"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname + files[(viewSlide+0)] + '+' + dop + '.jpg'); // 1=S чуствительность
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		btnHi.addEventListener("click", function () {dop = "H"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname + files[(viewSlide+0)] + '+' + dop + '.jpg'); // 1=S чуствительность
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		btnNonOrganic.addEventListener("click", function () {dop = "OS"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname + files[(viewSlide)] + '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		btnOrganic.addEventListener("click", function () { dop = "OO"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src','img/' +  pathname + files[(viewSlide)] + '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		btnBlackwhite.addEventListener("click", function () {dop = "B"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		
		
		btnInverse.addEventListener("click", function () {dop = "NE"; region77=0; console.log(dop,region77,viewSlide); pauseGO=0; 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',   pathname + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src',   pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		btnExit.addEventListener("click", function () {dop = "NO"; region77=0; console.log(dop,region77,viewSlide); pauseGO=0;  stopzooom(); 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src',  pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;} );
		
		
		/*btnExit.addEventListener("click", function () {dop = "NO"; region77=0; stopzooom(); 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src','img/' +  pathname + files[(viewSlide+0)] '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src','img/' +  pathname + files[(viewSlide+1)] '+' + dop + '.jpg');} );*/
		
		
					
}
 
function superClick(x, y){
	
	document.querySelector('#slide').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    id_t = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
	 
	
	if (id_t.substr(0, 4)=="blah") {console.log(id_t.substr(0, 4)); var child = document.getElementById(id_t); 
	
	try {child.remove(child);  clicks--; viewClicsShow.innerHTML=clicks; 
	
	/*alert(searchRegion);
	if (searchRegion){scope = scope - cloneScopes[3];	
							
		viewscope.innerHTML = Math.round((scope/sumscopes)*100) + "%" ;					
							searchRegion=false;	}*/
	
	}catch(err){}  } 
	
	if (id_t.substr(0, 4)=="blai") {console.log(id_t.substr(0, 4)); var child = document.getElementById(id_t); 
	
	try {
		
		
		
	child.remove(child);  clicks--; viewClicsShow.innerHTML=clicks; 
	
					
					let object;
					let w=0;
					for (let key in searchRegion) {
					
					if (key==id_t)	{
					
					object = searchRegion[key];				
					 for (let key2 in searchRegion){
					if (searchRegion[key2]==object ){w++;}	 
						 
					 }
					if (w>1){ searchRegion[key]=0; };
					
					if (w==1) {
						
						let j2=things.indexOf(searchRegion[key]);
						console.log(searchRegion);
						scope = scope - cloneScopes[j2]; scopes[j2]=cloneScopes[j2];
						searchRegion[key]=0;}
					}
					
					
					}
					
					
	
					
							
	
	
	viewscope.innerHTML = Math.round((scope/sumscopes)*100) + "%" ;					
							
	
	}catch(err){}  } 
	
	
	if (id_t.substr(0, 3)!="bla") { 
		
		clicks++; sumClicks++; viewClicsShow.innerHTML=clicks;
		
	let liLast = document.createElement('div');
		liLast.setAttribute( "id", "blah"+sumClicks );
		liLast.setAttribute( "class", "blah" );
		
		
		
		if (event.offsetX<timeGo){
		liLast.style.left=event.offsetX + (viewSlide+1) * 1000 +x+ "px";}
		else{
		liLast.style.left=event.offsetX + viewSlide * 1000 +x+"px";}
		
		liLast.style.top=event.offsetY+ y + "px";
		liLast.style.zIndex=10000;
		liLast.style.fontSize="48px";
		liLast.style.color="#00ff00";
		liLast.style.position="absolute";
		//liLast.style.width='30px'; /* Ширина слоя */
		//liLast.style.height='30px'; 
		//liLast.style.border = '1em solid black';
		
		liLast.innerHTML = '&#x25CF;';
	slide.append(liLast);} }); } 
		
function superClick1(x, y){
	
	
	
	let liLast = document.createElement('div');
		liLast.setAttribute( "id", "blai"+sumClicks );
		liLast.setAttribute( "class", "blah" );
		
		
		nameClick1="blai"+sumClicks;
		
		liLast.style.left=event.offsetX + viewSlide * 1000 +x+"px";
		liLast.style.top=event.offsetY+ y + "px";
		liLast.style.zIndex=10000;
		liLast.style.fontSize="48px";
		liLast.style.color="#00ff00";
		liLast.style.position="absolute";
		
		liLast.innerHTML = '&#x25CF;';
		slide.append(liLast);
		return nameClick1;} 		
		
		
 
 window.onload = function() {testTimer(0); click_handler(); superClick(-15,-30);}

 $("#slide").click(function  (event) {
        //++clicks; 
		viewobjecttext.innerHTML = 'ничего нет'; 
		
			
		  document.querySelector("#slide").click = function (event) {
  event = event || window.event;
  console.log(event);
  
};
		
		
		
		});

                  function selectRegion (ctx, region) {
					  
		++sumClicks		
		++clicks; 
		
		
		superClick1(timeGo-16+viewSlide*6,510);
		searchRegion[nameClick1]=region;	
		
		viewClicsShow.innerHTML=clicks;
		
		
				
                           //var selector = 'img[usemap=\'#' + ctx.parentElement.name + '\']';
                           
						   //document.querySelector(selector).setAttribute('src','img/' +  pathname + region + '.jpg');
							

							
  try {                     						   
				  viewobject.innerHTML = '<img src='+ image_object  + (0) +'.png width="250" alt="">';
						 
} catch (err) {
 console.log(err);
  // обработка ошибки

}		

						 //лень мне искать картинки из-за этого тянется общая было так viewobject.innerHTML = '<img src="./img_object/' + region +'.jpg" width="250" alt="">';
				  
				  
							let i = 0;
					
					while (i < things.length) { // выводит 0, затем 1, затем 2
						
												
						if ( region == things[i]) {scope = scope + scopes[i];   
						
						viewobjecttext.innerHTML = description[i]; 
						viewscope.innerHTML = Math.round((scope/sumscopes)*100) + "%" ; 
						
						scopes[i]=0; 
						
						}
						
						
						
							
							i++; } 
																	   
						   
							return region77=1;
					  }

	
                       

try {

  

viewobject.innerHTML =  '<img src='+image_object + (0) +  '.png width="250" alt=""> ';
} catch (err) {


}

function change() { if(qwert==1){
sleep(10); var newWin = window.open("about:blank", "hello", "width=900, height=600"); sleep(10); 
newWin.document.write(viewobjectslider); qwert=0; sleep(1000);  console.log('Taking a break...',viewobjectslider); } 
else { qwert=1;}} 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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


 zooom();

function zooom() {xx=0; yy=0; 
var el=document.getElementById('slide' + (viewSlide));



btnZoom.addEventListener("mousedown", function(){ 

let cl=document.getElementsByClassName('blah');

 for (let i = 0, length = cl.length; i < length; i++) {
    cl[i].style.visibility = 'hidden';
  }



var el=document.getElementById('slide' + (viewSlide));
var z=document.getElementById('slide' + (viewSlide)).width; 

if(z<=2000){
 var x=z+100;
while (z<x) { 
el.width=z+5; 
z=z+5;
xx=xx-1;
yy=yy-1;
el.style.position = "relative";
el.style.left = xx+"px";
el.style.top = yy+"px";
}}});

btnAZoom.addEventListener("mousedown", function(){ 

var el=document.getElementById('slide' + (viewSlide)); 
var z=document.getElementById('slide' + (viewSlide)).width;
 if(z>=1005){ 
 var x=z-100;
while (z>x) { 
el.width=z-5; 
z=z-5;
xx=xx+1;
yy=yy+1;
el.style.position = "relative";
el.style.left = xx+"px";
el.style.top = yy+"px";

} } else {el.width=1000;
let cl=document.getElementsByClassName('blah'); 
for (let i = 0, length = cl.length; i < length; i++) {
    cl[i].style.visibility = 'visible';
  }} 
  });



btnLeft.addEventListener("mousedown", function(){ 

var el=document.getElementById('slide' + (viewSlide));
//document.getElementById('slide' + (viewSlide)).style.left; console.log(xx+"px");
xx=xx-10; el.style.left = xx+"px"; 
//el.position=z+5; 
el.style.position = "relative";
//el.style.top = -x + "px";
//document.getElementById("slide1").style="left: 100px";
// setTimeout(function(), 10);
});

btnRight.addEventListener("mousedown", function(){ 

var el=document.getElementById('slide' + (viewSlide));
//document.getElementById('slide' + (viewSlide)).style.left; console.log(xx+"px");
xx=xx+10; el.style.left = xx+"px";
//el.position=z+5; 
el.style.position = "relative";
//el.style.top = -x + "px";
//document.getElementById("slide1").style="left: 100px";
// setTimeout(function(), 10);
});

btnTop.addEventListener("mousedown", function(){ 

var el=document.getElementById('slide' + (viewSlide));
//document.getElementById('slide' + (viewSlide)).style.left; console.log(xx+"px");
yy=yy-10; el.style.top = yy+"px"; console.log(yy+"px");
//el.position=z+5; 
el.style.position = "relative";
//el.style.top = -x + "px";
//document.getElementById("slide1").style="left: 100px";
// setTimeout(function(), 10);
});

btnDown.addEventListener("mousedown", function(){ 

var el=document.getElementById('slide' + (viewSlide));
//document.getElementById('slide' + (viewSlide)).style.left; console.log(xx+"px");
yy=yy+10; el.style.top = yy+"px"; 
//el.position=z+5; 
el.style.position = "relative";
//el.style.top = -x + "px";
//document.getElementById("slide1").style="left: 100px";
// setTimeout(function(), 10);
});} 
function stopzooom() {xx=0; yy=0; var el=document.getElementById('slide' + (viewSlide)); 
el.style.top=0; el.style.left=0; el.width=1000;

let cl=document.getElementsByClassName('blah'); 
for (let i = 0, length = cl.length; i < length; i++) {
    cl[i].style.visibility = 'visible';
  }


}



/*function zum() { 
var el=document.getElementById('slide' + (viewSlide));
var z=document.getElementById('slide' + (viewSlide)).width;

 var x=200;
if (z<2000) { x++;
el.width=z+5; 
el.style.position = "relative";
el.style.top = -x + "px";
el.style.left =x +"px"; 
//document.getElementById("slide1").style="left: 100px";
 setTimeout(function(){zum(el);}, 10)
  }
}*/

  
var stopTimer;
var startTimer=100;
var min;
var seconds;


   //Функция для старта window.storage.min;
   function testTimer(startTime) {
     //для повторного запуска очистим rezult
     //document.getElementById("rezult").innerHTML = '';
     //выключим кнопку запуска
     //var bot = document.getElementById("bot");
     //bot.setAttribute("disabled","");
     //сколько будет длиться обратный отчет
     var time = startTime;
     //определим сколько минут
     min = parseInt(time / 60);
     if ( min < 1 ) min = 0;
        time = parseInt(time - min * 60);
     if ( min < 10 ) min = '0'+min;
     //определим сколько секунд
     seconds = time;
     if ( seconds < 10 ) seconds = '0'+seconds;
     //отрисовываем время
     document.getElementById("time").innerHTML='<span>'+min+' мин '+seconds+' сек</span>';
     //уменьшаем общее время на одну секунду
     startTime++;
     //смотрим время не закончилось
     if ( startTime  >= 0 ) {
                //если нет, то повторяем процедуру заново
       stopTimer  =  setTimeout(function(){testTimer(startTime); }, 1000);
           //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
   } else {
     document.getElementById("time").innerHTML='<span>Осталось времени- 00 мин 00 секунд</span>';
    // var rezult = document.getElementById("rezult");
    // rezult.innerHTML ="Время вышло";
     clearTimeout(stopTimer);
     var bot = document.getElementById("bot");
     bot.removeAttribute("disabled","disabled");
     bot.removeChild(bot.childNodes[0]);
     var text = document.createTextNode("Начать заново");
     bot.appendChild(text);
    }
    window.storage.min=min;
	window.storage.seconds=seconds;
   }
   
   //Функция для остановки обратного отчета
   function stop(){
        //очистим переменную с таймером
        clearTimeout(stopTimer);
        //и включим кнопку запуска
        var bot = document.getElementById("bot");
        bot.removeAttribute("disabled","disabled");
   }

function loadDoc(lessons, course) {
	var files;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      files = this.responseText;
	  
	  files = JSON.parse(files);
	  //console.log(files);
	  
    } 
  };
  xhttp.open("POST", "../../../application/Read_ImgN.php", false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //xhttp.send("fname=lessons2&lname=Ford");
	xhttp.send("fname="+lessons+"&lname="+course);
	
	return files;
}

