$(document).ready(function() {
  "use strict";

  var inputField = $("#search-input");
  var galery = $(".container");

  var loadImage = function(){
    var url = inputField.val();
    var img = $("<img>");
    img.load(function(){
      galery.append(img);
    });

    img.attr("src", url);
    img.on("click", function(){
      $(this).remove();
    });
  };
  $("#search-button").on("click", loadImage);
});
