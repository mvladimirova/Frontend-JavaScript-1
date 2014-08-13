define(["backbone"], function (Backbone){
  var Game = Backbone.Model.extend({
    defaults:{
      gameId: ""
    }
  });

  return Game;
})
