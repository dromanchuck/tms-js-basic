/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

function Worker1(name, secondname, rate, days) {
  this.name = name;
  this.secondname = secondname;
  this.rate = rate;
  this.days = days;

  this.getSalary = function () {
    console.log(
      `The employee's salary, ${this.name} ${this.secondname}, is $${
        this.rate * this.days
      }`
    );

    return this.rate * this.days;
  };
}

Worker1.prototype.getSalary = function () {
  console.log(
    `The employee's salary, ${this.name} ${this.secondname}, is $${
      this.rate * this.days
    }`
  );

  return this.rate * this.days;
};

let worker1 = new Worker1("Tom", "Keen", 5, 5);
worker1.name = "Jerry";
worker1.getSalary();

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

Worker1.prototype.getName = function () {
  return this.name;
};

Worker1.prototype.setName = function (name) {
  //some logic

  this.name = name;
};

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

class OnlyNewWorker {
  constructor(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }

  set name(value) {
    console.log("set", { value });
    this._name = value;
  }

  get name() {
    return this._name;
  }

  // getSalary(){
  //     return this.rate * this.days;
  // }

  //  getName(){
  //     return this.name;
  // }

  //  getSecondName(){
  //     return this.secondName;
  // }

  //  getRate(){
  //     return this.rate;
  // }

  //  getDays(){
  //     return this.days;
  // }

  // setRate(rate){
  //     this.rate = rate;
  // }

  // setDays(days){
  //     this.days = days;
  // }
}

let worker = new OnlyNewWorker("Brad", "Pit", 1000, 28);
console.log(worker.name);

worker.name = "Brant";

console.log(worker.name);

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString() {
  this.reverse = function (str) {
    return str.split("").reverse().join("");
  };
  this.ucFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  this.ucWords = function (str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };
}

const string = new MyString();

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class MyStringClass {
  static reverse(str) {
    return str.split("").reverse().join("");
  }
  static ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static ucWords(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
}

MyStringClass.reverse("HELLO");

/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
  #sex = "";

  constructor(name, surname, email, sex) {
    this.name = name;
    this.surname = surname;
    this.email = email;

    this.#sex = sex;
  }

  get fullname() {
    let fullname = `${this.name} ${this.surname}`;
    return fullname;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }
}

let user = new User("Margaret", "Tetcher", "mt@greatbritain.gb", "female");

console.log({ user });
console.log(user._email);

/**
 * Задание 7
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */

class Student extends User {
  constructor(name, surname, email) {
    super(name, surname, email);
  }

  get fullname() {
    let fullname = `Student ${this.name} ${this.surname}`;
    return fullname;
  }
}

let student1 = new Student("Vasya", "Pupkin", "vp@mail.ru");
let fullNameStudent1 = student1.fullname;

class Teacher extends User {}

class SuperUser extends User {
  constructor(name, surname, email, isAdmin, hasAccessToMoney) {
    super(name, surname, email);
    this.isAdmin = isAdmin;
    this.hasAccessToMoney = hasAccessToMoney;
  }
}

class Manager extends SuperUser {}

class Boss extends SuperUser {}
