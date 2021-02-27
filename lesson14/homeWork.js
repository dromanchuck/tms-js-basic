/**
 * Задание 1
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
  }

Worker.prototype.getSalary = function() {
    console.log(`salary: ${this.rate * this.days}`)
}

/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

Worker.prototype.getName = function() {return this.name}
Worker.prototype.getSecondName = function() {return this.secondName}
Worker.prototype.getRate = function() {return this.rate}
Worker.prototype.getDays = function() {return this.days}
Worker.prototype.setRate = function(rate) {this.rate = rate}
Worker.prototype.setDays = function(days) {this.days = days}    

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */

class NewWorker {
    constructor(name, secondName, rate, days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days; 
    }

    getSalary() {
        console.log(`salary: ${this.rate * this.days}`)
    }
    getName() {
        return this.name
    }
    getSecondName() {
        return this.secondName
    }
    getRate() 
    {return this.rate
    }
    getDays() {
        return this.days
    }
    setRate(rate) {
        this.days = rate
    }
    setDays(days) {
        this.days = days
    }
}

/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

 function MyString(str) {
    this.str = str;
 }

 MyString.prototype.reverse = function() {
    return this.str.toLowerCase().split('').reverse().join('');
 }

 MyString.prototype.ucFirst = function() {
    let strArr = this.str.toLowerCase().split('');
    return strArr[0].toUpperCase() + strArr.slice(1).join('');
 }

 MyString.prototype.ucWords = function() {
    let strArr = this.str.toLowerCase().split(' ');
    let newArr = strArr.map((item) => {
        let words = item.split('');
        return words[0].toUpperCase() + words.slice(1).join('');
    })
    return newArr.join(' ')
 }

/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */

 class NewMyString {
    constructor(str) {
        this.str = str;
    }

    reverse() {
        return this.str.toLowerCase().split('').reverse().join('');
    }

    ucFirst() {
        let strArr = this.str.toLowerCase().split('');
        return strArr[0].toUpperCase() + strArr.slice(1).join('');
    }

    ucWords() {
        let strArr = this.str.toLowerCase().split(' ');
        let newArr = strArr.map((item) => {
        let words = item.split('');
        return words[0].toUpperCase() + words.slice(1).join('');
        })
        return newArr.join(' ')
    }
 } 

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
    }

    getFullName() {
        return `${this.name} ${this.secondName}`
    }

    getEmail() {
        return this.email
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
    constructor(name, secondName, year) {
        super(name, secondName);
        this.year = year;
    }

    getFullName() {
        return super.getFullName()
    }

    getCourse() {
        let date = new Date();
        return `вы на ${date.getFullYear() - this.year} курсе`
    }
 }
