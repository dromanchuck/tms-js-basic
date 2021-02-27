/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

function Worker(name, secondName, rate, days) {
  this.name = name
  this.secondName = secondName
  this.rate = rate
  this.days = days

  this.getSalary = function () {
    return this.rate * this.days
  }

  this.getName = function () {
    return this.name
  }

  this.getSecondName = function () {
    return this.secondName
  }

  this.getRate = function () {
    return this.rate
  }

  this.getDays = function () {
    return this.days
  }

  this.setRate = function (newRate) {
    this.rate = newRate
    return this.rate
  }

  this.setDays = function (newDays) {
    this.days = newDays
    return this.days
  }
}

let worker = new Worker('Archibald', 'Ramirez', 1000, 30)

console.log(worker)
console.log(worker.getSalary())
console.log(worker.getName())
console.log(worker.getSecondName())
console.log(worker.getRate())
console.log(worker.getDays())
console.log(worker.setRate(2000))
console.log(worker.setDays(31))
console.log(worker)

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

class superWorker {
  constructor(name, secondName, rate, days) {
    this.name = name
    this.secondName = secondName
    this.rate = rate
    this.days = days
  }
  get salary() {
    return this.rate * this.days
  }

  getName() {
    return this.name
  }

  getSecondName() {
    return this.secondName
  }

  get Rate() {
    return this.rate
  }

  get Days() {
    return this.days
  }

  set Rate(newRate) {
    this.rate = newRate
  }

  set Days(newDays) {
    this.days = newDays
  }
}
let mySuperWorker = new superWorker('Inna', 'Poznyak', 12, 13)

console.log(mySuperWorker)
console.log(mySuperWorker.salary)
console.log(mySuperWorker.name)
console.log(mySuperWorker.secondName)
console.log(mySuperWorker.Rate)
console.log(mySuperWorker.Days)
console.log((mySuperWorker.Rate = 1000))
console.log((mySuperWorker.Days = 10))
console.log(mySuperWorker)

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString(string) {
  this.string = string

  this.reverse = function (str) {
    return str.split('').reverse().join('')
  }

  this.ucFirst = function (str) {
    if (!str) return 'Введи что-то!'
    return str[0].toUpperCase() + str.slice(1)
  }

  this.ucWords = function (str) {
    return str
      .split(' ')
      .map((elem) => elem[0].toUpperCase() + elem.slice(1))
      .join(' ')
  }
}

let superString = new MyString()

console.log(superString.reverse('Hello'))
console.log(superString.ucFirst('hello'))
console.log(superString.ucWords('hello hello hello'))

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class myString {
  reverse(str) {
    return str.split('').reverse().join('')
  }

  ucFirst(str) {
    if (!str) return 'Введи что-то!'
    return str[0].toUpperCase() + str.slice(1)
  }

  ucWords(str) {
    return str
      .split(' ')
      .map((elem) => elem[0].toUpperCase() + elem.slice(1))
      .join(' ')
  }
}

let mySuperString = new myString()

console.log(mySuperString.reverse('Hello'))
console.log(mySuperString.ucFirst('hello'))
console.log(mySuperString.ucWords('hello hello hello'))
/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
  constructor(name, surname, email) {
    this.name = name
    this.surname = surname
    this.email = email
  }

  get FullName() {
    return `${this.name} ${this.surname}`
  }

  get Email() {
    return this.email
  }
}

let SuperUser = new User('Usha', 'Milas', 'mike@gmail.com')

console.log(SuperUser.FullName)
console.log(SuperUser.Email)

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
    super(name, surname)
    this.year = year
  }

  get Course() {
    return new Date().getFullYear() - this.year
  }
}

let std = new Student('name', 'surname', 2018)

console.log(std.Course)
