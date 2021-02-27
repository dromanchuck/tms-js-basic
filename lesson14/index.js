let stud1 = {
  name: "Archi",
  age: 20,
  groupNumber: 32,
  marks: [7, 6, 9, 10, 4, 3],
};

let stud2 = {
  name: "Kate",
  age: 19,
  groupNumber: 33,
  marks: [9, 4, 9, 5, 4, 3],
};

let stud3 = {
  name: "Inna",
  age: 21,
  groupNumber: 32,
  marks: [7, 6, 9, 10, 4, 3],
};

function getAverageMark() {
  this.averageMark =
    this.marks.reduce((acc, currentValue) => acc + currentValue, 0) /
    this.marks.length;
  return this.averageMark;
}

stud1.getAverageMark = getAverageMark;

stud1.getAverageMark();

setTimeout(stud1.getAverageMark.bind(stud1), 0);

//prototype
let error = new Error();

function HardWorker(name, surname) {
  this.name = name;
  this.surname = surname;

  if (HardWorker.prototype.count) {
    HardWorker.prototype.count++;
  } else {
    HardWorker.prototype.count = 1;
  }
}

HardWorker.prototype.sayHello = function (name) {
  console.log(`hey ${name}, my name is ${this.name}`);
};

let worker = new HardWorker("Harry", "Potter");
let worker1 = new HardWorker("Harry1", "Potter1");

console.log({ worker });
worker.sayHello("Ron");

console.log(worker.count);

//Наследование

function Animal(name, countOfLegs) {
  this.name = name;
  this.countOfLegs = countOfLegs;
}

function Rabbit(name, countOfLegs, isVegetarian) {
  Animal.call(this, name, countOfLegs);

  this.isVegetarian = isVegetarian;
}

Rabbit.constructor = Animal;

let rabbit = new Rabbit("Bob", 4, true);

//class

class AnimalClass {
  constructor(name, countOfLegs) {
    console.log("constructor - Animal");
    this.name = name;
    this.countOfLegs = countOfLegs;
  }
}

class RabbitClass extends AnimalClass {
  constructor(name, countOfLegs, isVegetarian) {
    console.log("constructor - Rabbit");
    super(name, countOfLegs);

    this.isVegetarian = isVegetarian;
  }
}

let animal1 = new AnimalClass("Lion", 4);
let rabbit1 = new RabbitClass("NeBob", 3, false);
