class Person {
    constructor(name, username) {
        this.username = username;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }
    setType(type) {
        this.type = type;
        console.log(type);
    }
}
const person = new Person('Nils', 'nils');
console.log(person);
person.printAge();
// inheritance
class Nils extends Person {
    //name = 'Nils';
    constructor(username) {
        super('Nils', username);
        this.age = 31;
    }
}
const nils = new Nils('Aileen');
console.log(nils);
// Getters and Setters
class Plant {
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = 'Default';
        }
    }
}
let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// static properties and methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// abstract classes
class Project {
    constructor() {
        this.projectName = 'Default';
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super Project');
console.log(newProject);
// private constructors
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One!');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One!'); // not the way to create a singleton
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'New Value'; // readonly property
