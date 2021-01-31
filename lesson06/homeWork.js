/**
 * Домашнее задание к занятию 6
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson06. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргументом функции(функции могут делать все что угодно на ваш выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */

function task1(condition, function1, function2) {
    if (condition) {
        function1()
    } else {
        function2()
    }
}

function showMessage() {
    alert('Я изучаю JavaScript!')
}

function showSum() {
    alert('2 + 2 = 4')
}

task1(100 > 0, showMessage, showSum);


/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}
console.log(compareArrays([1, 3, 5], [1, 3, 6]));
console.log(compareArrays([1, 3, 5], [1, 3, 5, 7]));
console.log(compareArrays([1, 3, 5], [1, 3, 5]));


/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

function makeCounter() {
    let count = 0;

    return function() {
        count++
        return count ** 2;
    }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

function getMilliseconds() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let now = new Date();
    return +now - +today
}

getMilliseconds();

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function getSum(number = 2021) {
    return String(number).split('').reduce((acc, item) => acc + +item, 0)
}

getSum(1111);

/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

// не придумала :(

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

function deleteValues(array) {
    return array.filter(item => item)
}

deleteValues([1, 0, false, 'JS', undefined, 12, '', 'cat', null, [0, 1, ''], { name: "Dasha" }]);

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

// не придумала :(