class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }

  private setType(type: string) {
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
  constructor(username: string) {
    super('Nils', username);
    this.age = 31;
  }
}
const nils = new Nils('Aileen');
console.log(nils);

// Getters and Setters
class Plant {
  private _species: string;

  get species() {
    return this._species;
  }
  set species(value: string) {
    if(value.length > 3) {
      this._species = value;
    } else {
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
  static PI: number = 3.14;
  static calcCircumference(diameter: number) : number {
    return this.PI * diameter;
  }
}
console.log(2* Helpers.PI);
console.log(Helpers.calcCircumference(8));

// abstract classes
abstract class Project {
  projectName: string = 'Default';
  budget: number;

  abstract changeName(name: string) : void;

  calcBudget() {
    return this.budget *2;
  }
}

class ITProject extends Project {
  changeName(name: string) : void {
    this.projectName = name;
  }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super Project');
console.log(newProject);


// private constructors
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One!');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One!'); // not the way to create a singleton
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'New Value'; // readonly property
