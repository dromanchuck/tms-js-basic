/**
 * Задание 1
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
// function onlyWorker(name, secondName, rate, days) {
//     this.name = name;
//     this.secondName = secondName;
//     this.rate = rate;
//     this.days = days;
// }

// onlyWorker.prototype.getSalary = function() {
//      console.log(this.rate * this.days)
// }
// let worker = new onlyWorker('Artyom','Kraken', 500, 30)
// worker.getSalary()
// console.log(worker)
/**
 * Задание 2
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
// onlyWorker.prototype.getName = function() {
//     return this.name;
// }

// onlyWorker.prototype.getSecondName = function() {
//     return this.secondName;
// }

// onlyWorker.prototype.getRate = function() {
//     return this.rate;
// }

// onlyWorker.prototype.getDays = function() {
//     return this.days;
// }

// onlyWorker.prototype.setRate = function(rate) {
//     this.rate = rate;
// }
// onlyWorker.prototype.setDays = function(days) {
//     this.days = days;
// }
// worker.setRate(20);
// worker.setDays(20);
// worker.getSalary();
// console.log(worker)

/**
 * Задание 3
 * Сделать задание 1-2 с использованием классов.
 *
 */
// class OnlyNewWorker {
//     constructor(name, secondName, rate, days){
//         this.name = name;
//         this.secondName = secondName;
//         this.rate = rate;
//         this.days = days;
//     }

//     get getSalary(){
//         return this.rate * this.days;
//     }

//     get getName(){
//         return this.name;
//     }

//     get getSecondName(){
//         return this.secondName;
//     }

//     get getRate(){
//         return this.rate;
//     }

//     get getDays(){
//         return this.days;
//     }

//     setRate(rate){
//         this.rate = rate;
//     }

//     setDays(days){
//         this.days = days;
//     }
// }
// let secondWorker = new OnlyNewWorker('Pete','Sokol', 50, 10);

// console.log(secondWorker);
// console.log(secondWorker.getSalary);

// secondWorker.setRate(100);
// secondWorker.setDays(20);

// console.log(secondWorker);
// console.log(secondWorker.getSalary);


/**
 * Задание 4
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
// function myString(str) {
//     this.str = str;
// }

// myString.prototype.reverse = function() {
//     return console.log(this.str.split('').reverse().join(''));
// }

// myString.prototype.ucFirst = function() {
//     let arr = this.str.split('');
//     let fullArr = arr[0].toUpperCase() + arr.slice(1).join('').toLowerCase();
//     return console.log(fullArr);
// }

// myString.prototype.ucWords = function() {
//     let array = this.str.split(' ');
//     let arrUcWords = array.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')
//     return console.log(arrUcWords);
// }

// let str = new myString('hello mY fRiend');
// str.reverse();
// str.ucFirst();
// str.ucWords();
// console.log(str)
    
/**
 * Задание 5
 * Сделать задание 4 с использованием классов.
 *
 */
// class MyString {
//     constructor(str){
//         this.str = str;
//     }

//     reverse(){
//         return console.log(this.str.split('').reverse().join(''));
//     }

//     ucFirst(){
//         let arr = this.str.split('');
//         let fullArr = arr[0].toUpperCase() + arr.slice(1).join('').toLowerCase();
//         return console.log(fullArr);
//     }

//     ucWords(){
//         let array = this.str.split(' ');
//         let arrUcWords = array.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ')
//         return console.log(arrUcWords);
//     }
// }

// let onlyMyString = new MyString('reLease the kraKen');
// onlyMyString.reverse();
// onlyMyString.ucFirst();
// onlyMyString.ucWords();

/**
 * Задание 6
 * Реализуйте класс User, который будет иметь следующие свойства: имя, фамилия, email; следующие методы:
 * getFullName, getEmail.
 */
class User {
    constructor(name ,secondname, email){
        this.name = name;
        this.secondname = secondname;
        this.email = email;
    }

    getFullName(){
        return console.log(this.name +' '+ this.secondname);
    }

    getEmail(){
        return console.log(this.email);
    }
}

let newUser = new User('Artyom','Lyovkin','JI3BA@mdsa.com');
newUser.getFullName()
newUser.getEmail()
/**
 * Задание 7
 * Реализуйте класс Student, который будет наследовать класс User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год
 * поступления в вуз. Текущий год получить программно, используя объект Date (https://learn.javascript.ru/datetime).
 */
class Student extends User{
    constructor(name, secondname, year){
        super(name,secondname)
        this.year = year;
    }

    getFullName(){
        super.getFullName()
    }

    getCourse(){
        let date = new Date(this.year)
        let dateNow = new Date();
        let newDate = dateNow.getFullYear()
        let Now = newDate - date;
        if(Now === 0){
            alert('Вы ещё не поступили')
        }else if(Now > 5){
            alert('Вы уже закончили')
        }else{
            alert(`Cейчас ${Now} курс`)
        }
    }
}

let student = new Student('Andry', 'Petrovich', 2017);
student.getFullName();
student.getCourse();
