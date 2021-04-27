$(function () {

  function createSingleAlbums (imgUrl, title, photoNum, viewNum)  {
    return `<div class="col-12 col-md-4 col-lg-3 mb-4">
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
  </div>`;
  }

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

      //set image data
      const albumsElements = albums.map((album) => {
        return createSingleAlbums(album.imgUrl, album.title, album.photoNum, album.viewNum);
      }); 
      $('#albumSection').append(albumsElements);
    },
    error(err) {
      console.log(err);
      throw (err);
    }
  })
})