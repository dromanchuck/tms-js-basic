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
let Array = ['J','I',3,'B','A'];
Array = String(Array);
console.log(Array);

let arr =[1,2,3,4,5];
let str = arr.join(',');
console.log(str);


/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
function createDouble(arr1) {
    let result = [];
  
    for (let str of arr1) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  let strings = ['J','I',3,'B','A','J','I',3,'B','A','J','I',3,'B','A','J','I',3,'B','A','J','I',3,'B','A'];
  console.log( createDouble(strings) );
/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
function calcSum(){
let arr =[1,10,50,48,54];
let arr1 =[11,21,-3,4,-5,26,7];
let sum = arr.map(function(value, index){
      return value +arr1[index];
});
console.log(sum);
}
calcSum();


/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
function calcRepeat() {
    let arr = [1,2,3,4,5,10,2,4,6,7,8,9,5,100];
    let arr1 = arr.reduce((accumulator, value) => {
      if (!accumulator[value]) {
        accumulator[value] = 1;
      } else {
        accumulator[value]++;
      }
      return accumulator;
    }, {})
    console.log(arr1);
  }
  calcRepeat();
/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let arr5=[1,2,3];
arr5.reverse();
console.log(arr5);


/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */
function checkPalindrome() {
    let palindrom ='дед';
    let rev = palindrom.split('').reverse().join('');
    if(palindrom == rev) {
        return 'Это палиндром';
    } else { 
        return 'Это не палиндром';
    }
}
console.log(checkPalindrome());
/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */
function createCase(){
    let str='GooDbye mY frieNd';
    let len=str.length;
    let newStr ='';
    for (let i = 0; i < len; i++) {
        if (str[i] === str[i].toLowerCase()) {
          newStr += str[i].toUpperCase();
        } else {
          newStr += str[i].toLowerCase();
        }
      }
      console.log(newStr);
}
createCase();
/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
function calcDiff(){
let arr =[1,10,50,48,54];
let arr1 =[11,21,-3,4,-5,26,7];
let diff = arr.map(function(value, index){
      return value -arr1[index];
});
console.log(diff);
}
calcDiff();
/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */
function getRemain(){
    let arr = [23,5,58,25];
    let result ='';
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            result += arr[i];
        }else if(arr[i]%2 != 0){
            result += arr[i]+':';
        }
    }
    console.log(result);
}
getRemain();
/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
function sumElements(){
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);
}
sumElements();
