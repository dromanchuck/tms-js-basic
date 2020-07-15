'use strict'
/**
 * Задание 0
 * Написать функцию, которая вычислит минимальное значение всех аргументов функции и вернет это значение.
 * (Math.min использовать нельзя :-) )
 */
 
 function getMin(...args){
   let result;
   args.forEach((el,i,arr) => {
      if( arr[i] < arr[i + 1]){
      result = arr[i];
      arr[i + 1] = result;
   }  else {
      result = arr[i];
   };
   });
   return result
};

getMin(0,300,200,150,50,-50,-3500,200,150);

/**
 * Задание 1
 * Написать функцию, которая  подсчитает сумму всех аргументов функции и вернет это значение.
 */

function getSum(...args){
   let sumOfElements = args.reduce((total,el,i,arr) => {
      total += arr[i];
      return total;
   },0);
   return sumOfElements
};

console.log(getSum(25,35,45,44,21,-15,-3432,5297));

/**
 * Задание 2
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

function getAmountOfCalls(){
   let amount = 0;
   return function(){
      amount++;
      return console.log(Math.pow(amount,2));
   };
};

let func = getAmountOfCalls();


func();
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

function getComparisonResult(arr1,arr2){
   return arr1.every((el,i,arr) => {
      if(arr1[i] === arr2[i]){
         return true 
      } else
      return false
   });

};

let arr4 = [1,2,3];
let arr5 = [1,2,3];

console.log(getComparisonResult(arr4,arr5));

/**
 * Задание 4
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргментом функции(функции могут делать все что угодно на вам выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */

let cond = 2;

function func1() {
   return cond+2;
};

function func2() {
   return cond-2;  
};
function getCondition(cond,func1,func2) {
   
   if(cond === 2) {
   return console.log(func1());
   }  else {
   return console.log(func2());
   }
};

getCondition(cond,func1,func2);

/**
 * Задание 5
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание, результат должен выглядеть примерно так
 * let sub = substract(a)(b) // a - b
 */

function getSub(a){
   return function getElb(b){
      return function getElc(c) {
         return function getEld(d){
            return console.log(a - b - c - d); 
         };
      };
   };
};

getSub(15)(13)(14)(1);

getSub(22)(5)(2)(13);
