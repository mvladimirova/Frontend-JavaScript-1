require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defer = Q.defer();
    setTimeout(function(){
      defer.resolve(42);
    }, 1000);

    return defer.promise;
  }

  function second() {
    var defer = Q.defer();

    setTimeout(function(){
      defer.resolve("sth");
    }, 1000);

    return defer.promise;
  }

  function third() {
    console.log("I should do the job after first and second");
  }

  Q.fcall(first)
    .then(second)
    .then(third)
    .catch(function(error){
      console.log(error);
    })
    .done();

});
