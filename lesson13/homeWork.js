/**
 * Задание 0
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
function Worker(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;

    this.getSalary = function() {
        console.log(this.rate * this.days);
    };
}

let vasya = new Worker('Vasya', 'Vasechkin', 35, 20);

vasya.getSalary();

/**
 * Задание 1
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, getSalary,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
function Worker(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;

    this.getName = function() {
        return this.name;
    };

    this.getSecondName = function() {
        return this.secondName;
    };

    this.getRate = function() {
        return this.rate;
    };

    this.getDays = function() {
        return this.days;
    };

    this.getSalary = function() {
        return this.rate * this.days;
    };

    this.setRate = function(newRate) {
        this.rate = newRate
        console.log(this.rate);
    };

    this.setDays = function(newDays) {
        this.days = newDays;
        console.log(this.days);
    };
}

let vasya = new Worker('Vasya', 'Vasechkin', 35, 20);

console.log(vasya.getName());
console.log(vasya.getSecondName());
console.log(vasya.getRate());
console.log(vasya.getDays());
console.log(vasya.getSalary());

vasya.setRate(30);
console.log(vasya.getSalary());

vasya.setDays(40);
console.log(vasya.getSalary());

/**
 * Задание 1
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
function MyString(string) {
    this.string = string;

    this.rvs = function() {
        return this.string.split('').reverse().join('');
    };

    this.ucFirst = function() {
        return this.string[0].toUpperCase() + this.string.slice(1);
    };

    this.ucWords = function() {
        return this.string.toUpperCase();
    };
}

let str = new MyString('vasya');

console.log(str.rvs());
console.log(str.ucFirst());
console.log(str.ucWords());