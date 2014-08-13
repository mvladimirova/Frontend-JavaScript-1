$(document).ready(function (){
  "use strict";
  var canvas = document.getElementById("triangles-canvas"),
      width = canvas.width,
      height = canvas.height,
      context = canvas.getContext("2d"),
      points = [],
      allItems = [],
      name;

  context.fillStyle = "black";

  function Point(x, y, context){
    this.x = x;
    this.y = y;
    this.context = context;

  }

  var drawTriangle = function(points){
    context.beginPath();
    var a = points.pop();
    context.moveTo(a.x, a.y);
    var b = points.pop();
    context.lineTo(b.x, b.y);
    var c = points.pop();
    context.lineTo(c.x, c.y);
    context.fill();
  };

  var getAllItems = (function(){
    for(var i in window.localStorage){
       allItems.push({name: i});
    }
  }());

  var loadAllImages = function(data){
    var template = $("#entry-template").html();
    var f = Handlebars.compile(template);
    var context = {items: data};
    $("#img-load").append(f(context));
  };

  loadAllImages(allItems);


  $("#triangles-canvas").on("click", function(){
    var x = event.pageX;
    var y = event.pageY;
    var point = new Point(x, y, context);
    points.push(point);
    if (points.length === 3){
      drawTriangle(points);
    }
  });

  $("#triangle-color").on("change", function(){
    context.fillStyle = this.value;
  });

  $("#clear-button").on("click", function(){
    context.clearRect(0, 0, width, height);
  });

  $("#save-button").on("click", function(){
    name = prompt("Name for the picture:");
    localStorage.setItem(name, canvas.toDataURL());
    allItems.push({name: name});
    $("#img-load").empty();
    loadAllImages(allItems);
  });

  $("#img-load").on("click", function(){
    name = this.value;
  });

  $("#load-button").on("click", function(){
    context.clearRect(0, 0, width, height);
    var img = new Image();
    img.onload = function(){
      context.drawImage(img,0,0);
    };
    img.src = localStorage.getItem(name);
  });

});
