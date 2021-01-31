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
function showFunc(condition){
    function showNumber() {
        console.log(15)
    }
    function showStr() {
        console.log('Brrrrrrr')
    }
    if(condition === true){
        showNumber();
    }else{
        showStr();
    }
}
console.log(showFunc(false));
/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */
function calcArray(array1,array2) {
    for(let i = 0; i< array1.length; i++){
      for(let j = 0; j < array2.length; j++){
          if(array1[i] === array2[j]){
              return true;
          }else{
              return false;
          }
        }
      } 
  }
  console.log(calcArray([2,5,8,7],[2,5,8,7]));
/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */
let counter = 0;
function createCounter() {
    counter ++;
    console.log(counter ** 2);
}
createCounter();
createCounter();
createCounter();
/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */
function showDate(){
    let today = new Date();
    let newtoday = new Date(today.getTime());
    newtoday.setHours(0,0);
    let diff = today - newtoday;
    console.log(diff);
  }
  showDate();
/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */
function calcSum(number,index) {
    for(let i = 0; i < number; i++){
        number[i] += index;
    }
}
console.log(calcSum(2021));
/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */
function getArr(array,beginlength,lastlength) {
    let newArray =[];
    let begin = array.slice(0, beginlength);
    let last = array.slice(beginlength, beginlength+lastlength);
    newArray.splice(0,0,begin,last);
    return newArray;
  }
  console.log(getArr([1,2,3,4,5,6,7,8],3,2));
/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */
function delUnwantedValues(array) {
    return array.filter((item) => item);
  }
console.log(delUnwantedValues([1,2,3,'','what',undefined, 0, false, true]));
/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */
