"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null,
    firstPlayerNickname = prompt("Enter your nickname: "),
    secondPlayerNickname = prompt("Enter your nickname: "),
    row,column;
  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for " + firstPlayerNickname);
    } else {
      console.log("Place for " + secondPlayerNickname);
    }

    // this is blocking prompt
    position = prompt("x y>");
    position = position.split(" ");
    row = parseInt(position[0], 10) - 1;
    column = parseInt(position[1], 10) - 1;

    while(board[row][column] !== "*"){
      console.log(board[row][column]);
      console.log("this field is alredy taken place again");
      position = prompt("x y>");
      position = position.split(" ");
      row = parseInt(position[0], 10) -1;
      column = parseInt(position[1], 10) - 1;
    }

    if(xTurn){
      board[row][column] = "X";
    } else {
      board[row][column] = "O";
    }

    console.log(position);

    if(checkWin(board)){
      if(xTurn){
        console.log(firstPlayerNickname + " wins the game!");
        break;
      } else {
        console.log(secondPlayerNickname + " wins the game!");
        break;
      }
    }

    var draw = board.every(function(row){
      return checkDraw(row);
    });

    if(draw){
      console.log("Noone wins!");
      break;
    }

    xTurn = !xTurn;
  }
}

function checkWin(board){
  for (var i = 0; i<3; i++){
    if(board[i][0] !== "*" && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
      return true;
    }
  }

  for (var j = 0; j<3; j++){
    if(board[0][j] !== "*" && board[0][j] === board[1][j] &&
        board[1][j] === board[2][j]){
      return true;
    }
  }

  if (board[0][0] != "*" && (board[1][1] === board[0][0] && board[0][0] === board[2][2]))
  {
    return true;
  }
  if (board[2][0] != "*" && (board[2][0] === board[1][1] && board[1][1] === board[0][2]))
  {
    return false;
  }
}

function checkDraw(arr){
  return arr.every(function(element){
    return element !== "*";
  });
}
gameLoop();
