/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */

/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

/**
 * Задание 3
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргментом функции(функции могут делать все что угодно на вам выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */

/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */



 // ... в аргументах функции

let arr = [1, 2, 3, 4, 5];
let clonedArr = [...arr];

clonedArr[0] = "Hello";
arr[0] = "World";

function findMax(...args) {
  //first
  console.log(arguments.length);
  let args1 = [...arguments];
  console.log(args1);
  //second

  console.log(args);

  let max = Math.max(...args); // Math.max(1, 2, 3, 6, 7, 8, 9, 19);

  return max;
}

let max = findMax(1, 2, 3, 6, 7, 8, 9, 19);

("use strict");

function sayHelloToWithMessage(message, ...names) {
  let msg = `Привет, ${message} `;

  names.forEach((name) => {
    console.log(msg + name);
  });
}

sayHelloToWithMessage("Доброе утро", "Петя", "Зина", "Нина");

//Замыкания

function showName(name, sureName) {
  let getFullName = (firstName, secondName) => firstName + " " + secondName;

  console.log(getFullName(name, sureName));
}

showName("John", "Doe");
