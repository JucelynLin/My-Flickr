let album = {};	//let album = new Object();
album.imgurl = "//live.staticflickr.com/7601/26782193291_d5eb93b0af_k.jpg";
album.name = "Home in the Woods";
album.info = "Mysterious World";
album.photoNum = "301 photos";
album.videoNum = "0";
album.viewNum = "150 views";
album.author = "By: Sharon (&Wayne) ";
album.authorImg = "//farm66.staticflickr.com/65535/buddyicons/68534577@N05_l.jpg";
album.images = [];	//album.images= new Array();

let ary = [];
let img =  {};
img.ID = "1";
img.imgurl = "//live.staticflickr.com/7601/26782193291_9c9315f4b4_b.jpg";
img.title = "Old Sam Peabody";
img.author = "by Sharon (&Wayne)";
img.likeNum = "68";
img.commentNum = "32";
ary.push(img);

// 第二張照片
img =  {};
img.ID = "2";
img.imgurl = "//live.staticflickr.com/7669/26697551792_f7bbc1fc0d_b.jpg";
img.title = "3 by 3";
img.author = "by Sharon (&Wayne)";
img.likeNum = "56";
img.commentNum = "32";
ary.push(img);

// 第三張照片
img =  {};
img.ID = "3";
img.imgurl = "//live.staticflickr.com/1535/26088156423_e328004dc3_b.jpg";
img.title = "Rude Awakening - EXPLORED";
img.author = "by Sharon (&Wayne)";
img.likeNum = "522";
img.commentNum = "67";
ary.push(img);

// 第四張照片
img =  {};
img.ID = "4";
img.imgurl = "//live.staticflickr.com/1666/26570435101_68f2e32735_n.jpg";
img.title = "Spring Beauty";
img.author = "by Sharon (&Wayne)";
img.likeNum = "62";
img.commentNum = "34";
ary.push(img);

// 第五張照片
img =  {};
img.ID = "5";
img.imgurl = "//live.staticflickr.com/1463/26496109066_d3ca920801.jpg";
img.title = "Dining at Fresco";
img.author = "by Sharon (&Wayne)";
img.likeNum = "69";
img.commentNum = "34";
ary.push(img);

// 第六張照片
img =  {};
img.ID = "6";
img.imgurl = "//live.staticflickr.com/1455/26065202266_459cca4997_c.jpg";
img.title = "A Little Downtime";
img.author = "by Sharon (&Wayne)";
img.likeNum = "55";
img.commentNum = "32";
ary.push(img);

// 第七張照片
img =  {};
img.ID = "7";
img.imgurl = "//live.staticflickr.com/1455/26065202266_459cca4997_c.jpg";
img.title = "Coral Lipstick";
img.author = "by Sharon (&Wayne)";
img.likeNum = "80";
img.commentNum = "45";
ary.push(img);

// 第八張照片
img =  {};
img.ID = "8";
img.imgurl = "//live.staticflickr.com/1681/25697736845_ce745b8bb4.jpg";
img.title = "Frosted";
img.author = "by Sharon (&Wayne)";
img.likeNum = "93";
img.commentNum = "46";
ary.push(img);

// 第九張照片
img =  {};
img.ID = "9";
img.imgurl = "//live.staticflickr.com/1456/25350521732_070ca99586.jpg";
img.title = "Lunch Date";
img.author = "by Sharon (&Wayne)";
img.likeNum = "88";
img.commentNum = "52";
ary.push(img);

// 第十張照片
img =  {};
img.ID = "10";
img.imgurl = "//live.staticflickr.com/1487/25136015012_6463f5bb18.jpg";
img.title = "Baby-O";
img.author = "by Sharon (&Wayne)";
img.likeNum = "69";
img.commentNum = "31";
ary.push(img);

// 第十一張照片
img =  {};
img.ID = "11";
img.imgurl = "//live.staticflickr.com/1528/24476574104_d48a46d19e.jpg";
img.title = "My Winter Joy";
img.author = "by Sharon (&Wayne)";
img.likeNum = "62";
img.commentNum = "28";
ary.push(img);

// 第十二張照片
img =  {};
img.ID = "12";
img.imgurl = "//live.staticflickr.com/1447/24459121345_5af171d47a.jpg";
img.title = "Hosta Carousel";
img.author = "by Sharon (&Wayne)";
img.likeNum = "67";
img.commentNum = "38";
ary.push(img);

// 第十三張照片
img =  {};
img.ID = "13";
img.imgurl = "//live.staticflickr.com/1599/23708296893_26d7a7acf1.jpg";
img.title = "Little Fuzz Face";
img.author = "by Sharon (&Wayne)";
img.likeNum = "62";
img.commentNum = "36";
ary.push(img);

// 第十四張照片
img =  {};
img.ID = "14";
img.imgurl = "//live.staticflickr.com/5836/23784821361_5d89132ebc_w.jpg";
img.title = "Peace and Joy -  EXPLORED";
img.author = "by Sharon (&Wayne)";
img.likeNum = "215";
img.commentNum = "42";
ary.push(img);

// 第十五張照片
img =  {};
img.ID = "15";
img.imgurl = "//live.staticflickr.com/697/23284835829_f1767f38e3_w.jpg";
img.title = "Visions of Sugar Plums";
img.author = "by Sharon (&Wayne)";
img.likeNum = "51";
img.commentNum = "28";
ary.push(img);

// 指定陣列只要最後指定一次
album.images = ary;
console.log(JSON.stringify(album));
console.log(album);