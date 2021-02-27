/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

function MyWorker(name, secondName, rate, days) {
  this.name = name;
  this.secondName = secondName;
  this.rate = rate;
  this.days = days;
}
MyWorker.prototype.getSalary = function () {
  return this.rate * this.days;
};

MyWorker.prototype.getName = function () {
  return this.name;
};
MyWorker.prototype.getSecondName = function () {
  return this.secondName;
};
MyWorker.prototype.getRate = function () {
  return this.rate;
};
MyWorker.prototype.getDays = function () {
  return this.days;
};
MyWorker.prototype.setRate = function (rate) {
  this.rate = rate;
};
MyWorker.prototype.setDays = function (days) {
  this.days = days;
};

const worker1 = new MyWorker('Petr', 'Pupkin', 50, 30);
console.log(worker1);
console.log('worker1.getSalary: ', worker1.getSalary());

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

const worker2 = new MyWorker('Ivan', 'Ivanov', 10, 10);
console.log(worker2);
worker2.setDays(25);
console.log(worker2);

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

class WorkerClass {
  constructor(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
  getName() {
    return this.name;
  }
  getSecond() {
    return this.secondName;
  }

  getRate() {
    return this.rate;
  }

  getDays() {
    return this.days;
  }

  setRate(rate) {
    this.rate = rate;
  }
  setDays(days) {
    this.days = days;
  }
}

const worker3 = new WorkerClass('Pasha', 'Sidorov', 100, 10);
console.log(worker3);
worker3.setDays(30);
console.log(worker3);
console.log(worker3.getSalary());

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
    return str.split('').reverse().join('');
  };
  this.ucFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  this.ucWords = function (str) {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  };
}

const string = new MyString();
console.log(string.reverse('hello'));
console.log(string.ucFirst('teststring'));
console.log(string.ucWords('test string'));

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class MyStringClass {
  reverse(str) {
    return str.split('').reverse().join('');
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }
}

const string2 = new MyStringClass();
console.log(string2.ucWords('two words'));

/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */
class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getEmail() {
    return this.email;
  }
}

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
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getFullName() {
    return super.getFullName();
  }

  getCourse() {
    const date = new Date();
    return `вы на ${date.getFullYear() - this.year} курсе`;
  }
}

const student = new Student('Anya', 'Guseva', 2019);
console.log(student.getCourse());
console.log(student.getFullName());
