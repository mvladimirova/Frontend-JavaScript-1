define(["backbone", "jquery"], function (Backbone, $){
  var HostGame = Backbone.View.extend({
    events: {
      "click .hostGame": "host"
    },
    host: function(){

    },
    render: function(){
      var parseHtml = $("#hostgameTemplate").html();
      this.$el.html(parseHtml);
    }
  });

  return HostGame;
})
