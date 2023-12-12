// Protecting the Object
const person = {};

Object.defineProperties(person, {
  name: {
    value: "Abd",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  email: {
    value: "smab@gmail.com",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 23,
    writable: true,
    enumerable: true,
    configurable: false,
  },
});

person.getAge = function () {
  return this.age;
};
person.setAge = function (age) {
  return (this.age = age);
};

// JavaScript Prototype
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

Vehicle.prototype.getDetails = function () {
  return `${this.make} ${this.model} ${this.year}`;
};

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
}

Car.prototype.getDetails = function () {
  return `${this.make} ${this.model} ${this.year} ${this.numDoors}`;
};

const vehicleInstance = new Vehicle("Toyota", "Prado", 2000);
const carInstance = new Car("Toyota", "Prado", 2000, 4);

console.log(vehicleInstance.getDetails());
console.log(carInstance.getDetails());
