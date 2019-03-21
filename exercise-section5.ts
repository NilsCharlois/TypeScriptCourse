class Car {
    public name: string;
    public acceleration: number;

    constructor(name: string) {
        this.name = name;
        this.acceleration = 0;
    }

    honk() :void {
        console.log('Tut');
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

var newCar = new Car('Mercedes');
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);

abstract class BaseObject {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    abstract calcSize(): number;
}

class Rectancle extends BaseObject {
    constructor(width: number, height: number) {
        super(width, height);
    }

    calcSize() : number {
        return this.width * this.height;
    }
}

var rectangle = new Rectancle(5,2);
console.log(rectangle.calcSize());

class PersonExercise {
    private _firstname: string = "";

    get firstname () {
        return this._firstname;
    }
    set firstName (value: string) {
        if(value.length > 3) {
            this._firstname = value;
        } else {
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
