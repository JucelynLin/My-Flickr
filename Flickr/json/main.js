let idAry = [];
idAry.push("566d0645");
idAry.push("ff86ee5e");
idAry.push("5eb66175");
idAry.push("826dfdb6");
idAry.push("5c6309e8");

for(let i = 0; i < idAry.length; i++){
	let url = "index.html?"+idAry[i];
	let htmlCode = '<div class="aaa"><a href="'+url;
	htmlCode +='"target="_blank">'+idAry[i]+'</a></div>';
	$('body').append(htmlCode);
}