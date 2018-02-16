window.onload = function(){
	var iHeight = window.innerHeight;
	var iWidth = window.innerWidth;
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
	//var aImg = aLi.getElementsByTagName("img");
	var oImg = oList.getElementsByTagName("img");

	
	//alert(oLin.style.width);
	oTimg.style.height = iHeight*0.67 + 'px'; 
	oTimg.style.paddingTop = iHeight*0.25 + 'px'; 

	oBimg.style.height = iHeight*2.32 + 'px'; 

	oNav.style.width = iWidth*0.25 + 'px';
	oNav.style.height = oTimg.style.height;

	oFlo.style.width = iWidth*0.06 +'px';
	oFlo.style.height = 'auto'; 

	oLin.style.width = iWidth*0.75 + 'px';
	oNav.style.top =  iHeight*0.2 + 'px';
	
	var oLinH = oLin.height;
	var oFloH = oFlo.height;
	//alert(oLinH);
	oLin.style.top = (iHeight*0.96-oLinH)+'px';
	oFlo.style.top = (iHeight*0.73 -oFloH-420)+'px';

	oList.style.height = iWidth*0.5 +'px';
	oList.style.borderRadius = iWidth*0.05 +'px';
	oBimg.style.paddingTop = iHeight*0.16 + 'px';


	for (var i = oImg.length - 1; i >= 0; i--) {
		oImg[i].style.width = 320 + 'px';
		oImg[i].style.height = 'auto';
	};


}
	var oAd=['sleepyhead.html','pioneer.html','phone.html','kindle.html','alley.html','others.html'];
	var turn= function(num){
		window.open(oAd[num])	}


