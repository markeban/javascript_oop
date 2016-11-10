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



function Person(name, nationality, age) {
  this.name = name;
  this.nationality = nationality;
  this.age = age;
}

Person.prototype.secondNationality = function(secondNationality) {
  this.secondNationality = secondNationality;
};

Person.prototype.addYearToAge = function() {
  this.age = this.age + 1;
};

var john = new Person("John", "American", 30);
console.log(john);
john.secondNationality("German");
console.log(john);
var sally = new Person("Sally", "Bolivian", 43)
console.log(sally);
sally.addYearToAge();
console.log(sally);


