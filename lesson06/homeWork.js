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
function ifThisTrue() {
  console.log("True");
}
function ifThisFalse() {
  console.log("False");
}
function check(checked, ifThisTrue, ifThisFalse) {
  return checked ? ifThisTrue() : ifThisFalse();
}
let checked = confirm();
check(checked, ifThisTrue, ifThisFalse);
/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
let arr1 = [203, 493, 98, 2, 11, 54, 1000];
let arr2 = [203, 493, 98, 2, 10, 54, 1009];
let x = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
let y = x(arr1, arr2);
console.log(y);
/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */
function getCount() {
  let count = 0;
  return function () {
    count++;
    return count*count;
  };
}
let counter = getCount();

console.log(counter());
console.log(counter());
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
let day = new Date(2021, 0, 30).getTime();
console.log(day);
/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */
let num =+ prompt("Введите число: ", 2021);
function sumNumb(num) {
  let sum = 0;
  let str = String(num);
  for(let i = 0; i < str.length; i++) sum += Number(str[i]);
  return sum;
}
console.log(sumNumb(num));
/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */
let arr1 = [1, 4, 5, 8, 7, 11, 75, 9, 24];
let arr2 = [];
let size = 2;
for (let i = 0; i < arr1.length/size; i++){
    arr2[i] = arr1.slice((i*size), (i*size) + size);
}
console.log(arr2);
/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */
let arr1 = [231,  , 0, 0, `apple`, false, null, 212, undefined, `orange`, 54, 1];
arr1 = arr1.filter(function(value){
  return value !== undefined && value !== null && value !== 0 &&  value !== false;
});
/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */
function uniqNum(...args) { 
  let flatten = [].concat(...args)
  return Object.keys(flatten.reduce((result, value, index, arr) => {
      let numberOfHits = arr.filter((v) => v === value).length
      if(numberOfHits > 1)
          result = Object.assign({ [value.toString().toLowerCase()]: numberOfHits }, result)
      return result
  }, {}))
}
console.log(uniqNum([1, 3], [2, 3], [2, 3, 5]))