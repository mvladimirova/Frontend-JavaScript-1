/*globals $*/
"use strict";

$(document).ready(function(){
  var currentMins = 0,
    currentSecs = 0,
    millSecs = 0,
    intervalID = null,
    timeoutID = null,
    countUp = "#count-up",
    countDown = "#count-down",
    enteredMins = parseInt($("#minutes").val()),
    enteredSecs = parseInt($("#seconds").val());

    $(countUp).attr("disabled", false);
    $(countDown).attr("disabled", false);

    if(isNaN(enteredMins)){
      enteredMins = 0;
    }

    if(isNaN(enteredSecs)){
      enteredSecs = 0;
    }

  $("#minutes").on("change", function(){
    var mins = parseInt($("#minutes").val());
    if(mins > 60){
      $("#minutes").val("60");
    }
    if(mins < 0){
      $("#minutes").val("0");
    }
  });

  $("#seconds").on("change", function(){
    var secs = parseInt($("#seconds").val());
    if(secs > 60){
      $("#seconds").val("59");
    } else if(secs < 0){
      $("#seconds").val("0");
    }
  });

  $("#stop").on("click", function(){
    if(intervalID !== null){
      clearInterval(intervalID);
    }
    if(timeoutID !== null){
      clearTimeout(timeoutID);
    }
    currentMins = 0;
    currentSecs = 0;
    changeTimer(currentMins, currentSecs);
    $(countUp).attr("disabled", false);
    $(countDown).attr("disabled", false);
  });

  $(countUp).on("click", function(){
    $(countDown).attr("disabled", "disabled");

    currentMins = enteredMins;
    currentSecs = enteredSecs;

    millSecs = 1000 * currentSecs + 60*1000*currentMins;
    currentSecs = 0;
    currentMins = 0;
    changeTimer(currentMins, currentSecs);

    intervalID = setInterval(function(){
      changeTimer(currentMins, currentSecs);
      incrementSec();
    },1000);

    timeoutID = setTimeout(function(){
      clearInterval(intervalID);
    },millSecs + 1000);
  });

  $(countDown).on("click",function(){
    $(countUp).attr("disabled", "disabled");

    currentMins = enteredMins;
    currentSecs = enteredSecs;

    changeTimer(currentMins,currentSecs);
    millSecs = 1000 * currentSecs + 60 * 1000 * currentMins;

    intervalID = setInterval(function(){
      changeTimer(currentMins,currentSecs);
      decrementSec();
    },1000);

    timeoutID = setTimeout(function(){
      clearInterval(intervalID);
    },millSecs + 1000);
  });

  var changeTimer = function(min, sec){
    $("#minute-first-digit").text(parseInt(min/10,10));
    $("#minute-second-digit").text((min%10));
    $("#second-first-digit").text(parseInt(sec/10,10));
    $("#second-second-digit").text((sec%10));
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
