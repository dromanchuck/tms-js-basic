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
