// Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Polymorphism
class Shape {
  constructor() {}
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangleInstance = new Rectangle(2, 3);
const triangleInstance = new Triangle(2, 3);
const circleInstance = new Circle(2);

console.log(
  rectangleInstance.calculateArea(),
  triangleInstance.calculateArea(),
  circleInstance.calculateArea()
);

// Abstraction and Encpasulation
class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }
  getBalancePrivateField() {
    return this.#balance;
  }
  setBalancePrivateField(value) {
    this.#balance = value;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName, amount) {
    super(accountNumber, balance, accountHolderName);
    this.amount = amount;
    this.balance = this.getBalancePrivateField();
  }
  deposit() {
    return (this.balance += this.amount);
  }
  withdraw() {
    return (this.balance -= this.amount);
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName, amount) {
    super(accountNumber, balance, accountHolderName);
    this.amount = amount;
    this.balance = this.getBalancePrivateField();
  }
  deposit() {
    return (this.balance += this.amount);
  }
  withdraw() {
    const temporaryBalance = this.balance;
    temporaryBalance -= this.amount;
    return this.balance < 0 ? this.balance : temporaryBalance;
  }
  getBalance() {
    return this.balance;
  }
}

const checkingAccountInstance = new CheckingAccount(101, 1000, "Abd", 500);
const savingsAccountInstance = new CheckingAccount(101, 1000, "Abd", 500);

console.log(checkingAccountInstance.deposit());
console.log(checkingAccountInstance.withdraw());
console.log(checkingAccountInstance.getBalance());

console.log(savingsAccountInstance.deposit());
console.log(savingsAccountInstance.withdraw());
console.log(savingsAccountInstance.getBalance());
