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
//1. Надо было с rightButton.onclick убрать минус у offset и стало работать правильно. 

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */
let worker = {
    firstName: `Chandler`,
    surname: `Bing`,
    exp: 14,
    email: `channybing@gmail.com`
};
worker.sayHello = function(name){
    alert(`Hello, ${name}. My name is ${this.firstName} ${this.surname}`)
};
worker.sayHello(`Dima`);
/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */
let worker = {
    firstName: `Chandler`,
    surname: `Bing`,
    exp: 14,
    email: `channybing@gmail.com`,
    countWorksDone: 35,
};
worker.count = function(){
   return this.countWorksDone++;
};
alert(worker1.count())
worker.deleteCount = function(){
    this.countWorksDone = 0;
}
/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */
let counter = {
    count: 0,
}
counter.increment = function(){
    return this.count++;
}
counter.decrement = function(){
    return this.count--;
}
counter.return = function(){
    return this.count;
}
/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */
studentAlice = {
    name: `Alice`,
    age: 23,
    group: 4,
    marks: [5, 4, 5, 5, 4],
};
studentMike = {
    name: `Mike`,
    age: 20,
    group: 3,
    marks: [4, 4, 5, 4, 4],
};
studentBillie = {
    name: `Billie`,
    age: 21,
    group: 4,
    marks: [3, 4, 3, 5, 4],
};
studentAngela = {
    name: `Angela`,
    age: 19,
    group: 3,
    marks: [5, 3, 5, 5, 4],
};
function middleMarks(array){
    let sumMarks = this.marks.reduce((a, b) => (a + b));
    let result = sumMarks / this.marks.length;
    this.newMiddleMarks = result;
    return result;
    }
alert(middleMarks.call(studentAngela))
alert(middleMarks.call(studentBillie))
alert(middleMarks.call(studentMike))
alert(middleMarks.call(studentAlice))