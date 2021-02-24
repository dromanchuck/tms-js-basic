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
 * 2. Перенести код задания в урок 13 в отдельную папку(название выбрать самостоятельно)
 * 3. Разделить весь код в разные файлы используя import/export
 */

/**
 * Задание 2
 * Создать объект работника в него должны быть следующие свойства: имя, фамилия, стаж, email.
 * Плюс у него должны быть методы: sayHello - функция, которая принимает имя и
 * будет выводить в alert сообщение 'Привет, ИМЯ! Меня зовут ИМЯ_РАБОТНИКА' (использовать this)
 */

const worker = {
    name: 'Korben',
    surname: 'Dallas',
    experience: 3,
    email: 'Korben@mail.ru',
    sayHello: function (name) {
        alert(`Hi ${name}, i'm ${this.name}_${this.surname}`)
    }
}

// worker.sayHello('Max')()


/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

worker.done = 0
worker.incrementDone = function () {
    this.done += 1
}
worker.removeDone = function () {
    this.done = 0
}



/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

worker.decrementDone = function () {
    this.done -= 1
}
worker.getDone = function () {
    return this.done
}

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */



//  Без контекста
const students = [
    {
        name: 'Mike',
        age: 20,
        group: '4K2',
        marks: [6, 8, 4, 9, 10]
    },
    {
        name: 'Nike',
        age: 22,
        group: '4K3',
        marks: [7, 8, 4, 3, 9]
    },
    {
        name: 'Dike',
        age: 19,
        group: '4K1',
        marks: [8, 8, 2, 5]
    },
    {
        name: 'Sike',
        age: 20,
        group: '4K2',
        marks: [4, 6, 8, 3, 6, 10]
    },
]

function addFinalMark(arr) {
    arr.forEach(item => item.finalMark = item.marks.reduce((acc, mark) => acc + mark, 0) / arr.length)
    return arr
}

console.log(addFinalMark(students))


// С контекстом
const student1 = {
    name: 'Lowly',
    age: 23,
    group: '71WF2',
    marks: [1, 2, 3, 4, 7, 4, 2, 6]
}
const student2 = {
    name: 'L',
    age: 24,
    group: '71WF3',
    marks: [8, 2, 3, 7, 2, 6]
}
const student3 = {
    name: 'Lo',
    age: 21,
    group: '71WF1',
    marks: [9, 10, 8]
}
const student4 = {
    name: 'Lowl',
    age: 19,
    group: '71WF2',
    marks: [7, 7, 7, 2, 6]
}

function releaseFinalMark() {
    this.finalMark = this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length
    return this
}

console.log(releaseFinalMark.apply(student4))