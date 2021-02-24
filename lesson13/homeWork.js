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

import sliderWithAJAX from './slider/sliderMain.js'
sliderWithAJAX.sliderWithAJAX()

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */

let employeList = {
    name: 'Diana',
    surname: 'Lowly',
    experience: '2 years',
    email: 'lowly.di@mail.ru',

    sayHello(name) {
        alert(`Привет, ${name}! Меня зовут ${this.name}`);
    }
}

employeList.sayHello("Anton");

/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

employeList.completedParts = 3;

employeList.completedPartsAdd = function() {
    return console.log(this.completedParts + 1)
}
employeList.completedPartsAdd()

employeList.completedPartsDiv = function() {
    return console.log(this.completedParts = 0)
}
employeList.completedPartsDiv()

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

let count = {
    countStart: 0,

    increment() {
        return this.countStart++
    },

    dincrement() {
        return this.countStart--
    },

    returnValue() {
        return this.countStart
    }
}
count.increment()
count.increment()
count.dincrement()
count.returnValue()

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

let firstStudent = {
    name: "Diana",
    age: 21,
    groupNumber: 'FE42',
    grades: [8, 10, 6, 9]
}

let secondStudent = {
    name: 'Anna',
    age: 20,
    groupNumber: 'FE42',
    grades: [7, 10, 9, 9]
}

function average() {
    let sumOfGrades = this.grades.reduce((total, item) => total + item, 0);
    return sumOfGrades / this.grades.length;
}

let averageOfFirstStudent = average.bind(firstStudent);
let averageOfSecondStudent = average.bind(secondStudent);

console.log(averageOfFirstStudent())
console.log(averageOfSecondStudent())
