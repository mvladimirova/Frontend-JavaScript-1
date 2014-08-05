/*globals $,console*/

'use strict';

var ALL_STUDENTS = [],
    GROUPED_BY_COURSE = {};

$(document).ready(function(){
  var groupBy = function(arr, groupingFunction) {
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

  $.getJSON('http://localhost:3000/students', function (students, textStatus){
    console.log(textStatus);
    ALL_STUDENTS = students;

    var courses = [];

    GROUPED_BY_COURSE = groupBy(students, function (x){
      return x.course;
    });
    console.log(GROUPED_BY_COURSE);
  });
});

