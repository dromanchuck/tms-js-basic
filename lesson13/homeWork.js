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

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */
const worker = {
  name: 'Petya',
  surname: 'Pupkin',
  experience: 10,
  email: 'pupkin@gmail.com',
  sayHello: function (name = '') {
    alert(`Hi ${name}, i'm ${this.name} ${this.surname}`);
  },
};
// worker.sayHello('Zhenya');

/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */
worker.numberOfCompletedDetails = 0;
worker.increment = function () {
  this.numberOfCompletedDetails++;
};

worker.reset = function () {
  this.numberOfCompletedDetails = 0;
};

worker.increment();
worker.increment();
worker.increment();
console.log(worker.numberOfCompletedDetails);

worker.reset();
console.log(worker.numberOfCompletedDetails);

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */
const counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
  getCount: function () {
    return this.count;
  },
};

console.log(counter.count);

counter.increment();
counter.increment();

console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

const student1 = {
  name: 'Andrey',
  age: 20,
  group: 4,
  marks: [6, 8, 9, 6, 5],
};
const student2 = {
  name: 'Artem',
  age: 19,
  group: 3,
  marks: [6, 7, 9, 5, 9],
};
const student3 = {
  name: 'Julia',
  age: 21,
  group: 5,
  marks: [9, 8, 6, 10, 7],
};

function avarage() {
  const sum = this.marks.reduce((a, b) => a + b, 0);
  const result = sum / this.marks.length;
  this.avarage = result;
}

console.log(avarage.call(student1));
console.log(student1);

const averageWuthBind = avarage.bind(student2)
averageWuthBind();
console.log(student2);