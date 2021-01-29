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

// let a = 12;
// let b = 7;

// let condition = (a > b);


//  function plus(x, y) {
//      return x + y;
//  }

//  function minus(x, y) {
//      return x - y;
//  }

//  function funcOne(cond, funcTrue, funcFalse) {

//     if (cond === true) {
//         return funcTrue;
//     } else {
//         return funcFalse;
//     }
//  }

//  console.log(funcOne(condition, plus(5, 3),  minus(5, 3)));


/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

//  let array1 = [1,2,3,4,6];
//  let array2 = [1,2,3,4,5];

//  function arrayComparison (arr1, arr2) {
//    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
//     return true;
//    } else {
//     return false;
// }
// }

// console.log(arrayComparison(array1, array2));


/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

// function setCount() {
//     let count = 0
//     count++
//     return function () {
//         return (count++) ** 2
//     }
// }

// let funcClosure = setCount()

// console.log(funcClosure());
// console.log(funcClosure());
// console.log(funcClosure());
// console.log(funcClosure());
// console.log(funcClosure());


/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

//  function showMiliseconds() {
//     let today = new Date(2021, 0, 29);
//     let today1 = new Date();

//     console.log(today);

//     let todaySeconds = today1 - today;

//     console.log(todaySeconds);
//  }

//  console.log(showMiliseconds());


/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

//  let number = 2021;

//  function sum (num) {

//    return num.toString().split('').reduce(function(x, y) {
//        return +x + +y;
//    });
    
//  }

//  console.log(sum(number));


/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

//  let array = [1, 2, 3, 4, 5, 6];

// function slicedArray(array, item) {
//     let newArray = [];

//     for (let i = 0; i < array.length; i += item) {
//       newArray.push(array.slice(i, i + item));
//     }
//     return newArray;
//   }
  
//   let result = slicedArray(array, 2);
//   console.log(result);

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

//  let array = [1, 2, '', null, 3, false, 4, undefined, 5, '12', 0, ' '];

// let clearArray = array.filter(function (value) {
//     return value;
// });

//  console.log(clearArray);

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */
