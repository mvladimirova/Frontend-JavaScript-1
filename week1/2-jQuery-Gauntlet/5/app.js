'use strict'

$(document).ready(function(){

  var randomNumHolder = $('#container').find('h1').find('span'),
      guessedNum = $('#container').find('h2').find('span');

  randomNumHolder.text(getRandomInt(100, 100000));

  $('#go-back').on('click', function(){
    var numForNow = guessedNum.text(),
        lastNumRemoved = numForNow.substring(0, numForNow.length - 1);

    guessedNum.text(lastNumRemoved);
  });

  $('.nums').on('click', function(){
    var numForNow = guessedNum.text(),
        newNum = numForNow + $(this).text();

    guessedNum.text(newNum);
    checkIfPlayerWins();
  });

  function checkIfPlayerWins(){
    if (randomNumHolder.text() === guessedNum.text()){
      var newGame = confirm('You won!' +
                            'Do you want to continue?');
      if(newGame){
        guessedNum.empty();
        randomNumHolder.text(getRandomInt(100, 100000));
      }
    }
  }

  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
