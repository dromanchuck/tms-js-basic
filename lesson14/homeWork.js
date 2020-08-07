/**
 * Задание 0
 * Переписать задания к уроку 13 используя классы.
 */

/**
 * Задание 1
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */

class User {
    constructor(name,surname,email) {
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
    constructor(name,surname, year) {
        super();
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    
    getCourse() {
        let date = new Date();
        let course = (date.getFullYear() - this.year);

        if(course >= 1 || course <= 5) {
            return course;
        } else {
            alert('Уже выпустился!!!');
        };
        
    };
}

let antony = new Student ('Antony','Vakovskiy',2017);

let mike = new Student ('Mike','Zavalo', 2012);

mike.getCourse();
