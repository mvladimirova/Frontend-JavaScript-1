"use strict";

$(document).ready(function() {

  var allStudents = [];

  function groupBy(groupingFunction, arr) {
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
  }

  function generateTable(students){
    var table = ['<div class=row>',
                '<div class="col-xs-12">',
                '<table class="table">',
                '<thead>',
                '<tr>',
                '<th>', 'Id', '</th>',
                '<th>', 'Name', '</th>',
                '<th>', 'Course', '</th>',
                '</tr>',
                '</thead>',
                '<tbody>'];

    students.forEach(function(student){
      table.push('<tr class="student-' + student.id + '">');
      table.push('<td>', student.id, '</td>');
      table.push('<td>', student.name, '</td>');
      table.push('<td>', student.course, '</td>');
      table.push('</tr>');
    });

    table.push('</tbody>', '</table>', '</div>', '</div>');
    return table.join('');
  }

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      console.log(textStatus);
      console.log(students);

      allStudents = students;

      $('#table-container').append(generateTable(allStudents));
  });

  $("#group-btn").on("click", function() {
    $('#table-container').empty();

    var groups = groupBy(function(x){
      return x.course;
    }, allStudents);

    Object.keys(groups).forEach(function(group){
      $('#table-container').append(generateTable(groups[group]));
    });

  });

  $("#search-btn").on("click", function() {
    $('tr').removeClass('success');

    var searchedName = $("#search-box").val(),
        searchedId = '.strudent-';

    console.log(searchedName);
    allStudents.forEach(function(student){
      if(student.name.indexOf(searchedName) === 0){
        searchedId += student.id;
      }
    });

    console.log(searchedId);
    $(searchedId).addClass('success');
  });
});
