/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
function min(...args) {
  let counter;
  args.forEach((elem, i) => {
    if (args[i] < args[i + 1]) {
      counter = args[i];
      args[i + 1] = counter;
    }
    return (counter = args[i]);
  });
  return counter;
}
console.log(min(423, -24, -43, 1, 55, 26));
/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */
function sum(...args) {
  let newArg = args.reduce((counter, elem, i) => {
    counter += elem;
    return counter;
  }, 0);
  return newArg;
}
console.log(sum(1, 2, 34));
/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */
function sqrtCall() {
  let counter = 0;
  return function () {
    counter++;
    return counter ** counter;
  };
}
let count = sqrtCall();
count();
count();
console.log(count());
/**
 * Задание 3
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
function compare(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i])
  );
}
console.log(compare([3, 5], [3, 5]));
/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргментом функции(функции могут делать все что угодно на вам выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */
let obj1 = {
  company: "RStyle",
  phone: 80298654242,
  contact: "Eugenii",
  phoneAvail: "Недоступен",
};

function func1() {
  obj1.phone = 80242242445;
  obj1.contact = "Pete";
  obj1.phoneAvail = "Доступен";
  return console.log(obj1);
}

function func2() {
  return console.log(obj1);
}

function trueFunction(cond, func1, func2) {
  if (cond === true) {
    return func1();
  } else {
    return func2();
  }
}

trueFunction(obj1.phoneAvail === "Недоступен", func1, func2);
/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function difference(a) {
  return function (b) {
    return a - b;
  };
}
console.log(difference(-1)(-12));
