"use strict";

function Pizza(name, cost, timeToMake){
  this.name = name;
  this.cost = cost;
  this.timeToMake = timeToMake;

  this.getName = function(){
    return this.name;
  };

  this.getCost = function(){
    return this.getCost();
  };

  this.getTimeToMake = function(){
    return this.timeToMake;
  };
}

function PizzaOrder(pizza){
  var orderId = getRandomInt(0, 10000),
      readyCallback;

  this.getId = function(){
    return orderId;
  };

  this.getPizza = function(){
    return pizza;
  };

  this.setCallback = function(callback){
    readyCallback = callback;
  };

  this.getCallback = function(){
    return readyCallback;
  };
}

PizzaOrder.prototype.start = function(){
  var time = this.getPizza().getTimeToMake(),
      thisOrder = this;

  setTimeout(function(){
    thisOrder.getCallback()(thisOrder.getPizza(), thisOrder);
  }, time);
};

PizzaOrder.prototype.ready = function(callback){
  this.setCallback(callback);
};

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
