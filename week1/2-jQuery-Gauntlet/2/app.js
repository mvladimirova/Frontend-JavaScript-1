"use strict";

$(document).ready(function(){
  var paragraphs = [];

  var children = $("#mightyParagraphHolder").children();
  children.each(function (par){
    paragraphs.push(children[par]);
  });

  $("button").on("click", function(){
    $("p").removeClass(".highlight");

    var current = paragraphs.shift();
    $(current).addClass(".highlight");
    paragraphs.push(current);
  });

});

