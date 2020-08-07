/** Задание 0
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */

function Worker(name,secondName,rate,days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function() {
    return this.rate * this.days;
}

let worker = new Worker('hi','hello',123,223);
console.log(worker);

/**
 * Задание 1
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, getSalary,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */

Worker.prototype.getName = function() {
    return this.name;
}

Worker.prototype.getSecondName = function() {
    return this.secondName;
}

Worker.prototype.getRate = function() {
    return this.rate;
}

Worker.prototype.getDays = function() {
    return this.days;
}

Worker.prototype.setRate = function(rate) {
    if(isNaN(Number(rate))) {
        return true;
    } else {
        this.rate = rate;
    }
}

Worker.prototype.setDays = function(days) {
    if(isNaN(Number(days))) {
        return true;
    } else {
        this.days = days;
    }
}

worker.setRate(1000);
worker.setDays(1);

/**
 * Задание 2
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

function MyString() {}

MyString.prototype.reverse = function(str) {
    let arr = [...str].reverse();

    return arr.join('');
}

MyString.prototype.upperCaseFirst = function(str) {
    let arr = [...str];
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

MyString.prototype.ucWords = function(str) {
    let arr = str.split(' ');
    arr.forEach((element,ind,arr) => {
        arr[ind] = this.upperCaseFirst(element);
    });
    return arr.join(' ');
}

let string = new MyString();

console.log(string.ucWords('Why are you mad?'));

/************************************************** Classes JS *****************************************************/

class Worker {
    constructor(name,secondName,rate,days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

/*     getSalary() {
        return this.rate * this.days;
    }
 */
    /* 
    getSalary = () => {
        console.log(this.rate * this.days);
        return this.rate * this.days;
    } */

    setRate(rate) {
        this.rate = rate;
    }
    
    setDays(days) {
        this.days = days;
    }
    
}

let worker = new Worker('employee','hello',2,2);    

function getSalary() {
    return this.rate * this.days;
}
let getSalary1 = getSalary.bind(worker);
getSalary1();   




/*********** BIND - create new function ****************/
let user = {
    name: 'Antony'
}

function getUserName() {
    return this.name;
}

let getUserNameBind = getUserName.bind(user);
getUserNameBind();

/* getUserName.call - для строк!!1 

getUserName.apply - для массива!!! */


/**************************** Наследование ********************************** */

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("hi"); 
    }

}

class Dog extends Animal {
    constructor() {
        super();
    }
} 

let rex = new Dog('Vettar');