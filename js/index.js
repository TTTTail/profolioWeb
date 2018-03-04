var iHeight = window.innerHeight;
var iWidth = window.innerWidth;
var heightT = iHeight*0.3;
var heightB = iHeight*0.05;
var loadingHTML = '<div id="loadingDiv" style="width: 100%;height: '+iHeight+'px;display: block;z-index: 99;background-color: #fff;position: absolute;"><div style="font-size: 1em;color:#000;margin-top:'+heightT+'px;margin-bottom:0px;">Fullscreen for the best<br>a rabbit whose interest is to fly in the sky with ears and tug at girls\' heartstrings</div><img src="img/rabbit.gif" style="width: 40%;height: auto;margin:auto;"></div>';

document.write(loadingHTML);

function completeLoading() {  
            if (document.readyState == "complete") {  
                var loadingMask = document.getElementById('loadingDiv');  
                loadingMask.parentNode.removeChild(loadingMask);  
                document.getElementById('body').style.overflow='visible'; 
            }  
        }  



window.onload = function(){
	var sHeight = window.screen.height;
	var sWidth = window.screen.width;

	//alert(iHeight);
	//alert(iWidth);

	var oNav = document.getElementById("nav");
	var oLin = document.getElementById("lin");
	var oTimg = document.getElementById("tImg");
	var oBimg = document.getElementById("bImg");
	var oFlo = document.getElementById("flo");
	var oList = document.getElementById('list');
	var oLi = document.getElementById('list').getElementsByTagName("li");
	var oImg = oList.getElementsByTagName("img");
	var oIntro = document.getElementById('intro');
	var oBody = document.getElementsByTagName('body');

	oTimg.style.height = iHeight*0.67 + 'px'; 
	oTimg.style.paddingTop = iHeight*0.25 + 'px'; 

	oBimg.style.height = iHeight*1.8 + 'px'; 

	oNav.style.width = iWidth*0.25 + 'px';
	oNav.style.height = oTimg.style.height;

	oFlo.style.width = iWidth*0.06 +'px';
	oFlo.style.height = 'auto'; 

	oLin.style.width = iWidth*0.75 + 'px';
	oNav.style.top =  iHeight*0.2 + 'px';
	
	var oLinH = oLin.height;
	var oFloH = oFlo.height;

	oLin.style.top = (iHeight*0.96-oLinH)+'px';
	oFlo.style.top = (iHeight*0.73 -oFloH-420)+'px';

/*
	oList.style.height = iWidth*0.5 +'px';
	oList.style.width = iWidth*0.8 + 'px';
	oList.style.borderRadius = iWidth*0.05 +'px';
*/
	oBimg.style.paddingTop = iHeight*0.16 + 'px';

	oIntro.style.width = iWidth + 'px';
	oIntro.style.height = iWidth*0.2 + 'px';
	oIntro.style.textAlign = 'center';
	oIntro.style.paddingTop = iHeight*0.26 + 'px';
	oIntro.style.paddingBottom = iHeight*0.03 + 'px';


	/*for (var i = oImg.length - 1; i >= 0; i--) {
		oImg[i].style.width = 100 + '%';
		oImg[i].style.height = 'auto';
	};*/

	document.getElementById('cir').style.borderWidth = iWidth*0.005 +'px';

	window.setTimeout("completeLoading();",500);

}

	var oAd=['sleepyhead.html','pioneer.html','phone.html','kindle.html','alley.html','others.html']

	var turn= function(num){
		window.open(oAd[num])	}


