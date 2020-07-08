/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */

//first
let arr = [true, 65, 'Mission', 0.44];

let newArr = arr.map(person => person);
console.log(newArr);

//second
let arr = [true, 65, 'Mission', 0.44];

let newArr = arr.filter(person => true);
arr[1] = 40;
console.log(newArr, arr);
/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */
let arrTaskOne = ['high', 'parameter', 35, false],
    firstResult;
firstResult = arrTaskOne.reduce((total,element,index) => (index === arrTaskOne.length-1) ? total += element : (total += element + ', '),'');
console.log(firstResult);
/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */


//secondDesicion
let arrFirst = [1,1,242,"Mam",424,1,true,4,"Mam",242,44,24,44,true,242];

//first
let arrWithoutDup = arrFirst.filter((element, index) => index === arrFirst.indexOf(element));
console.log(arrWithoutDup);

//second
let arrWithoutDupRep = arrFirst.reduce((total, element) => {
   return total.includes(element) ? total : [...total, element];
},[])
console.log(arrWithoutDupRep);
/**
 * 
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let arrOne = [31, "string", true, 767, 20],
    arrTwo = ["string", 242, 42, 0];
let arr3 = arrOne.map((value, index) => { 
  if (arrTwo[index] === undefined && typeof value === 'string'){
    arrTwo[index] = '';
  } else if (arrTwo[index] === undefined && typeof value === 'number'){
    arrTwo[index] = 0;
  }
  return value + arrTwo[index]});
console.log(arr3);
/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arrFirst = [1,1,242,"Mam",1,1,true,4,"Mam",424,44,24,44,true,242],
    arrWithoutDup,
    copy = 0;
  arrWithoutDup = arrFirst
  .reduce((total,element) => {
  if (!total[element]){
    total[element] = 1;
  } else {
    total[element] = total[element] + 1;
  }
  return total;
  },{})

  for (key in arrWithoutDup){
    if (arrWithoutDup[key] > 1){
      copy++;
    }
  }
  console.log(copy);
/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let arrayNum = [1, 2, 3];
let newArrayNum = arrayNum.slice().reverse().map((element) =>{
  return element;
})
console.log(newArrayNum);

const myArray = ["a", "b", "c", "d", "e"];
const res = myArray.reduceRight((arr, element, index) => {
    console.log(element, index); // cчетчик элементов c обратной стороны
    return arr = [...arr, element]; //or (arr = arr.concat(element))
}, []);
console.log(res);
/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

let str = "Шалаш",
    createArr = str.split(''); // разделить на символы и создаст массив
let reversedArr = createArr.reduceRight((total,element) => {
  return total = total.concat(element);
},'');
if (str.toLowerCase() === reversedArr.toLowerCase()){
  console.log('Полиндром detected');
} else {
  console.log('Полиндром is not detected');
}