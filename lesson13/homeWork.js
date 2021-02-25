/**
 * Домашнее задание к занятию 13
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson13.
 * Например: dmitryR/lesson13. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Внести изменения в задание 2 из урока 13. Необходимо сделать следующее:
 * 1. Сделать так, чтобы слайдер работал корректно
 * 2. Перенести код задания в урок 13 в отдельную папку(название выбрать самостоятельно)ю
 * 3. Разделить весь код в разные файлы используя import/export
 */

import {mainTask} from './main.js';
/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */


const worker = {
    name: 'Freddy',
    surname: 'Dolly',
    experience: '3 years',
    email: 'fraddy@gmail.com',
    
    sayHello(myName) {
        alert(`Привет ${myName}! Меня зовут ${this.name}!`)
    },
};

worker.sayHello('Jon');


/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

worker.details = 10;

worker.increment = function() {
    this.details++
};

worker.reset = function() {
    this.details = 0
};

worker.increment();
worker.increment();

console.log(worker.details);

worker.reset();

console.log(worker.details);


/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */


const counter = {
    count: 0,

    increment() {
        this.count++
    },

    decrement() {
        this.count--
    },

    returnCount() {
        return console.log(this.count)
    },
};

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.returnCount();


/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */


const firstStudent = {
    name: 'Toni',
    age: 21,
    group: 11,
    rating: [6, 6, 8, 9, 7],
};

const secondStudent = {
    name: 'Samanta',
    age: 19,
    group: 8,
    rating: [5, 7, 6, 5, 8],
};

const thirdStudent = {
    name: 'Lary',
    age: 20,
    group: 10,
    rating: [4, 6, 5, 4, 5],
};

function averageRating() {
    const sum = this.rating.reduce((acc, val) => acc + val, 0);
    const result = sum / this.rating.length;
    this.avarage = result;
};

averageRating.call(firstStudent);
averageRating.call(secondStudent);
averageRating.call(thirdStudent);

console.log(firstStudent);