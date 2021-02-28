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
  };
}

let worker1 = new Worker1('Tom', 'Keen', 5, 5);
worker1.getSalary();

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

function Worker2(name, secondname, rate, days) {
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
  };
  this.getName = function () {
    console.log(`The employee's name is ${this.name}`);
  };
  this.getSecondName = function () {
    console.log(`The employee's second name is ${this.secondname}`);
  };
  this.getRate = function () {
    console.log(`The employee's rate is ${this.rate}`);
  };
  this.getDays = function () {
    console.log(`The number of days worked by the employee is ${this.days}`);
  };
  this.setRate = function (rate) {
    this.rate = rate;
  };
  this.setDays = function (days) {
    this.days = days;
  };
}

let worker2 = new Worker2('Raymond', 'Reddington', 2, 10);
worker2.getSalary();
worker2.getName();
worker2.getSecondName();
worker2.getRate();
worker2.getDays();
worker2.setRate(5);
worker2.setDays(9);
worker2.getRate();
worker2.getDays();

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

class Worker3_1 {
  constructor(name, secondname, rate, days) {
    this.name = name;
    this.secondname = secondname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    console.log(
      `The employee's salary, ${this.name} ${this.secondname}, is $${
        this.rate * this.days
      }`
    );
  }
}

let worker3_1 = new Worker3_1('Masha', 'Rostova', 3, 7);
worker3_1.getSalary();

class Worker3_2 {
  constructor(name, secondname, rate, days) {
    this.name = name;
    this.secondname = secondname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    console.log(
      `The employee's salary, ${this.name} ${this.secondname}, is $${
        this.rate * this.days
      }`
    );
  }
  getName() {
    console.log(`The employee's name is ${this.name}`);
  }
  getSecondName() {
    console.log(`The employee's second name is ${this.secondname}`);
  }
  getRate() {
    console.log(`The employee's rate is ${this.rate}`);
  }
  getDays() {
    console.log(`The number of days worked by the employee is ${this.days}`);
  }
  setRate(rate) {
    this.rate = rate;
  }
  setDays(days) {
    this.days = days;
  }
}

let worker3_2 = new Worker3_2('Samar', 'Navabi', 23, 2);
worker3_2.getSalary();
worker3_2.getName();
worker3_2.getSecondName();
worker3_2.getRate();
worker3_2.getDays();
worker3_2.setRate(5);
worker3_2.setDays(9);
worker3_2.getRate();
worker3_2.getDays();

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString4() {
  this.reverse = function (str) {
    return str.split('').reverse().join('');
  };
  this.ucFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  this.ucWords = function (str) {
    return str
      .split(' ')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  };
}

let str4 = new MyString4();

console.log(str4.reverse('AAA DA?!'));
console.log(str4.ucFirst('aaa da?!'));
console.log(str4.ucWords('aaa da?!'));

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class MyString5 {
  reverse(str) {
    return str.split('').reverse().join('');
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str
      .split(' ')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  }
}

let str5 = new MyString5();

console.log(str5.reverse('AAA DA?!'));
console.log(str5.ucFirst('aaa da?!'));
console.log(str5.ucWords('aaa da?!'));

/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
  name = 'Peter';
  surname = 'Parker';
  email = 'mj@abc.com';
  getFullName() {
    return this.name + ' ' + this.surname;
  }
  getEmail() {
    return this.email;
  }
}

let user = new User();
console.log(user.getEmail());
console.log(user.getFullName());

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
  year = '2020';
  getCourse() {
    let currentDate = new Date();
    let course = currentDate.getFullYear() - this.year;
    return course <= 5 && course >= 1
      ? course
      : 'Studenet is not currently studying at the university';
  }
}

let student = new Student();

console.log(student.getCourse());
