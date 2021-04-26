$(function () {
  $.ajax({
    type: 'GET',
    url: 'json/main.json',
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