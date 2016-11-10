// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

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



function Person(name, nationality, secondNationality) {
  this.name = name;
  this.nationality = nationality;
  this.secondNationality = secondNationality;
}

var john = new Person("John", "American", "None");
console.log(john);



