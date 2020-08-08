/**
 * Задание 0
 * Переписать задания к уроку 13 используя классы.
 */

/* ex #1 */
class Worker {
    constructor(name, secondName, rate, days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
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
        if (isNaN(Number(rate))) {
            return true;
        } else {
            this.rate = rate;
        }
    }

    setDays(days) {
        if (isNaN(Number(days))) {
            return true;
        } else {
            this.days = days;
        }
    }
}

/* ex #2 */
class MyString {
    getStrReverse(str) {
        let arr = [...str].reverse();
        return arr.join('');
    }

    getStrUpperCaseFirst(str) {
        let arr = [...str];
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }

    getStrUcWords(str) {
        let arr = str.split(' ');
    arr.forEach((element,ind,arr) => {
        arr[ind] = this.getStrUpperCaseFirst(element);
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
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    getEmail() {
        return this.email;
    }

}

let user1 = new User('Peter', 'Robertson', 'bood@gmail.com');


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
    constructor(name, surname, email, year) {
        super(name,surname,email);
        this.year = year;
    }

    getCourse() {
        let date = new Date();
        let course = (date.getFullYear() - this.year);

        if (course === 0) {
            return 1;
        };

        if (course >= 1 && course <= 5) {
            return course;
        } else {
            alert('Уже выпустился!!!');
        };
        
    };
}

let antony = new Student('Antony', 'Vakovskiy','anti@gmail.com', 2017);
let mike = new Student('Mike', 'Zavalo',"ansufati@mail.com", 2012);

mike.getCourse();