// string
let myName = 'Nils';
// myName = 28; // compilation error

//number
let myAge = 31;
// myAge = 'Test'; // compilation error

//boolean
let hasHobbies = false;
// hasHobbies = 1; // compilation error

// assign types
let myRealAge: number;
myRealAge = 31;
// myRealAge = '31';

// array
let hobbies: any[] = ["Cooking", "Tv"];
hobbies = [100]; //will work because the hobbies array is declared as any []
console.log(hobbies[0]);

// tuples
let address: [string, number] = ["SuperStreet", 99];

// enums
enum Color {
    Gray, // 0
    Green, // 1
    Blue // 2
};
let myColor: Color = Color.Green;
console.log(myColor);

//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName() : string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(10,2));

// function types
let myMultiply: (val1: number, val2: number) => number; // to say that this function will be able to hold this type of functions
//myMultiply = sayHello; // compilation error because the myMultiply is expected to be assigned to specific typed function
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(1,2));


// objects
let userData: {name:string, age: number } =  {
    name: 'Nils',
    age: 31
};
// : {name:string, age: number } to tell which object structure is expected
//userData = {}; // compilation error, userData is expecting a non-empty object
//userData = {a:'test', b:21}; // compilation error, expected name and age fields


// use type to create an object structure
type Complex = {data: number[], output: (all: boolean)=>number[]};

// complex object
let complex: Complex = {
    data: [100,3.99,10],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// use pipe to accept multiple types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true; // throw a compilaton exception

// check types
let finalValue = "A string";
if(typeof finalValue == "number") {
    console.log("Final Value is a number");
}

// never
function neverReturn(): never {
  throw new Error('An error!');
}

// nullabe types
let canBeNull: number | null = 12; // can be a number or null, overrides the compile option for this variable
canBeNull = null;
let canAlsoBeNull;
// initialized to undefined
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;
