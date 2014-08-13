/* global Backbone, $ */

var GitHubApp = GitHubApp || {};

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Home = Backbone.View.extend({
  events: {
    'click #add-btn': 'addUser',
    'click .delete-btn' : 'removeUser'
  },

  initialize: function () {
    'use strict';
    this.model.on("change", this.render, this);
    this.model.on("add", this.render, this);
    this.model.on("remove", this.render, this);
  },

  addUser: function () {
    'use strict';
    var user = new GitHubApp.Models.User({
      login: this.$el.find("#user-input").val()
    });
    this.model.add(user);
  },

  removeUser: function (e) {
    'use strict';
    var index = $(e.target).data("index");
    this.model.remove(this.model.at(index));
  },

  render: function () {
    'use strict';
    this.$el.html(this.template({users:this.model.toJSON()}));
    return this;
  }
});
