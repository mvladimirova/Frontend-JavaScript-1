/*global define*/

define(function(){
  'use strict';
  function Matrix(N, M){
    var data = [];
    var i = 0;
    var j = 0;

    for(i;i<N; i++){
      for(j; j<M; j++){
        data[i][j] = 0;
      }
    }

    this.getN = function(){
      return this.N;
    };

    this.getM = function(){
      return this.M;
    };

    this.getRow = function(index){
      return data[index].slice(0);
    };

    this.setRow = function(index,row){
      for(var i = 0; i <= index; i++){
        data[i][index] = row[i];
      }
    };

    this.getCol = function(index){

    }
  }
  return Matrix;
})
