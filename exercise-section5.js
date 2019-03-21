class Car {
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log('Tut');
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var newCar = new Car('Mercedes');
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);
class BaseObject {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectancle extends BaseObject {
    constructor(width, height) {
        super(width, height);
    }
    calcSize() {
        return this.width * this.height;
    }
}
var rectangle = new Rectancle(5, 2);
console.log(rectangle.calcSize());
class PersonExercise {
    constructor() {
        this._firstname = "";
    }
    get firstname() {
        return this._firstname;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstname = value;
        }
        else {
            this._firstname = "";
        }
    }
}
var newPerson = new PersonExercise();
console.log(newPerson.firstName);
newPerson.firstName = "Ni";
console.log(newPerson.firstName);
newPerson.firstName = "Nilsou";
console.log(newPerson.firstName);
