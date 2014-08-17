$(document).ready(function(){
  "use strict";

  $.getJSON("http://localhost:3000/books", function(books){
    var source = $("#entry-template").html(),
        template = Handlebars.compile(source),
        context = {"book": books},
        html = template(context);

    $('.container').append(html);
  });
});
