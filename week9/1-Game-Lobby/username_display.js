define(["backbone", "jquery"], function(Backbone, $){
  var UsernameDisplay = Backbone.View.extend({
    initialize: function(){
      this.model.on("change:username", this.render, this);
    },
    render: function() {
      var parseHtml = $("#inputUsernameTemplate").html();
      this.$el.html(parseHtml);
      this.$el
            .find("#inputUsername")
            .val(this.model.get("username"));
    }

  });

  return UsernameDisplay;
});
