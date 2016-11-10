var clickBoxOne = (function() {
  var counter = 0;
  return function() {
    counter++;
    return console.log("Box One clicked " + counter + " times.");
  }
})();

var clickBoxTwo = (function() {
  var counter = 0;
  return function() {
    counter++;
    return console.log("Box Two clicked " + counter + " times.");
  }
})();