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

// function addAccountToPage(account) {
//   var div = document.createElement("div");
//   div.innerHTML = 'Account Holder: ' + account.firstName + ' ' + account.lastName;
//   document.getElementById("accounts").appendChild(div);
//   var button = document.createElement("BUTTON");
//   var buttonText = document.createTextNode("CLICK ME");
//   button.setAttribute("onclick", "findToCloseAccount(this)");
//   button.appendChild(buttonText);
//   div.appendChild(button);
// }


// function findToCloseAccount(account) {
//   account.closeAccount();
// }

function Account(firstName, lastName, openingBalance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = openingBalance;
  this.status = 'active';
}

Account.prototype.closeAccount = function() {
  this.balance = 0;
  this.status = "closed";
  return "Remaining balance will be mailed to you in two weeks";
}




window.accounts = accounts;




