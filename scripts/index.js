/*jslint browser: true*/
/*global $, jQuery*/
/*global document, window, alert, console, require*/

$(document).ready(function () {
  'use strict';

  var search = function (q) {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&origin=*&format=json&srsearch=" + q, function (data) {
      var query, search, title, pageid, snippe, pagesJSON = data.query.search, keys = Object.keys(pagesJSON), i;
      console.log(data);

      if (data !== undefined) {
        $("#done").empty();
        $("#done").append('<div id="fa"><h1>Results <i class="fa fa-times-circle" aria-hidden="true"></i></h1></div>');
        
        for (i in pagesJSON) {
          if (pagesJSON.hasOwnProperty(i)) {
            console.log(pagesJSON[i].title);
            $("#done").append('<div class="res"><p><a target="_blank" href="http://en.wikipedia.org/?curid=' + pagesJSON[i].pageid + '">' + pagesJSON[i].title + '<br>' + pagesJSON[i].snippet + '</p></a></div>');
          }
        }
      }
      $("#fa").click(function () {
        $("#done").empty();
        console.log('fa');
      });
    });
  };
  $("#f1").submit(function (event) {
    event.preventDefault();
    search($("#st").val());
    console.log('submit');
    $("form").trigger("reset");
  });

});