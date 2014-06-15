"use strict"

var beerAndFries = function(items){
  
  if(items.length === 0){
    return 0;
  }

  var groupBy = function(groupingFunction, arr) {
    var result = {};

    arr.forEach(function(x) {
      var key = groupingFunction(x);

      if (result[key]) {
        result[key].push(x);
      } else {
        result[key] = [x];
      }
    });

    return result;
  };

  var groupedByType = groupBy(function(x){return x.type}, items);
  var beerScores = [];
  var friesScores = [];
  groupedByType.beer.forEach(function(x){
    beerScores.push(x.score);  
  });
  groupedByType.fries.forEach(function(x){
    friesScores.push(x.score);
  });

  var sortedBeerScores = beerScores.sort(function(a,b){return b-a});
  var sortedFriesScores = friesScores.sort(function(a,b) {return b-a});
  
  var maxScore = 0;
  sortedBeerScores.forEach(function(currentBeer, index){
    maxScore += currentBeer * sortedFriesScores[index];
  });
  return maxScore;
};

exports.beerAndFries = beerAndFries;

