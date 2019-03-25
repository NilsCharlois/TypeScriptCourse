"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Tut');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var newCar = new Car('Mercedes');
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);
var BaseObject = /** @class */ (function () {
    function BaseObject(width, height) {
        this.width = width;
        this.height = height;
    }
    return BaseObject;
}());
var Rectancle = /** @class */ (function (_super) {
    __extends(Rectancle, _super);
    function Rectancle(width, height) {
        return _super.call(this, width, height) || this;
    }
    Rectancle.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return Rectancle;
}(BaseObject));
var rectangle = new Rectancle(5, 2);
console.log(rectangle.calcSize());
var PersonExercise = /** @class */ (function () {
    function PersonExercise() {
        this._firstname = "";
    }
    Object.defineProperty(PersonExercise.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonExercise.prototype, "firstName", {
        set: function (value) {
            if (value.length > 3) {
                this._firstname = value;
            }
            else {
                this._firstname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonExercise;
}());
var newPerson = new PersonExercise();
console.log(newPerson.firstName);
newPerson.firstName = "Ni";
console.log(newPerson.firstName);
newPerson.firstName = "Nilsou";
console.log(newPerson.firstName);
