$(function () {

  function createSingleAlbums (imgUrl, title, photoNum, viewNum, toSubAlbum)  {
    return (
      `<div class="col-12 col-md-4 col-lg-3 mb-4">
        <a href="/album.html?id=${toSubAlbum}">
          <div class="box1">
            <div class="img img1" data-target="#carouselExample" data-slide-to="0">
              <img src="${imgUrl}" alt="">
            </div>
            <div class="info">
              <div class="line line1">${title}</div>
              <div class="line line2">${photoNum} 張照片，${viewNum} 次檢視</div>
              <div class="line line3">
                <i class="fa fa-share"></i>
                <i class="fa fa-download"></i>
              </div>
            </div>
          </div>
        </a>
       </div>`
  );
  }

  //get post put delete
  // 127.0.0.1 local hostname
  //live server -> localhostname+5500 port 
  //url -> /json -> localhostname+port/json
  $.ajax({
    type: 'GET',
    url: 'json/main.json',
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success(data) {
      const { user, albums } = data;
      //set user data
      $('.banner').css("background", `url(${user.imgUrl})`);
      $('#username').text(user.author);
      $('#phtoNum').text(user.pohotoNum);
      $('#followerQuantity').text(user.follower);
      $('#followingQuantity').text(user.following);
      $('#avatar').attr('src', user.authorImg);

      //set albums data
      const albumsElements = albums.map((album) => {
        return createSingleAlbums(album.imgUrl, album.title, album.photoNum, album.viewNum, album.photos);
      }); 
     
      $('#albumSection').append(albumsElements);
    },
    error(err) {
      console.log(err);
      throw (err);
    }
  })
})