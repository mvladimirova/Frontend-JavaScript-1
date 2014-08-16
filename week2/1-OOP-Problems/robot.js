"use strict";

function Point(x,y){
  this.x = x;
  this.y = y;

  this.xInc = function(){
    return this.x + 1;
  };

  this.xDec = function(){
    return this.x - 1;
  };

  this.yInc = function(){
    return this.y + 1;
  };

  this.yDec = function(){
    return this.y - 1;
  };
}

Point.prototype.equals = function(point){
  return this.x === point.x && this.y === point.y;
};

Point.prototype.toString = function(){
  return ["Point @ ", this.x ,", ", this.y].join("");
};

function Robot(startPoint){

  this.moveLeft = function(amount){
    var moved = 0;

    while(moved < amount){
      startPoint.xDec();
      moved += 1;
    }
  };

  this.moveRight = function(amount){
    var moved = 0;

    while(moved < amount){
      startPoint.xInc();
      moved += 1;
    }
  };

  this.moveUp = function(amount){
    var moved = 0;

    while(moved < amount){
      startPoint.yDec();
      moved += 1;
    }
  };

  this.moveDown = function(amount){
    var moved = 0;

    while(moved < amount){
      startPoint.yInc();
      moved += 1;
    }
  };

  this.getPosition = function(){
    return startPoint;
  };
}

var robot = new Robot(new Point(0,0));
robot.moveDown(2);
robot.moveLeft(3);
console.log(robot.getPosition().toString());
