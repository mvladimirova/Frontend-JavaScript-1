(function(){
  "use strict"

  var data = require("./data"),
    unique = {},
    duplicate = [];

  data.forEach(function (checkin){
    var studentId = checkin.fields.student,
        foundDuplicate = false;

    if(unique[studentId]){
      unique[studentId].forEach(function (studentCheckIn){
        if(studentCheckIn.fields.date === checkin.fields.date){
          foundDuplicate = true;
          duplicate.push(checkin);
        }
      });

      if(!foundDuplicate){
        unique[studentId].push(checkin);
      }
    } else {
      unique[studentId] = [checkin];
    }
  });

  console.log(duplicate);

}());
