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

 /* почему при вызове функции return отдаёт undef???,но фунция отрабатывает,
 пробовал в return влаживать условие, всё ровно помимо результата есть undef*/

function getFunction(condition, trueFunc, falseFunc) {
    trueFunc = () => console.log("Hello!");
    falseFunc = () => console.log("Goodbay!");
    condition ? trueFunc() : falseFunc();
}  
console.log(getFunction(3 < 1)); 

/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */


function compareArr(firstArr, secondArr) {
    if(firstArr.join('') === secondArr.join('')) {
        return true;} else {return false;}
    }
  
  console.log(compareArr([1, 2, 3],[1, 2, 3]));

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

let call = 0;

function counter() {
   call++;
   callSquare = (call ** 2);
   console.log(callSquare);
}

counter();
counter();
counter();

/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

function calcMillisecond() {
    let today = new Date();
    let todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return today - todayStart;
 }
 
 console.log(calcMillisecond());

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function calcSum(number = 2021) {
    let numberStr = String(number);
    let numberArr = numberStr.split('');
    let result = numberArr.reduce((sum, current) => sum + current, 0)
    return result;
 }
 
 console.log(calcSum(1111));

/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

function divide(arr, firstLengh, secondLengh) {
    let newArr = [];
    let firstNewArr = arr.slice(0, firstLengh);
    let secondNewArr = arr.slice(firstLengh, firstLengh+secondLengh);    
    newArr.splice(0, 0, firstNewArr, secondNewArr);
    return newArr;
 }

 console.log(divide([1,2,3,4,5],2,3));

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

let results = [false, undefined, '', 0, null, 1].filter(item => 
       item !== false 
    && item !== 0 
    && item !== null 
    && item !== "" 
    && item !== undefined);
        
console.log(results)

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

function findElemOfArrs(...arrays) {
    let result = [];
          for(let i = 0; i < arrays.length; i++) {
              for(let j = 0; j < arrays[0].length; j++) {
                // console.log(arrays[0][j], arrays[i+1][j]);
                if(arrays[0][j] === arrays[i+1][j]) {return result.push(arrays[0][j])}
              }
          }
          return result;
          
  } 
  
  console.log(findElemOfArrs([1, 2, 3], [1, 3, 4], [1, 2, 5])); // не могу придумать алгоритм для этого пока что, если придумаю перезалью


