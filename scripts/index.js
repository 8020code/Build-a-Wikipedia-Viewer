'use strict';

$(document).ready(function () {

  $("#f1").submit(function (event) {
    event.preventDefault();
    search($("#st").val());
    console.log('submit');
  }); 
  var search = function (q) {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&origin=*&format=json&srsearch=" + q, function (data) {
      var query, search, title, pageid, snippet;
      var pagesJSON = data.query.search;
      console.log(data);

      var keys = Object.keys(pagesJSON);
      if (data !== undefined) {
        $("#done").empty();
        $("#done").append('<h1>Results</h1>');
        for (var i in pagesJSON) {
          console.log(pagesJSON[i].title);          

          $("#done").append('<h2><a target="_blank" href="http://en.wikipedia.org/?curid=' + pagesJSON[i].pageid + '">' + pagesJSON[i].title + '</a></h2><br><h3>' + pagesJSON[i].snippet +'</h3><br>');
        }
      }
    });

  };


});

