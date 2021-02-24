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

let workerInfo = {
  name: 'Inna',
  surname: 'Barington',
  exp: 3,
  email: 'IB@gmail.com',
  sayHello: function (name) {
    console.log(`Привет, ${name}! Меня зовут ${this.name}!`)
  },
}

workerInfo.sayHello('Ilya')

/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

workerInfo.countDetails = 5

workerInfo.plusOneDetail = function () {
  this.countDetails += 1
  return this.countDetails
}

workerInfo.resetCountDetails = function () {
  this.countDetails = 0
  return this.countDetails
}

console.log(workerInfo.resetCountDetails())

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

let counter = {
  count: 5,
  plusOne: function () {
    this.count += 1
    return this.count
  },
  minusOne: function () {
    this.count -= 1
    return this.count
  },
  getCount: function () {
    return this.count
  },
}

// console.log(counter.plusOne())
// console.log(counter.minusOne())
console.log(counter.getCount())

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

let stud1 = {
  name: 'Archi',
  age: 20,
  groupNumber: 32,
  marks: [7, 6, 9, 10, 4, 3],
}
let stud2 = {
  name: 'Kate',
  age: 19,
  groupNumber: 33,
  marks: [9, 4, 9, 5, 4, 3],
}

let stud3 = {
  name: 'Inna',
  age: 21,
  groupNumber: 32,
  marks: [7, 6, 9, 10, 4, 3],
}

function getAverageMark() {
  this.averageMark =
    this.marks.reduce((acc, currentValue) => acc + currentValue, 0) /
    this.marks.length
  return this.averageMark
}

console.log(getAverageMark.apply(stud1))
console.log(stud1)
