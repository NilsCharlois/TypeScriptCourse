"use strict";
//let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxLevel = 100; // cannot be redefined
console.log(maxLevel);
//maxLevel = 99; // will throw a compilaiton error
// block scope
function reset() {
    //console.log(variable); // throw a compilation error as variable is not defined in this function scope
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Nils");
// Default parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 10, -3));
console.log(Math.max.apply(Math, numbers)); // to spread out the numbers array to a list of numbers
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 44));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["PS4", "Games"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData = { userName: 'Nils', age: 31 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
// template literals
console.log("TEMPLATE LITERALS");
var myUserName = "Nils";
var greeting = "This is a heading!\nI'm " + myUserName + "\nThis is cool";
console.log(greeting);
