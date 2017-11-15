'use strict';

$(document).ready(function () {

  $("#f1").submit(function (event) {
    event.preventDefault();
    search($("#st").val()); // content of input field
    console.log('submit');    
  });
  var search = function (q) {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + q, function (data) {
      var pagesJSON = data.query.pages;
      console.log(pagesJSON);

      var keys = Object.keys(pagesJSON);
      if (data !== undefined) {
        $("#done").empty();
        $("#done").append('<p>Results<p/>');
        for (var i in pagesJSON) {
          console.log(pagesJSON[i].title);
          $("#done").append('<p>' + JSON.stringify(pagesJSON[i].title) + '</p>');
        }
      }
    });
  };
});

