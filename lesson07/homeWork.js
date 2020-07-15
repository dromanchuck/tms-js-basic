/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
function minArgs (...args) {
    let  newArr = args.reduce((total,element) => {
        if (element < total){
            total = element;
        }
        return total;
    });
    return newArr;
}

console.log(minArgs(1, 2, 3, -6));

/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */
function sumAll(...args) {
    let reducer = (acc, elem) => acc + elem;
    return args.reduce(reducer);
}

console.log(sumAll(1, 2, 3, 5));

/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */
function counter() {
    let count = 1;

    return function() {
        return Math.pow(count++, 2);
    }
}

let output = counter();

console.log(output());
console.log(output());
console.log(output());
console.log(output());

/**
 * Задание 3
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

function comparison(a, b) {
    if (JSON.stringify(a) == JSON.stringify(b)) {
        return true;
    }
    return false;
}

let result = comparison(arr1, arr2);
console.log(result());

/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргментом функции(функции могут делать все что угодно на вам выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */
let a = 1;
let b = 3;

function trueFunc() {
    return true;
}

function falseFunc() {
    return false;
}

function result(comp, func1, func2) {
    if (comp == true) {
        return func1();
    }
    return func2();
}

let output = result(a == b, trueFunc, falseFunc);

console.log(output());

/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function substract(a) {
    return function(b){
      return a - b;
      }
}
  
let sub = substract(4)(3);

console.log(sub);
