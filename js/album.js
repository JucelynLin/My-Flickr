$(function () {
  const query = (window.location.search).split('?')[1];
  const id = query.split('&')[0].split('=')[1];
  function createPhotoElements(imgUrl, photoTitle, author, ratingNum, commentNum) {
    return `<div class="col-4 px-0 my-2 photo-space">
    <div style="background-image: url(${imgUrl})" class="image-holder">
      <div class="d-flex flex-column justify-content-end h-100 photo-layer pb-1">
        <div class="photo-content mx-2">
          <p class="photo-title font-weight-bold mb-0">${photoTitle}</p>
          <div class="d-flex justify-content-between align-items-center sub-content">
            <span class="author">
              By ${author}
            </span>
            <div style="width: 45%;" class="d-flex justify-content-end align-items-end rating">
              <div class="star rating-width">
                <i class="fa fa-star-o custom-icon" aria-hidden="true"></i>
                <span class="rating-text">
                  ${ratingNum}
                </span>
              </div>
              <div class="comment rating-width">
                <i class="fa fa-comment-o custom-icon" aria-hidden="true"></i>
                <span class="rating-text">
                  ${commentNum}
                </span>
              </div>
              <div class="bookmark rating-width">
                <i class="fa fa-plus-square-o custom-icon" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  }

  $.ajax({
    type: 'GET',
    url: `json/json${id}.json`,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success(data) {
      console.log(data);
      const { album, photos } = data;
      //set user data 
      $('#albumTitle').text(album.title);
      $('#albumDes').text(album.description);
      $('#albumPhotoNum').text(album.photoNum);
      $('#albumVideoNum').text(album.videoNum);
      $('#albumViewNum').text(album.viewNum);
      $('#author').text(album.author);
      $('#banner').css({
        "background": `url(${album.imgUrl})`, 
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
      const photoElements = photos.map((photo) => {
        return createPhotoElements(photo.imgUrl, album.title, photo.author, photo.likeNum, photo.commentNum);
      }); 
     
      $('#photoSection').append(photoElements);
    },
    error(err) {
      console.log(err);
      throw (err);
    }
  })
  
})