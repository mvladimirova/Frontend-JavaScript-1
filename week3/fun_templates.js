"use strict"
var _ = require("lodash");

var htmlGenerator = {
    link: function(data){
        var template = "<a href=<%= href %> title=<%= title %>> <%= label %></a>";
        var newLink = _.template(template, data);
        return newLink;
    },
    paragraph: function(data){
        var template = "<p><%= label%></p>";
        var newParagraph = _.template(template, data);
        return newParagraph;
    },
    list: function(data){
        var template = "<<%= type%>><% _(children).forEach(function(children){%><li><%= children %></li><% }); %></<%= type%>>";
        var newList = _.template(template, data);
        return newList;
    },
    tag: function(data){}
};

var list = htmlGenerator.list({
    type: "ul",
    children: [{
        label: "Item 1"
    }, {
        label: "Item 2"
    }]
})

console.log(list);
