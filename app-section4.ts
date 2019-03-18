//let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);

const maxLevel = 100; // cannot be redefined
console.log(maxLevel);
//maxLevel = 99; // will throw a compilaiton error

// block scope
function reset() {
  //console.log(variable); // throw a compilation error as variable is not defined in this function scope
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// arrow functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
}
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number) => number1*number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
  console.log("Hello!");
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Nils");

// Default parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start:number = 10): void => {
  while(start > 0) {
    start --;
  }
  console.log("Done!", start);
}
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1,10,99,-5];
console.log(Math.max(33,10,-3));
console.log(Math.max(...numbers)); // to spread out the numbers array to a list of numbers

function makeArray(...args: number[]) { //to change the list to array
  return args;
}
console.log(makeArray(1,2,3,44));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["PS4", "Games"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: 'Nils', age: 31};
const {userName, age} = userData;
console.log(userName, age);

// template literals
console.log("TEMPLATE LITERALS");
const myUserName = "Nils";
const greeting = `This is a heading!
I'm ${myUserName}
This is cool`;
console.log(greeting)
