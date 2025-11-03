 let pauseGO = 0; 
 let viewSlide = 0;
 let recordVideo = true;
 let mobileDown = "mousedown";
 let mobileUp = "mouseup";
 let courseGo = getCookie("courseGo")*1; 
 
 
 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
	mobileDown = "touchstart";
	mobileUp = "touchend";
	//alert(navigator.userAgent);
  } 
 
 function popupVideo() { 
	
	let level=sessionStorage.getItem('video');
if (level=="0"){sessionStorage.removeItem('video'); return false;}
console.log(getCookie("courseGo"));	


var video = document.getElementById('video');
var mediaRecorderStop=false;
var noVideo=true;

 
var qw = document.location.href;
var val=qw.search('https'); 
 


if (window.location.protocol=="http:"){ return false;}

// Получаем доступ к камере
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { 
    // Не включаем аудио опцией `{ audio: true }` поскольку сейчас мы работаем только с изображениями
    
		navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 320, max: 640}, height: {ideal: 240, max: 360 }, frameRate: 60} }).then(function(stream) {
        video.srcObject = stream;
        video.play();
		
		
		
		}) 
		.catch(function(err) {
			
			alert("Для тестирования необходимо включить камеру"); document.location.href = "../../../welcome.php";
  
});

		  



} 

//---------------------
      

	//window.onload = function() { 
	    
		var popup = document.querySelector('.popup'),
          overlay = document.querySelector('.overlay'),
          close = document.querySelector('.close'),
          button = document.querySelector('.button');

		
	  
	    close.addEventListener('click', function() {
        popup.style.display = "none";
        overlay.style.display = "none";
		pauseGO = 1; 
      });
        overlay.style.display = "block";
        popup.style.display = "block";
        positionCenter(popup);
		
    //  };

      

      function positionCenter(elem) {
        var elemHeight = window.getComputedStyle(elem).height,
            elemWidth = window.getComputedStyle(elem).width;
        elem.style.marginTop = "-" + parseInt(elemHeight) / 2 + "px";
        elem.style.marginLeft = "-" + parseInt(elemWidth) / 2 + "px";
      }
	  
	  
    }; 
	
	
if (courseGo==305||courseGo==303) {popupVideo();}

//============================================================
var video = document.getElementById('video');
var mediaRecorderStop=false;
var noVideo=true;

 
var qw = document.location.href;
var val=qw.search('https'); 
var level=1;




// Получаем доступ к камере
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia&&noVideo) { 
    // Не включаем аудио опцией `{ audio: true }` поскольку сейчас мы работаем только с изображениями
    
		navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 320, max: 640}, height: {ideal: 240, max: 360 }, frameRate: 60} }).then(function(stream) {
        video.srcObject = stream;
        video.play();
		}) 
		.catch(function(err) { 
  noVideo=false;
});
}

//-----------------------------------------------

		
	
let audioChunks = [];
const URL = '../../../application/voice.php';
	
navigator.mediaDevices.getUserMedia({ audio: true, video: true})
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        
            mediaRecorder.start();
        
        let audioChunks = [];
        mediaRecorder.addEventListener("dataavailable",function(event) {
            audioChunks.push(event.data);
        });

        
		document.addEventListener("click",function(event) {
            if(viewSlide==30&&recordVideo){mediaRecorder.stop(); recordVideo = false;}
        });
		
		
        mediaRecorder.addEventListener("stop", function() {
            const audioBlob = new Blob(audioChunks, {
                type: "video/webm"
            });

            let fd = new FormData();
            fd.append('voice', audioBlob);
            sendVoice(fd);
            audioChunks = [];
        });
});	
				
         


	


//**************************************************************************
async function sendVoice(form) {
    let promise = await fetch(URL, {
        method: 'POST',
        body: form});
    if (promise.ok) {
        
		let response =  await promise.json();
        console.log(response.data);
        //audio.src = response.data;
        //audio.controls = true;
        //audio.autoplay = true;
        //document.querySelector('#messages').appendChild(audio);
    } } 

 
//==================------------------==========================



let nowLesson = getCookie("nowLesson");
let course = getCookie("course"); 

let files = loadDoc(nowLesson, course); //loadDoc собирает изображения из папки аргумента.

console.log (files.length);

document.getElementsByClassName('slider')[0].style.width = 100*(files.length)+"%";

var image_rti = "./image_rti/";
var image_object = "./image_object/";
var zooming=false;
let viewport = document.getElementById("viewport").offsetWidth;
//let pathname2.name; let pathname.name.name;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let btnPause = document.getElementById('pause1');
//let btnFirst = document.getElementById('first');
let btnSecond = document.getElementById('second');
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
let scopes=[];
let region77=0;

var id_t="zerro";
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
//let viewSlide = 0;
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
var sumClicksOneImage =0;

var qwert=0;
let scopess=0;
let viewobject = document.getElementById("viewobject");
let viewobjectslider;
let objectfind = ["товарами народного потребления, Вам необходимо найти: оружие, боеприпасы и газовые баллоны"]

let superTimer=0;
let viewobjecttext = document.getElementById("viewobjecttext");
let viewscope = document.getElementById("scope");
viewscope.innerHTML="&#128518";//0; "&#128518;"


//let sumscopes=0;
let searchRegion={};
let scope = 0;
let i=0;
var xx=0; var yy=0;
var	levelmva = 3;
var pathname = [];
var pathname1 = []; 
var pathname2 = [];//"image_rti_1/";
var slideAll = files.length;
//var things = window.storage.things;
//var length = window.storage.length;
//var slideAll = window.storage.slideAll*1;
window.storage = {};
var min = window.storage.min;
var seconds = window.storage.seconds;
var sumscopes=0;
let random=[];
let nameClick1;
let speed=2;
let goodClick;
let badClick; 
let penalize; 
let scopess1; 
let answerAll=[];
let rotateArr=[];

viewobjectfind.innerHTML = getCookie("name_xtvr")+"<br> Вы проверяете груз с "+objectfind[0]; 
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
	
	//[pathname1[ii], pathname1[ji]] = [pathname1[ji], pathname1[ii]];
	
	[pathAria[ii], pathAria[ji]] = [pathAria[ji], pathAria[ii]];
	[pathAria_1[ii], pathAria_1[ji]] = [pathAria_1[ji], pathAria_1[ii]];
	
	[pathAria2[ii], pathAria2[ji]] = [pathAria2[ji], pathAria2[ii]];
	[pathAria2_1[ii], pathAria2_1[ji]] = [pathAria2_1[ji], pathAria2_1[ii]];
	
	[description[ii], description[ji]] = [description[ji], description[ii]];
	[files[ii], files[ji]] = [files[ji], files[ii]]; 
	[scopes[ii], scopes[ji]] = [scopes[ji], scopes[ii]]; 
    }
}

function cutOff(x){
slideAll = x;
document.getElementsByClassName('slider')[0].style.width = 100*(slideAll)+"%";
files=files.splice(0, x);
random=random.splice(0, x);
things=things.splice(0, x);
pathAria=pathAria.splice(0, x);
pathAria2=pathAria2.splice(0, x);
pathAria_1=pathAria_1.splice(0, x);
pathAria2_1=pathAria2_1.splice(0, x);
description=description.splice(0, x);
scopes=scopes.splice(0, x);}

/*while (i < (things.length)) { // выводит 0, затем 1, затем 2
		if	(typeof(things[i])==="string"){ //alert(i);
		
		scopes[i]=10; console.log(i,things[i],scopes[i]);	sumscopes=sumscopes+10;} else {scopes[i]=0;}
		i++;}
cloneScopes = scopes.slice();*/

/*random=random.reverse(4, 62);
things=things.reverse(4, 62);
pathAria=pathAria.reverse(4, 62);
description=description.reverse(4, 62);
scopes=scopes.reverse(4, 62);
files=files.reverse();*/

shuffle();

cutOff(30);


for(let i=0; i<slideAll; i++) {

let folder;	
let b = randoms(0,1);


if (b===0||i==0){
pathname[i]="./image_rti/";
pathname1[i]="image_rti_1/";
pathname2[i]="./image_rti/";

if(pathAria_1[i]==undefined){rotateArr[i] = false;} else {rotateArr[i] = true;}
pathAria[i]="";
pathAria_1[i]="";
scopes[i]=0;

//let btb=things[i];
//answerObj[btb]=scopes[i];
answerAll.push(
{things: "emp_"+things[i]+"", scopes: scopes[i], click: 0}
);


}
else
{

if(pathAria_1[i]==undefined){rotateArr[i]=false;} else {rotateArr[i]=true;}
if(pathAria2[i]==undefined){folder = 1;} else {folder = randoms(1,2);}


pathname[i]="./image_rti"+folder+"/";
pathname1[i]="image_rti"+folder+"_1/";
pathname2[i]="./image_rti"+folder+"/";
scopes[i]=10; 

answerAll.push(
{things:things[i], scopes: scopes[i],click: 0, answer:"No"}
);

	
sumscopes=sumscopes+10; 



//let btb=things[i];
//answerObj[btb]=scopes[i];

}	




superb.insertAdjacentHTML('beforebegin', '<div class="slide"><img  usemap="#id'+random[i]+'_Map"  id="slide'+i+'" BORDER = "0" src='+pathname[i]+files[i]+'+NO.jpg></div>')
//./img/mva11/

if (folder==1){
	if(pathAria[i]){superс.insertAdjacentHTML('beforebegin', pathAria[i]);
	if(pathAria_1[i]!=undefined) {superс.insertAdjacentHTML('beforebegin', pathAria_1[i]);}   }}

if (folder==2){
	if(pathAria2[i]){superс.insertAdjacentHTML('beforebegin', pathAria2[i]);
	if(pathAria2_1[i]!=undefined) {superс.insertAdjacentHTML('beforebegin', pathAria2_1[i]);}   }}

}



cloneScopes = scopes.slice();





btnNext.addEventListener("click", function () {  pauseGO=1; dop=0; region77=0;  
	stopzooom();  //rotate(0);  
	
	
	
	if (viewSlide > 0)	{document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname[viewSlide]  + files[(viewSlide+0)] + '+NO.jpg'); }
		
	//if (viewSlide != slideAll){	document.getElementById('slide' + (viewSlide+1)).setAttribute('src', pathname  + files[(viewSlide+1)] + '+NO.jpg'); }
	 });

function click_handler() { 
	
	document.addEventListener('touchmove',() => {return false;});
	superTimer++;
	
	
	if (superTimer<2){ 
	
	let timer = setTimeout(function tick() { timer=setTimeout(tick ,10); 
	
	//if(superTimer>1){superTimer=0; clearInterval(tick); tick();}	
	
	
        
	btnPrev.addEventListener("click", function () { pauseGO=-1; timeBack=timeGo; stopzooom(); 
		
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src', pathname[viewSlide] + files[(viewSlide+0)] + '+NO.jpg'); 
		
		if (viewSlide > 0){ document.getElementById('slide' + (viewSlide-1)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide-1)] + '+NO.jpg'); }});
        
	btnPause.addEventListener("click", function () { pauseGO=0; return pauseGO; });



    //seconds = timeMinut%60
    //minutes = timeMinut/60%60
    //hour = timeMinut/60/60%60
    
	//console.log("timer", timer);
	
	/*if (min == '15') {
						
        clearInterval(timer);
        //alert("Время закончилось");
		}
     
	 
	 
	 else { 
	 
	 
      //  let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
       // timerShow.innerHTML = strTimer; 
		  
		
    }*/
  
   
	if (pauseGO==1) {timeGo=timeGo+speed; fulltimeGo++; /*stopzooom();*/ if(timeGo>=1000)
	{viewSlide++; if(!rotateArr[viewSlide]){btnSecond.style.display='none';}else{btnSecond.style.display='flex';} console.log(rotateArr[viewSlide]);
	timeGo=0; nameSlide++;  pauseGO=0; 	sumClicksOneImage=0;
	//pathname[viewSlide]=image_rti; 				
viewSlideShow.innerHTML = viewSlide; 

//viewobjectfind.innerHTML = objectfind[0]; 

viewobject.innerHTML = '<img src=' + image_object  + (0) + '.png width="250" alt=""> ';}}
    
	
   
   if (viewSlide === (slideAll-1) && timeGo>=700 || min == '15' ) { 	
   
   clearInterval(timer); 

			var timefortest = min+'.'+seconds;
			var clicksover = (45 - clicks); 
			if (clicksover<0) { scopess = (Math.round((scope/sumscopes)*100) + 5*clicksover); } 
			else {scopess = Math.round(scope/sumscopes*100);}
   
			function demo2() {
				
			 sessionStorage.setItem('level', levelmva);
			 sessionStorage.setItem('errornomers', scopess1);
			 sessionStorage.setItem('timefortest', timefortest);
			 sessionStorage.setItem('timefortestnew', clicks); 
			 
			 sessionStorage.setItem('penalize', penalize);
			 sessionStorage.setItem('badClick', badClick);
			 sessionStorage.setItem('scopess', scopess);
			 
			 document.location.href = "../../../application/otchet_xtvr.html";
			 //connect3_xtvr.php";
			 //
			 }
        
		
		function demo1() {
  console.log('Taking a break...');
  
	let myVar = getCookie("id_xtvs"); 
	//let courseGo = getCookie("courseGo"); 			
	let stroka=answerAll.map(a => `(${Object.values(a)})`).join("#"); 
		console.log(stroka);	
			
			
			let secondsAll=(min*60)+(seconds)*1;
			
			
			 
			goodClick = Math.round(scopess * sumscopes / 1000);
			badClick = clicks - goodClick;
			penalize = badClick * 3;
			scopess1 = scopess;
			scopess = scopess-penalize;
			if (scopess<0) {scopess=0;}
			
			
			//var errorname = errornomers;
			myVar = 'nameUser='+ encodeURIComponent(myVar)+" "+encodeURIComponent(timefortest)+" "+encodeURIComponent(scopess)+" "+encodeURIComponent(courseGo)+" "+encodeURIComponent(clicks)+" "+encodeURIComponent(secondsAll)+" "+encodeURIComponent(sumscopes/10)+" "+encodeURIComponent(stroka)+" "+encodeURIComponent(scopess1);   
			
			
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
    setTimeout(function b(){  console.log("Hello B"); resolve();}, 500);
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
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); // 1=S чуствительность
		 region77==1;} );
		
		btnHi.addEventListener("click", function () {dop = "H"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); // 1=S чуствительность
		region77==1;} );
		
		btnNonOrganic.addEventListener("click", function () {dop = "OS"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		region77==1;} );
		
		btnOrganic.addEventListener("click", function () {dop = "OO"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		region77==1;} );
		
		btnBlackwhite.addEventListener("click", function () {dop = "B"; region77=0; pauseGO=0; 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		region77==1;} );
		
		
		
		btnInverse.addEventListener("click", function () {dop = "NE"; region77=0; console.log(dop,region77,viewSlide); pauseGO=0; 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',   pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		region77==1;} );
		
		btnExit.addEventListener("click", function () {dop = "NO"; region77=0; console.log(dop,region77,viewSlide); pauseGO=0;  stopzooom(); 
		//alert(pathname[viewSlide]); 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		//document.getElementById('slide' + (viewSlide+1)).setAttribute('src',  pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;
		} );
		
		
		
		
		
		btnSecond.addEventListener("click", function () {
		if (pauseGO!=0){return false;}
		dop = "NO"; region77=0; //console.log(dop,region77,viewSlide); 
		pauseGO=0;  //stopzooom(); 
		rotate(1);
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src',  pathname[viewSlide] + files[(viewSlide+0)] + '+' + dop + '.jpg'); 
		//document.getElementById('slide' + (viewSlide+1)).setAttribute('src',  pathname + files[(viewSlide+1)] + '+' + dop + '.jpg'); region77==1;
		} );
		
		
		/*btnExit.addEventListener("click", function () {dop = "NO"; region77=0; stopzooom(); 
		document.getElementById('slide' + (viewSlide+0)).setAttribute('src','img/' +  pathname + files[(viewSlide+0)] '+' + dop + '.jpg'); 
		document.getElementById('slide' + (viewSlide+1)).setAttribute('src','img/' +  pathname + files[(viewSlide+1)] '+' + dop + '.jpg');} );*/
		
		
					
} 

function rotate(a){ if(zooming){return false;}
		 let ss=files[(viewSlide+0)].indexOf("_1.hif");
		 if (a==1&&ss==-1){ pathname[viewSlide]=pathname1[viewSlide];
		 files[(viewSlide+0)]=files[(viewSlide+0)].replace(".hif", "_1.hif");
		 //console.log("id"+viewSlide+"_map", document.getElementById("slide"+viewSlide).useMap);
		 let a = document.getElementById("slide"+viewSlide).useMap;
		 document.getElementById("slide"+viewSlide).useMap=a+"Y";
		 //console.log(document.getElementsByClassName("blah"));
		hiddens(1);
		 
		 //files[(viewSlide+1)]=files[(viewSlide+1)].replace(".hif", "_1.hif");
		 btnSecond.innerHTML="&#8635";} else
		 { pathname[viewSlide]=pathname2[viewSlide]; btnSecond.innerHTML="&#8634"; 
		 files[(viewSlide+0)]=files[(viewSlide+0)].replace("_1.hif", ".hif",);
		 let a = document.getElementById("slide"+viewSlide).useMap;
		 a=a.replace("Y","");
		 document.getElementById("slide"+viewSlide).useMap=a;
		 hiddens(0);
		 //files[(viewSlide+1)]=files[(viewSlide+1)].replace("_1.hif", ".hif");
		 }	
		 
}
let newarrai=[];
function hiddens(a)
{let pi
let point= document.getElementsByClassName("blah");

for(pi=0; pi< point.length; pi++)	




if (point[pi].style.visibility == "hidden")
{point[pi].style.visibility = "visible"; } else {point[pi].style.visibility = "hidden"; }
	
}
 
function superClick(x, y){ 
	document.querySelector('#slide').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    
	if (pauseGO!==0||zooming){ return false;}
	id_t = e.target.id; // Получили ID, т.к. в e.target содержится элемент по которому кликнули
	
	
	if (id_t.substr(0, 4)=="blah") {console.log(id_t.substr(0, 4)); var child = document.getElementById(id_t); 
	
	try {child.remove(child);  clicks--; viewClicsShow.innerHTML=clicks; sumClicksOneImage--; 
	answerAll[viewSlide].click=sumClicksOneImage; 
			
	/*alert(searchRegion);
	if (searchRegion){scope = scope - cloneScopes[3];	
							
		viewscope.innerHTML = Math.round((scope/sumscopes)*100) + "%" ;					
							searchRegion=false;	}*/
	
	}catch(err){}  } 
	
	if (id_t.substr(0, 4)=="blai") {console.log(id_t.substr(0, 4)); var child = document.getElementById(id_t); 
	
	try {
		
		
		
	child.remove(child);  clicks--; viewClicsShow.innerHTML=clicks; 
	sumClicksOneImage--; 
	answerAll[viewSlide].click=sumClicksOneImage; 
					
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
						
						answerAll[viewSlide].answer="No";
						console.log(answerAll);
						searchRegion[key]=0;}
					}
					
					
					}
					
					
	
					
							
	
	
	viewscope.innerHTML ="&#128518;"; // Math.round((scope/sumscopes)*100) + "%" ;	//"&#128518;"; 				
							
	
	}catch(err){}  } 
	
	
	if (id_t.substr(0, 3)!="bla") { 
		
		clicks++; sumClicks++; viewClicsShow.innerHTML=clicks; sumClicksOneImage++; 
		answerAll[viewSlide].click=sumClicksOneImage; 
		
	let liLast = document.createElement('div');
		liLast.setAttribute( "id", "blah"+sumClicks );
		liLast.setAttribute( "class", "blah" );
		//liLast.setAttribute( "visibility", "visible" );
		liLast.style.visibility = "visible";
		
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
	
	if (pauseGO!==0||zooming){return false;}
	
	let liLast = document.createElement('div');
		liLast.setAttribute( "id", "blai"+sumClicks );
		liLast.setAttribute( "class", "blah" );
		liLast.style.visibility = "visible";
		
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
		
		
 
 window.onload = function() {	
 testTimer(0);
 setTimeout(MediaRecorder.start, 1000); 
 click_handler(); 
 superClick(-15,-30);
 }

 $("#slide").click(function  (event) {
        //++clicks; 
		if (pauseGO!==0||zooming){return false;}
		viewobjecttext.innerHTML = "&#128518;";//'ничего нет'; //"&#128518;";//
		
			
		  document.querySelector("#slide").click = function (event) {
  event = event || window.event;
  console.log(event);
  
};
		
		
		
		});

                  function selectRegion (ctx, region) {
					  
		++sumClicks		
		++clicks; 
		sumClicksOneImage++; 
	answerAll[viewSlide].click=sumClicksOneImage; 
		
		superClick1(-15 ,510);
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
						answerAll[viewSlide].answer="Yes";
						
						
						
						
						viewobjecttext.innerHTML = "&#128518;";// description[i]; //"&#128518;";//
						viewscope.innerHTML = "&#128518;"; // Math.round((scope/sumscopes)*100) + "%" ; //"&#128518;"; //
						
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

let blinks;
 zooom();
var arrayzoom=[];
async function zooom() {
xx=0; yy=0; 
let movenUp;
let bottom;
let zoomAzoom;


btnZoom.addEventListener(mobileDown, function(){ 


	
let cl=document.getElementsByClassName('blah');
for (let i = 0, length = cl.length; i < length; i++) {
    if(cl[i].style.visibility=='visible')
	{
	arrayzoom[i]=cl[i];	
	cl[i].style.visibility = 'hidden';	newarrai[i]=1;
	}
	}


zoomAzoom=1;
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(zoomen, 50); 

});

btnAZoom.addEventListener(mobileDown, function(){ 

zoomAzoom=-1; 
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(zoomen, 50); 
  });



btnLeft.addEventListener(mobileDown, function(){ 

var el=document.getElementById('slide' + (viewSlide));

bottom=-2;
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(moven, 50);
});

btnRight.addEventListener(mobileDown, function(){ 

bottom=2;
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(moven, 50);
});

btnTop.addEventListener(mobileDown, function(){ 

bottom=-1;
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(moven, 50);
});

btnDown.addEventListener(mobileDown, function(){ 

bottom=1;
clearInterval(blinks); blinks=setInterval(blinkin,250);
movenUp = setInterval(moven, 50);
});

document.addEventListener(mobileUp, function(){ 

//if(zooming){ clearTimeout(movenUp);}
clearTimeout(movenUp);
});

function moven()
{
if(pauseGO!=0){return false;}
zooming=true;
let el=document.getElementById('slide' + (viewSlide));
if(bottom==1||bottom==-1){yy=yy+2*bottom;}
el.style.top = yy+"px"; 
el.style.position = "relative";
if(bottom==2||bottom==-2){xx=xx+2*bottom;el.style.left = xx+"px"; 
el.style.position = "relative";}
}

function zoomen()
{
if(pauseGO!=0){return false;}

zooming=true;
var el=document.getElementById('slide' + (viewSlide));
var z=document.getElementById('slide' + (viewSlide)).width; 

if(z<=2500&&zoomAzoom==1){
 var x=z+100;
 
el.width=z+5; 
z=z+5;
xx=xx-3;
yy=yy-3;
el.style.position = "relative";
el.style.left = xx+"px";
el.style.top = yy+"px";
}
 
 if(z>=1005&&zoomAzoom==-1){ 
 var x=z-100; 

el.width=z-5; 
z=z-5;
xx=xx+3;
yy=yy+3;
el.style.position = "relative";
el.style.left = xx+"px";
el.style.top = yy+"px";
 } 
if(z<1005&&zoomAzoom==-1)
{  stopzooom();  }
}


function blinkin() {
	
	
	if (document.getElementById("exit1").style.fontWeight=="900"){
	document.getElementById("exit1").style.fontWeight="100";} else {document.getElementById("exit1").style.fontWeight="900";}
	
}

} 


function stopzooom() {xx=0; yy=0; 
clearTimeout(blinks);
var el=document.getElementById('slide' + (viewSlide)); 
el.style.top=0; el.style.left=0; el.width=1000;
arrayzoom = arrayzoom.filter(Boolean);
let cl=document.getElementsByClassName('blah'); 
for (let i = 0, length = arrayzoom.length; i < length; i++) {
    if (newarrai[i]==1) {newarrai[i]=0; arrayzoom[i].style.visibility = 'visible';}
  }

zooming = false;
}





  
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

function randoms(min, max){
let rand = min + Math.random()*(max+1-min);
return Math.floor(rand);}	
	
function disableContex(e) {
	var clickedel = (e==null) ? event.srcElement.tagName : e.target.tagName;
	if (clickedel=="IMG") {return false;}
}


document.oncontextmenu = disableContex;
//window.addEventListener("unload", function() { setCookie("id",""); });
if(getCookie("id_xtvs")==null){document.location='https://training.aeromash.ru/xtvs/';}
	
	
	