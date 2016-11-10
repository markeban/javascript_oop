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




/////////////////////////////////////////////////// EC5 Prototypical Inheritance /////////////////////////////


// function Mammal(age) {
//   this.hair = true;
//   this.order = 'primate';
//   this.age = age;
// }

// function Person(name, nationality, age) {
//   Mammal.call(this, age)
//   this.name = name;
//   this.nationality = nationality;
//   this.info = function() {
//     return "Name: " + this.name + " Nationality: " + this.nationality +  " Age: " + this.age;
//   }
// }

// Person.prototype = new Mammal();

////////////////////////////////////////////////// EC6 Syntax ////////////////////////////////////////////////

// class Mammal {
//   constructor(age) {
//     this.hair = true;
//     this.order = 'primate';
//     this.age = age;
//   }
// }


// class Person extends Mammal {  
//   constructor(name, nationality, age) {
//     super(age);
//     this.name = name;
//     this.nationality = nationality;
//   }

//   info() {
//     return "Name: " + this.name + " Nationality: " + this.nationality +  " Age: " + this.age;
//   }
// }

// Person.prototype.secondNationality = function(secondNationality) {
//   this.secondNationality = secondNationality;
// };

// Person.prototype.addYearToAge = function() {
//   this.age++;
// };

////////////////////////////////////////////////// Object 'Instances' ////////////////////////////////////////////////


// var john = new Person("John", "American", 30);
// console.log(john);
// john.secondNationality("German");
// console.log(john);
// var sally = new Person("Sally", "Bolivian", 43)
// console.log(sally);
// sally.addYearToAge();
// console.log(sally);
// console.log(sally.order); //// inheritance example
// console.log(sally.info()); //// inheritance example


////////////////////////////////////////////////// Account Example ////////////////////////////////////////////////


var accounts = [];

function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value);
  // addAccountToPage(account);
  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
}


/////////////////////////////////////////////////// EC5 Prototypical Inheritance /////////////////////////////


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// function Account(firstName, lastName, openingBalance) {
//   Person.call(this, firstName, lastName);
//   this.balance = openingBalance;
//   this.status = 'active';
// }

// Account.prototype = new Person;


/////////////////////////////////////////////////// EC6 ///////////////////////////////////////////////////////

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Account extends Person {  
  constructor(firstName, lastName, openingBalance) {
    super(firstName, lastName);
    this.balance = openingBalance;
    this.status = 'active';
  }
}

Account.prototype.closeAccount = function() {
  this.balance = 0;
  this.status = "closed";
  return "Remaining balance will be mailed to you in two weeks";
}

window.accounts = accounts;




