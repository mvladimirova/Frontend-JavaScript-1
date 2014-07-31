"use strict"
$(document).ready(function(){

  var source = $("#entry-template").html(),
      template = Handlebars.compile(source),
      url = "http://localhost:8080/names";

  $.ajax({
    url: url,
    type:"GET",
    dataType: "json"
  })
  .then(function success(names){
    var context = {"name": names},
        html = template(context);
    $("#names").append(html);
  });

  $("#names").on("click", ".name-input", function(){
    $(".name-update").prop("disabled", true);
    $(this).siblings("button.name-update").prop("disabled", false);
  });

  $("#names").on("click", ".name-update", function(){
    var input = $(this).siblings("input.name-input"),
        name = input.val(),
        nameId = input.data("nameid");

    var updateName = $.ajax({
      url: url,
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
