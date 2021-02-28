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
    this.getSalary = function() {
        let salary = this.rate * this.days;
        alert(`Зарплата работника ${this.name} ${this.secondname} - ${salary} рублей.`)
    }
}

let worker1 = new Worker1('Василий', 'Пупкин', 60, 21);

console.log(worker1);
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
    this.getSalary = function() {
        let salary = this.rate * this.days;
        alert(`Зарплата работника ${this.name} ${this.secondname} - ${salary} рублей.`)
    };
    this.getName = function() {
        alert(this.name)
    };
    this.getSecondName = function() {
        alert(this.secondname)
    };
    this.getRate = function() {
        alert(this.rate)
    };
    this.getDays = function() {
        alert(this.days)
    };
    this.setRate = function(value) {
        this.rate = value
    };
    this.setDays = function(value) {
        this.rate = value
    }
}

let worker2 = new Worker2('Катя', 'Остин', 65, 21);
worker2.getSalary();
worker2.getDays();
worker2.setRate(80);
worker2.getSalary();

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */
class Worker3 {
    constructor(name, secondname, rate, days) {
        this.name = name;
        this.secondname = secondname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        let salary = this.rate * this.days;
        alert(`Зарплата работника ${this.name} ${this.secondname} - ${salary} рублей.`)
    }
}

let worker3 = new Worker3('Оля', 'Иванова', 61, 20);
worker3.getSalary();

class Worker4 extends Worker3 {
    getName() {
        alert(this.name)
    };
    getSecondName() {
        alert(this.secondname)
    };
    getRate() {
        alert(this.rate)
    };
    getDays() {
        alert(this.days)
    };
    setRate(value) {
        this.rate = value
    };
    setDays(value) {
        this.rate = value
    }
}

let worker4 = new Worker4('Петя', 'Заяц', 90, 22);
worker4.getSalary();
worker4.getDays();
worker4.setRate(95);
worker4.getSalary();

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString1() {
    this.reverse = function(string) {
        return string.split('').reverse().join('')
    };
    this.ucFirst = function(string) {
        return string[0].toUpperCase() + string.slice(1)
    };
    this.ucWords = function(string) {
        return string.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    }
}

let string1 = new MyString1();
console.log(string1.reverse('hello word!'));
console.log(string1.ucFirst('hello word!'));
console.log(string1.ucWords('hello word!'));

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

class MyString2 {
    constructor() {}
    reverse(string) {
        return string.split('').reverse().join('')
    };
    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1)
    };
    ucWords(string) {
        return string.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    }

}


let string2 = new MyString2();
console.log(string2.reverse('hello word!'));
console.log(string2.ucFirst('hello word!'));
console.log(string2.ucWords('hello word!'));

/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */


class User {
    constructor(name, secondname, email) {
        this.name = name;
        this.secondname = secondname;
        this.email = email;
    }
    getFullName() {
        return this.name + ' ' + this.secondname;
    }
    getEmail() {
        return this.email;
    }
}

let user1 = new User('Dima', 'Petrov', 'dima.petrov@gmail.com');

console.log(user1.getFullName(), user1.getEmail());

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
    constructor(name, secondname, year) {
        super(name, secondname);

        this.year = year;
    }
    getCourse() {
        let currentDate = new Date();
        let course = currentDate.getFullYear() - this.year;
        if (course >= 1 && course <= 5) {
            return `Студент ${this.getFullName()} на ${course} курсе`
        } else {
            return `${this.getFullName()} на данный момент не студент`
        }
    }
};

let student1 = new Student('Паша', 'Павлов', 2019);
console.log(student1.getCourse());