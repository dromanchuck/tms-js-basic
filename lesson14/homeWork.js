/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
let worker1 = new CoolWorker("Elton", "John", 100, 15);
function CoolWorker(name, secondName, rate, days){
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}
worker1.getSalary = function(){
    let salary = +this.rate*+this.days;
    return `${salary}$`;
}
/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
function CoolWorker1(name, secondName, rate, days){
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}
let worker2 = new CoolWorker1("Elton", "John", 100, 15);
worker2.getName = function(){
    return this.name;
}
worker2.getSecondName = function(){
    return this.secondName;
}
worker2.getRate = function(){
    return this.rate;
}
worker2.getDays = function(){
    return this.days;
}
worker2.setRate = function(value){
    this.rate = value;
    return value;
}
worker2.setDays = function(value){
    this.days = value;
    return value;
}
/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */
class CoolWorkerClass{
    constructor(name, secondName, rate, days){
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        let salary = +this.rate*+this.days;
        return `${salary}$`;
    }
}
let worker3 = new CoolWorkerClass("Elton", "John", 100, 15);

class CoolWorkerClass1{
    constructor(name, secondName, rate, days){
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getName(){
        return this.name;
    }
    getSecondName(){
        return this.secondName;
    }
    getRate(){
        return this.rate;
    }
    getDays(){
        return this.days;
    }
    setRate(value){
        this.rate = value;
    }
    setDays(value){
        this.days = value;
    }
}
let worker4 = new CoolWorkerClass1("Elton", "John", 100, 15);
/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
function MyString(string){
    this.string = string;

    string.reverse = function(string){
        return string.split(``).reverse().join(``);
    }
    string.ucFirst = function(string){
        return string[0].toUpperCase() + string.slice(1);
    }
    string.ucWords = function(string){
        return string.replace(/(^|\s)\S/g, function(str) {return str.toUpperCase()}); //нагло своровала, не знаю, будет ли работать :)
    }
}
/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */
class MyStringClass{
    constructor(string){
        this.string = string;
    }
    reverse(string){
        return this.string.split(``).reverse().join(``);
    }
    ucFirst(string){
        return this.string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string){
        return this.string.replace(/(^|\s)\S/g, function(str) {return str.toUpperCase()});
    }
}
/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */
class UserClass {
    constructor(name, surname, email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
    getEmail(){
        return this.email;
    }
}
let user = new UserClass("Elton", "John", "superstar@gmail.com");
/**
 * Задание 7
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */
class Student extends UserClass{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
        super.getFullName();
    }
    getCourse(){
        let course = (new Date().getFullYear() - this.year);
    }
}
let student = new Student("John", "Lennon", 2019);