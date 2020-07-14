/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значени всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */

function min(a,b){
    return a > b ? b:a;
}

console.log(min(5,78));
/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */
function sum(num1, num2){
   
    return num+num;

}
sum(5,5)
/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 * 
 *
 */
function test() {
    let num = 2; 
    return function() {
        console.log(num);
        num*=2;
    }
}
let func = test();
func(); 
func(); 
func(); 
func();
func();
/**
 * Задание 3
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
let arr = [1,2,3,5,4,5,5],
arr1 = [2,3,5,444,6,5];
function  arrCompare(arr, arr1) {
let i = arr.length;
if(i != arr1.length){
return false;
}
while(i++){
  if(arr[i] == arr1[i])
  return true; 
}
}
console.log(arrCompare(arr,arr1))
/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргментом функции(функции могут делать все что угодно на вам выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */
function func(num1,num2){
    function sum(num){
      return num + num;
    }
    return sum(num1)+sum(num2);
  }
  console.log(func(5,6))
/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */
function difference(a){
    return function (b) {
     return a-b;
    };
  }
  let g = difference();
  console.log(g);
