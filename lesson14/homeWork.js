/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

//  function Worker(options) {
//     this.name = options.name;
//     this.secondName = options.secondName;
//     this.rate = options.rate;
//     this.days = options.days;
//  }

//  Worker.prototype.getSalary = function() {
//      console.log(`Зарплата равна: ${this.rate * this.days} рублей`);
//  }

//  let worker = new Worker({
//      name: 'Igor',
//      secondName: 'Petrov',
//      rate: 17,
//      days: 22,
//  });

//  console.log(worker);
//  worker.getSalary();

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

//  function Worker(options) {
//     this.name = options.name;
//     this.secondName = options.secondName;
//     this.rate = options.rate;
//     this.days = options.days;

//  }

//  Worker.prototype.getSalary = function() {
//      console.log(`Зарплата равна: ${this.rate * this.days} рублей`);
//  }
//  Worker.prototype.getName = function() {
//     console.log(`Имя работника: ${this.name}`);
// }
// Worker.prototype.getSecondName = function() {
//     console.log(`Фамилия работника: ${this.secondName}`);
// }
// Worker.prototype.getRate = function() {
//     console.log(`Ставка работника: ${this.rate}`);
// }
// Worker.prototype.getDays = function() {
//     console.log(`Количество отработанных дней : ${this.days}`);
// }

// Worker.prototype.setRate = function(rate) {
//     this.rate = rate;
// }
// Worker.prototype.setDays = function(days) {
//     this.days = days;
// }

//  let worker = new Worker({
//      name: 'Igor',
//      secondName: 'Petrov',
//  });

//  console.log(worker);
//  worker.getName();
//  worker.getSecondName();

//  worker.setDays(5);
//  worker.setRate(14);

//  worker.getRate();
//  worker.getDays();
//  worker.getSalary();
 

/** 
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

//  Задание 1
//  class Worker {
//      constructor(options) {
//         this.name = options.name;
//         this.secondName = options.secondName;
//         this.rate = options.rate;
//         this.days = options.days;
//      }

//      getSalary() {
//         console.log(`Зарплата равна: ${this.rate * this.days} рублей`);
//      }
//  };

//  let worker = new Worker({
//      name: 'Gena',
//      secondName: 'Bykin',
//      rate: 54,
//      days: 22
//  })

//  console.log(worker);

//  worker.getSalary();

//  Задание 2
// class Worker {
//     constructor(options) {
//         this.name = options.name;
//         this.secondName = options.secondName;
//         this.rate = options.rate;
//         this.days = options.days;
//     }

//     getSalary() {
//         console.log(`Зарплата равна: ${this.rate * this.days} рублей`);
//      }

//     getName() {
//         return this.name;
//     }
//     getSecondName() {
//         return this.secondName;
//     }
//     getRate() {
//         return this.rate;
//     }
//     getDays() {
//         return this.days;
//     }

//     setRate(rate) {
//         this.rate = rate;
//     }
//     setDays(days) {
//         this.days = days;
//     }
// }

// let worker = new Worker({
//     name: 'Lena',
//     secondName: 'Ivanova',
//     rate: 29,
//     days: 13
// })

// console.log(worker);
// console.log(worker.getSalary());

// console.log(worker.getName());
// console.log(worker.getSecondName());
// console.log(worker.getRate());
// console.log(worker.getDays());

// worker.setRate(5);
// worker.setDays(22);
// console.log(worker);
// console.log(worker.getSalary());

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

//  function MyString() {
//     this.reverse = function(str) {
//         let reversedStr = str.split("").reverse().join("");
//         console.log(reversedStr);
//     };
//     this.ucFirst = function(str) {
//         let upperCased = str[0].toUpperCase() + str.slice(1);
//         console.log(upperCased);
//     };
//     this.ucWords = function(str) {
//         let result = str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
//         console.log(result);
//     };
// } 

// let string = new MyString();

// string.reverse('hello');
// string.ucFirst('hello');
// string.ucWords('hello world');


/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

//  class MyString {
//      constructor() {

//      }
//      reverse(str) {
//         let reversedStr = str.split("").reverse().join("");
//         console.log(reversedStr);
//      }

//      ucFirst(str) {
//         let upperCased = str[0].toUpperCase() + str.slice(1);
//         console.log(upperCased);
//      }
//      ucWords(str) {
//         let result = str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
//         console.log(result);
//      }
//  }

//  let stringClass = new MyString();

//  stringClass.reverse('hello');
//  stringClass.ucFirst('hello');
//  stringClass.ucWords('hello world');


/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

//  class User {
//      constructor(options) {
//          this.name = options.name;
//          this.surname = options.surname;
//          this.email = options.email;
//      }

//      getFullName() {
//          console.log(`Полное имя: ${this.name} ${this.surname}`);
//      }

//      getEmail() {
//          console.log(`Адрес эл. почты: ${this.email}`);
//      }
//  }

//  let person = new User({
//      name: 'Oleg',
//      surname: 'Ivanov',
//      email: 'olegIvanovJS@gmail.com'
//  });

//  console.log(person);

//  person.getFullName();
//  person.getEmail();

/**
 * Задание 7
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */

// class Student extends User {
//     constructor(options) {
//         super(options);
//         this.admissionYear = options.admissionYear;
//     }

//     getCourse() {
//         let course = new Date().getFullYear() - this.admissionYear;
//         console.log(`Студент учится на ${course} курсе!`);
//     }
// }

// let student = new Student({
//     name: 'Vika',
//     surname: 'Petrova',
//     email: 'vikaPetrovaJs@gmail.com',
//     admissionYear: 2019,
// })

// console.log(student);

// student.getFullName();
// student.getCourse();
