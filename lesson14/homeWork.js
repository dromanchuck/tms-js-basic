/**
 * Задание 0
 * Переписать задания к уроку 13 используя классы.
 */
class Worker {
    constructor(name, secondName, rate, days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
} 

let vasya = new Worker('Vasya', 'Vasechkin', 35, 20);

console.log(vasya);

/*************/

class Worker {
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

    getSecondName() {
        return this.secondName;
    }

    getRate() {
        return this.rate;
    }

    getDays() {
        return this.days;
    }

    setRate(rate) {
        if(isNaN(Number(rate))) {
            alert('Error');
        } else {
            this.rate = rate;
        }
    }

    setDays(days) {
        if(isNaN(Number(days))) {
            alert('Error');
        } else {
            this.days = days;
        }
    }
}

let vasya = new Worker('Vasya', 'Vasechkin', 35, 20);

vasya.setRate(1000);
vasya.setDays(3);

console.log(vasya.getSalary());

/*************/

class MyString {
    constructor() {}

    reverse(str) {
        let arr = [...str].reverse();
    
        return arr.join('');
    }
    
    upperCaseFirst(str) {
        let arr = [...str];
        arr[0] = arr[0].toUpperCase();
    
        return arr.join('');
    }
    
    upperCaseWords(str) {
        let arr = str.split(' ');
    
        arr.forEach((element, index, array) => {
            arr[index] = this.upperCaseFirst(element);
        });
        
        return arr.join(' ');
    }
}

/**
 * Задание 1
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
        console.log(this.name + ' ' + this.secondName);
    }

    getEmail() {
        console.log(this.email);
    }
}  

let user = new User ('Ivan', 'Ivanov', '12345@mail.ru');

console.log(user);
console.log(user.getFullName());

/**
 * Задание 2
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */
class Student extends User {
    constructor(name, surName, year) {
        super(name, surName);
        this.year = year;
    }

    getCourse() {
        let data = new Date();
        let course = data.getFullYear() - this.year;
        console.log(course);
    }
}

let student = new Student('Vasya', 'Petrov', 2018);

console.log(student);
console.log(student.getFullName());
console.log(student.getCourse());