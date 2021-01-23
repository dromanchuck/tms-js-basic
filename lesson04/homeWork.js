/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

let array = ['L', 'o', 'w', 'l', 'y'],
    str = array.join(''),
    sumStr = '';

    for(let i = 0; i < array.length; i++) {
        sumStr += array[i];
    };

console.log(str);
console.log(sumStr);


/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

// ['L', 'o', 'w', 'L', 'o', 'w', 'L', 'o', 'w', 'L', 'o', 'w', 'L', 'o', 'w']

let array2 = ['L', 'o', 'w', 'L', 'o', 'w', 'L', 'o', 'w'], // работает только до 9 значений массива, при увеличении числа элементов, появляется не до обработка, по проверке на длинну, возвращается верное значение.
    log = '';

for(let i = 0; i < array2.length; i++) {
    for(let j = 0; j < array2.length; j++) {
        if(array2[i] === array2[j+1]) {
            log = array2[j+1];
            array2.splice(array2[j+1],1);
            array2.splice(array2.length,0,log);
            array2.pop();
        }
    }  
}
console.log(array2); 

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let arr = [1, 5, 4],
    arr2 = [4, 3];
 
var arr3 = arr.map(function(value, index){
  if(arr < arr2) { 
      arr2.push(0)};
  return value + arr2[index] })

console.log(arr3);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

let array5 = [1, 2, 3, 1, 2, 3],
    array6 = [],
    repeat = 0;

function calcRepeat(array) {
    for(let i = 0; i < array.length; i++) {
        if(!array6.includes(array[i])) {
            array6.push(array[i])
        } else { repeat += 1;}
    }
    return repeat
}
console.log(calcRepeat(array5));

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let array6 = [1, 2, 3, 4, 5],
    array7 = [];
    
    array7 = array6.reverse();
    console.log(array7);    

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

function checkPalindrome(word) {
    let wordReverse = word.split('').reverse().join('');
    if(word == wordReverse) {
        return 'yes';
    } else { return 'no';}
}
console.log(checkPalindrome('РЕПЕР'));

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

function changeCase(str) {
    let newStr = '';
    let strConvertToArr = str.split('' && ' ');
      for(let i = 0; i < strConvertToArr.length; i++) {
          if(strConvertToArr[i] === strConvertToArr[i].toUpperCase()) {
              newStr += strConvertToArr[i].toLowerCase();
          } else {newStr += strConvertToArr[i].toUpperCase()}
      }
      return newStr;
  }
  console.log(changeCase('Hello world'));

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

let arr = [1, 5, 4],
arr2 = [4, 3];

var arr3 = arr.map(function(value, index){
if(arr < arr2) { 
  arr2.push(0)};
return value - arr2[index] })

console.log(arr3);

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

function findOdd(arr) {
    let newArr = [];
    let newArr2 = [];
    let first;
    let second;
    let third;
      
      for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
          first = arr.shift();
          newArr.push(first);
          second = newArr.join(',').split('');
          second.splice(1,0,':');
          third = second.join('')
          newArr2.push(third);
        } 
              
      }
      return newArr2
    }
    console.log(findOdd([111, 121, 110, 141])); //если получится доделать перезалью.

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
let result = sumArr.reduce((sum, current) => sum + current);

    console.log(result);