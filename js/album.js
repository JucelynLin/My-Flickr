$(function () {
  const query = (window.location.search).split('?')[1];
  const id = query.split('&')[0].split('=')[1];

  $.ajax({
    type: 'GET',
    url: `json/json${id}.json`,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success(data) {
      console.log(data);
    },
    error(err) {
      console.log(err);
      throw (err);
    }
  })
  
})