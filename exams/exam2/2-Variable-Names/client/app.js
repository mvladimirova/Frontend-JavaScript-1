"use strict"
$(document).ready(function(){

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  $.ajax({
    url:"http://localhost:8080/names",
    type:"GET",
    dataType: "json"
  })
  .then(function success(names){
    var context = {"name": names};
    var html = template(context);
    $("#names").append(html);
  });

  $("#names").on("click", ".name-input", function(){
    $(".name-update").prop("disabled", true);
    $(this).siblings("button.name-update").prop("disabled", false);
  });

  $("#names").on("click", ".name-update", function(){
    var input = $(this).siblings("input.name-input");
    var name = input.val();
    var nameId = input.data("nameid");

    var updateName = $.ajax({
      url: "http://localhost:8080/name",
      type: "POST",
      data: JSON.stringify({
        name: name,
        nameId : nameId
      }),
      contentType: "application/json"
    });

    updateName.done(function(){
      window.location.reload();
    });

  });

});
