let urlStr = document.location.toString()
/*let urlAry = urlStr.split("?");
console.log(urlAry);

let urlAry2 = urlAry[1].split("&");
console.log(urlAry2);

for(let i=0;i<urlAry2.length;i++){
	urlAry2[i].spilt('=');
}*/
let urlID = urlStr.split('?')[1];
console.log(urlID);

let para = {};
let url = "https://api.mocki.io/v1/"+urlID;
$.get(url, function(data) {
	console.log(data);
	$('.imgCover').attr('src',data.imgurl);
}).fail(function() {
	console.log("Fail");
});