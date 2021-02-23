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
 * Внести изменения в задание 2 из урока 12. Необходимо сделать следующее:
 * 1. Сделать так, чтобы слайдер работал корректно
 * 2. Перенести код задания в урок 13 в отдельную папку (название выбрать самостоятельно)
 * 3. Разделить весь код в разные файлы используя import/export
 */

import { slider } from './slider/slider.js';

slider();

/**
 * Задание 2
 * Создать объект работника, у него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */

const worker = {
  name: 'Pasha',
  surname: 'Kulbatsky',
  workExperience: 1,
  email: 'escapefromtarkov@24/7.su',
  sayHello(name) {
    alert(`Привет, ${name}! Меня зовут ${this.name}`);
  },
};

worker.sayHello('Женя');

/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

worker.detailsDoneAmount = 10;
worker.encreaseDetails = function () {
  this.detailsDoneAmount++;
};

worker.resetDetails = function () {
  this.detailsDoneAmount = 0;
};

worker.encreaseDetails();
worker.resetDetails();

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

const counter = {
  count: 0,
  increase() {
    this.count++;
  },
  decrease() {
    this.count--;
  },
  getCount() {
    return this.count;
  },
};

counter.increase();
counter.increase();
counter.decrease();
console.log(counter.getCount());

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

function student(name, age, group, marks) {
  this.name = name;
  this.age = age;
  this.group = group;
  this.marks = marks;
}

const avgMark = function () {
  const marks = this.marks;
  this.avg = marks.reduce((acc, el) => acc + el, 0) / marks.length;
};

const student1 = new student('Vasya', 21, 3, [5, 8, 10, 2]);
const student2 = new student('Petya', 20, 4, [7, 3, 6, 4]);
const student3 = new student('VLADISLAV', 18, 2, [7, 2, 1, 10]);

// student.prototype.getAvg = avgMark;
// student1.getAvg();
// student2.getAvg();
// student3.getAvg();

// avgMark.call(student1);
// avgMark.call(student2);
// avgMark.call(student3);

// avgMark.apply(student1);
// avgMark.apply(student2);
// avgMark.apply(student3);

const student1avg = avgMark.bind(student1);
const student2avg = avgMark.bind(student2);
const student3avg = avgMark.bind(student3);

student1avg();
student2avg();
student3avg();

console.log(student1.avg);
console.log(student2.avg);
console.log(student3.avg);
