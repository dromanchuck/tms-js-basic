/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */


function MainWorker(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}

MainWorker.prototype.getSalary = function () {
    console.log(`Зарплата: ${this.rate * this.days} $`)
    };

const worker = new MainWorker('Nona', 'Flary', 30, 24);

console.log(worker);
worker.getSalary();

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

MainWorker.prototype.getName = function () {
    return this.name
};

MainWorker.prototype.getSecondName = function () {
    return this.secondName
};

MainWorker.prototype.getRate = function () {
    return this.rate
};

MainWorker.prototype.getDays = function () {
    return this.days
};

MainWorker.prototype.setRate = function (rate) {
    this.rate = rate
};

MainWorker.prototype.setDays = function (days) {
    this.days = days
};

worker.setRate(70);
worker.setDays(20);

console.log(worker);
worker.getSalary();

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */


class SecondWorker {

    constructor(name, secondName, rate, days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    };

    getName() {
        return this.name
    };

    getSecondName() {
        return this.secondName
    };

    getRate() {
        return this.rate
    };

    getDays() {
        return this.days
    };

    getSalary() {
        console.log(`Зарплата: ${this.rate * this.days} $`)
    };

    setRate(rate) {
        this.rate = rate
    };

    setDays(days) {
        this.days = days
    };
};

const worker1 = new SecondWorker('Tony', 'Glass', 40, 13);

console.log(worker1);
worker1.getSalary();

worker1.setRate(45);
worker1.setDays(10);
console.log(worker1);
worker1.getSalary();


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
    this.reverse = function (value) {
        return value
        .split('')
        .reverse()
        .join('')
    };

    this.ucFirst = function (value) {
        return value[0]
        .toUpperCase() + value.slice(1)
    };

    this.ucWords = function (value) {
        return value
        .split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ')
    }
}

const someString = new MyString();

console.log(someString.reverse('tomato'));
console.log(someString.ucFirst('potato potato'));
console.log(someString.ucWords('cucumber and garlic'));


/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */


class MyString1 {
    reverse(value) {
        return value
        .split('')
        .reverse()
        .join('')
    };

    ucFirst(value) {
        return value[0]
        .toUpperCase() + value.slice(1)
    };

    ucWords(value) {
        return value
        .split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ')
    };
};

const someString1 = new MyString1;

console.log(someString1.reverse('tomato'));
console.log(someString1.ucFirst('potato potato'));
console.log(someString1.ucWords('cucumber and garlic'));


/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
    constructor(name, secondName, email) {
        this.name = name;
        this.secondName = secondName;
        this.email = email;
    };

    getFullName() {
        return `Полное имя: ${this.name} ${this.secondName}`
    };

    getEmail(email) {
        this.email = email
    };
};

const newUser = new User('Monika', 'Holling', 'monika@gmail.com');

console.log(newUser);

console.log(newUser.getFullName());

newUser.getEmail('hoolli@gmail.com');
console.log(newUser);

/**
 * Задание 7
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */


class User {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    };

    getFullName() {
        console.log(`Полное имя: ${this.name} ${this.surname}`)
    };
};

class Student extends User {
     getYear(year) {
        this.year = year;
    };

    getCourse() {
        const date = new Date();
        const course = date.getFullYear() - this.year;

        if (course < 1) {
            return `Вы еще не поступили`
        } else if (course > 5) {
            return `Вы уже окончили университет`
        } else {
            return `Вы учитесь на ${course} курсе`
        };
    };
};

const someStudent = new Student('Garry', 'Brown');
console.log(someStudent);
someStudent.getYear(2010);
console.log(someStudent.getFullName());
console.log(someStudent.getCourse());
