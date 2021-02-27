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
        console.log(this.days * this.rate)
    }

    this.getName = function () {
        console.log(this.name)
    }
    this.getSecondName = function () {
        console.log(this.secondName)
    }
    this.getRate = function () {
        console.log(this.rate)
    }
    this.getDays = function () {
        console.log(this.days)
    }

    this.setRate = function (amount) {
        this.rate = amount
    }
    this.setDays = function (amount) {
        this.days = amount
    }
}

let wor = new Worker('Mike', 'Box', 100, 30)

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

class MyWorker {
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

    set Rate(value) {
        this.rate = value
    }
    set Days(value) {
        this.days = value
    }
}

const guy = new MyWorker('Key', 'Rob', 125, 20)
guy.Rate = 200
console.log(guy.salary)

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
        console.log(str.split('').reverse().join(''))
    }
    this.ucFirst = function (str) {
        console.log(str[0].toUpperCase() + str.slice(1))
    }
    this.ucWords = function (str) {
        console.log(str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
    }
}

let stringOne = new MyString()
stringOne.reverse('Hello')
stringOne.ucFirst('hello')
stringOne.ucWords('hello world')


/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class MyOwnString {
    reverse(str) {
        console.log(str.split('').reverse().join(''))
    }
    ucFirst(str) {
        console.log(str[0].toUpperCase() + str.slice(1))
    }
    ucWords(str) {
        console.log(str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
    }
}

const stri = new MyOwnString()
stri.reverse('hello')
stri.ucFirst('hello')
stringOne.ucWords('hello world')

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

    getFullName() {
        console.log(`${this.name} ${this.surname}`)
    }
    getEmail() {
        console.log(this.email)
    }
}

const man = new User('awf', 'segsges', 'awf@mail.ru')
man.getFullName()
man.getEmail()

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
    getCourse() {
        let date = new Date().getFullYear()
        console.log(date - this.year)
    }

}

const max = new Student('Max', 'Kent', 2018)
max.getFullName()
max.getCourse()