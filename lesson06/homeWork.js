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

function someFunction (cond, func1, func2) {
    return cond ? func1() : func2()
};

someFunction((2<6), () => "It's true", () => "It's false");


/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

function compareFunction(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false
    }

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false
        }
    }

    return true
};

compareFunction([3, 6, 6, 9], [3, 6, 6, 9]);
compareFunction([3, 6, 6, 9], [3, 6, 6]);

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

function makeCounter() {
    let count = 0;

    return function () {
        count++;

        return count ** 2
    }
};

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());


/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

const today = new Date(2021, 1, 1);
const milliseconds = new Date() - today;

console.log(milliseconds);

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function sumOfNumbers(number = 2021) {
    return String(number).split('').reduce((acc, val) => +acc + +val)
};

sumOfNumbers(5050);


/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

/**
 * Не работает, если количество элементов в изначальном массиве нечетное, 
 * а значение area четное. И наоборот. 
 * Например, splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) получится [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ];
 */
function splitArray(array, area) {
    const newArray = [];

    for (let i = 0; i < array.length; i += area) {
      newArray.push(array.slice(i, i + area));
    }
    return newArray;
  }
  
  const result = splitArray([1, 2, 3, 4, 5, 6, 7, 8], 2);

  console.log(result);

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

let mixArray = [1, 2, '', 3, -3, null, false, 0, 'Yes', undefined, 4, 4, 5, , 6, , , ,];
let newArray = mixArray.filter(Boolean);

console.log(newArray);

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */
