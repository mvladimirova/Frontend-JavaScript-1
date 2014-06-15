"use strict";

$(document).ready(function(){
  var currentMins = 0;
  var currentSecs = 0;
  var millSecs = 0;
  var intervalID = null;
  var timeoutID = null;

  $("#minutes").on("change", function(){
    var mins = parseInt($("#minutes").val(),10);
    if(mins > 60){
      $("#minutes").val("60");
    }
    if(mins < 0){
      $("#minutes").val("0");
    }
  });

  $("#seconds").on("change", function(){
    var secs = parseInt($("#seconds").val(),10);
    if(secs > 60){
      $("#seconds").val("60");
    } else if(secs < 0){
      $("#seconds").val("0");
    }
  });

  $("#stop").on("click", function(){
    if(intervalID !== null){
      window.clearInterval(intervalID);
    }
    if(timeoutID !== null){
      window.clearTimeout(timeoutID);
    }
    currentMins = 0;
    currentSecs = 0;
    changeTimer(currentMins, currentSecs);
  });

  $("#count-up").on("click", function(){
    currentMins = parseInt($("#minutes"),10);
    currentSecs = parseInt($("#seconds"),10);
    millSecs = 1000 * currentSecs + 60*1000*currentMins;
    currentSecs = 0;
    currentMins = 0;
    changeTimer(currentMins, currentSecs);

    intervalID = window.setInterval(function(){
      changeTimer(currentMins, currentSecs);
      incrementSec();
    },1000);
    
    timeoutID = window.setTimeout(function(){
      window.clearInterval(intervalID);
    },millSecs + 1000);
  });

  $("#count-down").on("click",function(){
    currentMins = parseInt($("#minutes"),10);
    currentSecs = parseInt($("#seconds"),10);
    changeTimer(currentMins,currentSecs);
    millSecs = 1000 * currentSecs + 60 * 1000 * currentMins;

    intervalID = window.setInterval(function(){
      changeTimer(currentMins,currentSecs);
      decrementSec();
    },1000);

    timeoutID = window.setTimeout(function(){
      window.clearInterval(intervalID);
    },millSecs + 1000);
  });

  var changeTimer = function(min, sec){
    $("#minute-first-digit").html(parseInt(min/10,10));
    $("#minute-second-digit").html((min%10));
    $("#second-first-digit").html(parseInt(sec/10,10));
    $("#second-second-digit").html((sec%10));
  };

  var incrementSec = function(){
    if (currentSecs === 59 && currentMins < 59){
      currentSecs = 0;
      currentMins += 1;
    } else if (currentSecs < 59){
      currentSecs += 1;
    }
  };

  var decrementSec = function(){
    if(currentMins > 0 && currentSecs === 0){
      currentMins -= 1;
      currentSecs = 59;
    } else if (currentSecs > 0){
      currentSecs -= 1;
    }
  };

});
