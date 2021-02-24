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

let employee = {
    firstName: 'Kate',
    lastName: 'Ostin',
    workExperience: 5,
    email: 'kate@gmail.com',

    sayHello(name) {
        alert(`Привет, ${name}! Меня зовут ${this.firstName}`)
    }
};

employee.sayHello('Dasha');

/**
 * Задание 3
 * Добавить в объект работника поле количество выполненных деталей. Добавить метод,
 * который будет увеличивать количество деталей на 1. Добавить метод, который будет делать ресет этого количества в 0. (использовать this)
 */

employee.detailsNumber = 26;
employee.increseDetailsNumber = function() {
    this.detailsNumber++;
    console.log(this.detailsNumber);
}
employee.removeDetailsNumber = function() {
    this.detailsNumber = 0;
    console.log(this.detailsNumber);
}

employee.increseDetailsNumber();
employee.increseDetailsNumber();
employee.increseDetailsNumber();

employee.removeDetailsNumber();

/**
 * Задание 4
 * Создать объект счетчика, который будет иметь поле count - значение счетчика. Объект будет иметь следующие методы:
 * метод для инкремента(+1) счетчика, метод для декремента(-1) счетчика, метод который будет возвращать (return) значение счетчика.
 * (использовать this)
 */

let counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    returnValue() {
        return this.count;
    }
}

/**
 * Задание 5
 * Создать несколько объектов student c полями имя, возраст, номер группы, массив оценок.
 * Создать отдельно функцию, которая будет считать среднее орифметическое всех
 * оценок студента и добавлять свойство средняя оценка в объект.
 * Для использования этой функции для каждого из студентов использовать функции привязки контекста(bind или call или apply)
 * и this
 */

let students = [{
        name: 'Kate',
        age: 18,
        group: 23,
        grades: [5, 2, 5, 3, 5, 3, 4, 5]
    },
    {
        name: 'Olga',
        age: 18,
        group: 23,
        grades: [5, 4, 5, 4, 3, 4, 4, 5, 4, 5]
    },
    {
        name: 'Stepan',
        age: 19,
        group: 23,
        grades: [3, 4, 5, 4, 5, 3, 3, 3, 4]
    }
];

function getAverageGrade() {
    let array = this.grades;
    return this.averageGrade = Math.round(array.reduce((acc, el) =>
        acc += el, 0) / array.length)

}

for (let student of students) {
    getAverageGrade.call(student)
}

console.log(students)