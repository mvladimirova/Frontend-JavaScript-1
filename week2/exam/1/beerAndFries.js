"use strict";

var groupBy = function(groupingFunction, arr) {
  var result = {};

  arr.forEach(function(x) {
    var key = groupingFunction(x);

    if (result[key]) {
      result[key].push(x);
    } else {
      result[key] = [x];
    }
  return result;
  });
};

var numSort = function(a,b){
  return b - a;
};


var beerAndFries = function(items){

  var beerScores = [],
      friesScores = [],
      maxScore = 0;
  if(items.length === 0){
    return 0;
  }

  var groupedByType = groupBy(function(x){return x.type;}, items);
  groupedByType.beer.forEach(function(x){
    beerScores.push(x.score);
  });
  groupedByType.fries.forEach(function(x){
    friesScores.push(x.score);
  });

  var sortedBeerScores = beerScores.sort(numSort(a,b));
  var sortedFriesScores = friesScores.sort(numSort(a,b));

  sortedBeerScores.forEach(function(currentBeer, index){
    maxScore += currentBeer * sortedFriesScores[index];
  });
  return maxScore;
};

exports.beerAndFries = beerAndFries;

