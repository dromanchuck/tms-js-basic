/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

function findMin(...args) {
  let min = args.reduce((acc, curr) => {
    if (acc > curr) {
      return curr;
    }

    return acc;
  }, args[0]);

  return min;
}

let min = findMin(1, 2, 4, 5, 7, 1, 2, 3, 4, 5);

/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */

let makeSum = function () {
  const args = [...arguments];

  let sum = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum;
};

let sum = makeSum(1, 5, 3, 2, 5, 6, 8, 4, 0, -10, 90);
console.log(sum);

/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

function makeCounter() {
  let count = 0;

  return function () {
    count++;

    return count ** 2;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/**
 * Задание 3
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

const arr1 = [1, 3, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];

function equals(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let isEqual = arr1.reduce((prev, curr, index) => {
      if (curr === arr2[index]) {
        return prev;
      }

      if (curr !== arr2[index]) {
        return false;
      }
    }, true);

    return isEqual;
  }

  return false;
}

const isEqual = equals(arr1, arr2);

console.log(isEqual);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

const equals = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

let isEqual = equals(arr1, arr2);

/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргументом функции(функции могут делать все что угодно на ваш выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */

function makeWhenTrue() {
  alert("TRUE");
}

function makeWhenFalse() {
  alert("FALSE(");
}

function checkIsTrue(cond, funcTrue, funcFalse) {
  return cond ? funcTrue() : funcFalse();
}

let cond = confirm();

checkIsTrue(cond, makeWhenTrue, makeWhenFalse);

/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

function substract(a) {
  return function (b) {
    return a - b;
  };
}

let sub = substract(12)(6);
