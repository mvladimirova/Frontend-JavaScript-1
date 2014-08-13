define(["backbone"], function(Backbone){

  var User = Backbone.Model.extend({
    defaults: {
      username: ""
    }
  });

  return User;
});
