window.onload=function(){
document.getElementById('nuoyis-load').style.display='none';
}

function banquan(){
console.log("%c nuo-webpages %c https://www.nuoyis.com ", "color: #fff; margin: 1em 0; padding: 5px 0; background: #EE0000;", "margin: 1em 0; padding: 5px 0; background: #66CCFF;");	
}

function baidutongji(id){
var _hmt = _hmt || [];
(function() {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?"+id;
   var s = document.getElementsByTagName("script")[0]; 
   s.parentNode.insertBefore(hm, s);
})();
}

function mydev(){
var mydev = nuoajax("./js/json/mydevs.json","GET","json");
var nuoweb = '';
for (i=0;i<mydev.length;i++) {
var url="#";
var description="该用户没有介绍哦";
if(mydev[i].url!='') url=mydev[i].url;
if(mydev[i].description!='') description=mydev[i].description;
if(mydev[i].images=='')
{
nuoweb += `
           <a class="nuoyis-project-url" href="${url}">
		    <i class="nuoyis-project-images"></i>
		    <div class="nuoyis-project-text">
		    <h2>${mydev[i].name}</h2>
		    <p>
             ${description}
		    </p>
		    </div>
			</a>`
}else{
nuoweb += `
           <a class="nuoyis-project-url" href="${url}">
		    <i class="nuoyis-project-images" style="background-image: url(${mydev[i].images});"></i>
		    <div class="nuoyis-project-text">
		    <h2>${mydev[i].name}</h2>
		    <p>
             ${description}
		    </p>
		    </div>
			</a>`
}
}
document.getElementById("nuoyis-dev").innerHTML = nuoweb; 
}

function friend(){
var friend = nuoajax("./js/json/friends.json","GET","json");
var nuoweb = '';
for (i=0;i<friend.length;i++) {
var url="#";
var description="该用户没有介绍哦";
if(friend[i].url!='') url=friend[i].url;
if(friend[i].description!='') description=friend[i].description;
if(friend[i].images=='')
{
nuoweb += `
           <a class="nuoyis-project-url" href="${url}">
		    <i class="nuoyis-project-images"></i>
		    <div class="nuoyis-project-text">
		    <h2>${friend[i].name}</h2>
		    <p>
             ${description}
		    </p>
		    </div>
			</a>`
}else{
nuoweb += `
           <a class="nuoyis-project-url" href="${url}">
		    <i class="nuoyis-project-images" style="background-image: url(${friend[i].images});"></i>
		    <div class="nuoyis-project-text">
		    <h2>${friend[i].name}</h2>
		    <p>
             ${description}
		    </p>
		    </div>
			</a>`
}
}
document.getElementById("nuoyis-friend").innerHTML = nuoweb; 
}

function qiye(){
var qiye = nuoajax("./js/json/qiye.json","GET","json");
var nuoweb = '';
for (i=0;i<qiye.length;i++) {
nuoweb += `
	    <a class="nuoyis-project-url" href="${qiye[i].url}">
	        <div class="nuoyis-project-text">
	    <h2>${qiye[i].name}</h2>
	    <p>
	     ${qiye[i].description}
	    </p>
	    </div>
		</a>`
}
document.getElementById("nuoyis-project").innerHTML = nuoweb;
}

function nuoajax(load,type,datatype){
var retdata = 'null'; 
$.ajax({
 async:false,
 url: load,
 type: type,
 dataType: datatype,
 success: 
 function (data) {
     retdata= data;
 }
});
return retdata;
}

function scroll() {
	var top = $(".nuoyis-header").offset().top;//获取导航栏变色的位置距顶部的高度
	var scrollTop = $(window).scrollTop();//获取当前窗口距顶部的高度
	if (scrollTop <= top) {
		$('.nuoyis-nav').css('background-color', 'transparent');
		$('nuoyis-logo a').css('color', 'white');
		$('nuoyis-nav-text a').css('color', 'white');
	} else {
		$('.nuoyis-nav').css('background-color', 'rgba(255,255,255,.8)');
		$('nuoyis-logo a').css('color', 'black');
		$('nuoyis-nav-text a').css('color', 'black');
	}
}
$(window).on('scroll', function() {
	scroll()
});

banquan();
mydev();
friend();
qiye();
//公开调用区域
baidutongji("ddf6518e6342081616771c42a366c0f4");