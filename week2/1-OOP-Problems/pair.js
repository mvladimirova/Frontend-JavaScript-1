"use strict";

function Pair(left, right){
  this.leftVar = left;
  this.rightVar = right;
}

Pair.prototype.equals = function(pair){
  return this.leftVar === pair.leftVar && this.rightVar === pair.rightVar;
};

Pair.prototype.toString = function(){
  return ["(", this.leftVar.toString(), ", " , this.rightVar.toString(),
          ")"].join("");
};

Pair.prototype.toList = function(){
  return [this.leftVar, this.rightVar];
};

Pair.prototype.combine = function(f){
  return f(this.leftVar, this.rightVar);
}

var p = new Pair(3,4);
console.log(p.toList());
var result = p.combine(function(left,right){
  return left + right;
});
console.log(result);
