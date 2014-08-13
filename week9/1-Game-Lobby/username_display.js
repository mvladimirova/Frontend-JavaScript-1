define(["backbone", "jquery"], function(Backbone, $){
  var UsernameDisplay = Backbone.View.extend({
    events: {
      "click .saveButton" : "save"
    },
    initialize: function(){
      this.model.on("change:username", this.render, this);
    },
    save: function(){
      this.model.set("username", this.$el.find("input").val());
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
