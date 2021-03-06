require.config({
  paths:{
    "jquery": "bower_components/jquery/dist/jquery",
    "underscore": "bower_components/lodash/dist/lodash",
    "handlebars": "bower_components/handlebars/handlebars",
    "backbone": "bower_components/backbone/backbone"
  }
});

require(["jquery", "underscore", "handlebars","backbone", "user", "username_display", "game", "gameView"],
  function($, _, Backbone, Handlebars, User, UsernameDisplay, Game, HostGame){
    var u = new User(),
        usernameDisplay = new UsernameDisplay({
          el: "#inputUsername",
          model: u
        });
    var game = new Game(),
        gameDisplay = new HostGame({
          el:"#hostgame-btn",
          model: game
        });

  usernameDisplay.render();
  gameDisplay.render();
});

