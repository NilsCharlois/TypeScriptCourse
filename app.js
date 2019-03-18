"use strict";
// string
var myName = 'Nils';
// myName = 28; // compilation error
//number
var myAge = 31;
// myAge = 'Test'; // compilation error
//boolean
var hasHobbies = false;
// hasHobbies = 1; // compilation error
// assign types
var myRealAge;
myRealAge = 31;
// myRealAge = '31';
// array
var hobbies = ["Cooking", "Tv"];
hobbies = [100]; //will work because the hobbies array is declared as any []
console.log(hobbies[0]);
// tuples
var address = ["SuperStreet", 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
// function types
var myMultiply; // to say that this function will be able to hold this type of functions
//myMultiply = sayHello; // compilation error because the myMultiply is expected to be assigned to specific typed function
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(1, 2));
// objects
var userData = {
    name: 'Nils',
    age: 31
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// use pipe to accept multiple types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true; // throw a compilaton exception
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final Value is a number");
}
// never
function neverReturn() {
    throw new Error('An error!');
}
// nullabe types
var canBeNull = 12; // can be a number or null, overrides the compile option for this variable
canBeNull = null;
var canAlsoBeNull;
// initialized to undefined
canAlsoBeNull = null;
