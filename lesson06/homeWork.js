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

function getFunction(condition, trueFunction, falseFunction) {
  return condition ? trueFunction() : falseFunction();
}

getFunction(
  true,
  () => console.log("true"),
  () => console.log("false")
);

/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

function calcArray(array1, array2) {
  let isEqual = true;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        let result = calcArray(array1[i], array2[i]);

        if (result === false) {
          isEqual = false;
        }
      } else {
        if (array1[i] !== array2[i]) {
          isEqual = false;
        }
      }
    }

    return isEqual;
  }

  return false;
}

let arr1 = [[1, 2, [1, 4]], 2, 3, 4];
let arr2 = [[1, 2, [1, 3]], 2, 3, 4];

let result1 = calcArray(arr1, arr2);

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function calcSum(number) {
  let numStr = String(number);
  let arr = numStr.split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return String(number)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(calcSum(2021));

/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 */

function splitArray(array, splitCount) {
  let arrayCount = Math.ceil(array.length / splitCount);
  let template = new Array(arrayCount).fill([]);

  return template.map((_value, index) => {
    let subArray = array.slice(
      index * splitCount,
      index * splitCount + splitCount
    );

    return subArray;
  });
}

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

function createArrayWithUniqueValues(...args) {
  let arr = array.reduce((acc, value) =>
    acc.filter((elem) => value.includes(elem))
  );

  return arr;
}

function uniqNum(...args) {
  let flatten = [].concat(...args);

  let result = flatten.reduce((result, value, index, arr) => {
    let numberOfHits = arr.filter((v) => v === value).length;
    if (numberOfHits > 1)
      result = Object.assign(
        { [value.toString().toLowerCase()]: numberOfHits },
        result
      );

    result = { ...result, [value.toString().toLowerCase()]: numberOfHits };
    return result;
  }, {});

  return Object.keys(result);
}

console.log(uniqNum([1, 3, 1], [2, 3], [2, 3, 5]));
