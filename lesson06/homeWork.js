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
function task1(condition, func1, func2) {
  if (condition) {
    func1()
  } else {
    func2()
  }
}

function func1() {
  console.log('true function');
}

function func2() {
  console.log('false function');
}

console.log(task1(2 === 2, func1, func2));

/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5]
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}
console.log(compareArrays(arr1, arr2))

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */
function countCalls() {
  let count = 0;
  return function func() {
    return (count++) ** 2;
  }
}

const innerFunction = countCalls();
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());


/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */
function getMiliseconds() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return Date.now() - date.getTime();
}

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */
function sumDigits(value = 2021) {
  return String(value).split('').reduce((acc, value) => +acc + +value)
}

console.log(sumDigits())

/**
 * Задание 6 ?
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
 */

 // не получается решить эту задачу

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */
const arr = [false, undefined, 5, 0, null, 6, 85, '']

function filterArray(arr) {
  return arr.filter((value) => value)
}
console.log(filterArray(arr))
/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

function createArrayWithUniq(...args) {
  return args.reduce((acc, oneArr) => {
   return acc.filter((item) => oneArr.includes(item)) 
  });
}


createArrayWithUniq([1, 3], [2, 3], [2, 3, 5])
