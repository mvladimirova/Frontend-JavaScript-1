"use strict";

function Point(x,y){
  this.x = x;
  this.y = y;

  this.xInc = function(){
    return this.x += 1;
  };

  this.xDec = function(){
    return this.x -= 1;
  };

  this.yInc = function(){
    return this.y += 1;
  };

  this.yDec = function(){
    return this.y -= 1;
  };
}

Point.prototype.equals = function(point){
  return this.x === point.x && this.y === point.y;
};

Point.prototype.toString = function(){
  return ["Point @ ", this.x ,", ", this.y].join("");
};

var p = new Point(1,2);
var p1 = new Point(2,3);
console.log(p.equals(p1));
console.log(p.toString());
console.log(p.xDec());
console.log(p.toString());
