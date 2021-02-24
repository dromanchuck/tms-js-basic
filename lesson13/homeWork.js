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

//  let person = {
//      name: 'Petr',
//      surname: 'Ivanov',
//      workExperience: 12,
//      email: 'petrIvanov@gmail.com',
//      sayHello: function(anotherName) {
//         alert(`Привет, ${anotherName}. Меня зовут ${this.name}`);
//      },
//  };

//  person.sayHello('Viktor');



/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

//   let person = {
//      name: 'Petr',
//      surname: 'Ivanov',
//      workExperience: 12,
//      email: 'petrIvanov@gmail.com',
//      detailsDone: 113,
//      detailsDoneIncrement: function () {
//         console.log(`Количество деталей + 1 = ${++this.detailsDone}`);
//      },
//      detailsDoneToZero: function () {
//         console.log(`Ресет количества деталей: ${this.detailsDone = 0}`);
//       },
//      sayHello: function(anotherName) {
//         console.log(`Привет, ${anotherName}. Меня зовут ${this.name}`);
//      },
//  };

//  person.detailsDoneIncrement();
//  person.detailsDoneToZero();

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

//  let counter = {
//     count: 5,
//     countIncrement: function() {
//         ++this.count
//     },
//     countDecrement: function() {
//         --this.count
//     },
//     countReturn: function() {
//         console.log(`Текущее значение счетчика = ${this.count}`)
//     },
//  };

//  counter.countIncrement();
//  counter.countDecrement();
//  counter.countReturn();


/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

//  let studentVika = {
//      name: 'Vika',
//      age: 19,
//      groupNumber: 113,
//      marks: [9, 8, 5, 6, 3]
//  };

//  let studentAndrey = {
//     name: 'Andrey',
//     age: 22,
//     groupNumber: 84,
//     marks: [4, 7, 2, 9, 10]
// };

// let studentRoma = {
//     name: 'Roma',
//     age: 20,
//     groupNumber: 184,
//     marks: [10, 6, 8, 2, 4]
// };

// function averageMark() {
//     let sum = this.marks.reduce((a, b) => (a + b));

//     let result = sum / this.marks.length;

//     this.averageMark = result;

//     console.log(this);
// }

// averageMark.call(studentVika);
