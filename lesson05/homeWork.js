/**
 * Домашнее задание к занятию 5
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson05. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * ВНИМАНИЕ!
 * Здесь некоторые задания будут похожи на задания к урокам 3 и 4. Во всех заданиях
 * использовать только методы итерирования по масссиву(forEach, map, filter и тд)
 */

/**
 * Задание 0
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
let arrFirst = [1,1,242,"Mam",424,1,true,4,"Mam",242,44,24,44,true,242];
let arrWithoutDup = arrFirst.filter((element, index) => index === arrFirst.indexOf(element));
console.log(arrWithoutDup);
/**
 * Задание 1
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
let arrOne = [31, "string", true, 767, 20],
    arrTwo = ["string", 242, 42, 20],
    mostArr;
if (arrOne.length > arrTwo.length) { mostArr = [...arrOne] } else {mostArr = [...arrTwo]}; 
let arr3 = mostArr.reduce((acum, value, index) => acum = [...acum,(value + arrTwo[index] || value)]
,[]);
console.log(arr3);
/**
 * Задание 2
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
    if (total[element] === 2) copy++;
  } 
  return total;
  },{});
  console.log(copy);
/**
 * Задание 3
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */
let arrayNumb = [1,1,2,2,3,3,4,4,5];
let arrayNumbNew = arrayNumb.reduce((acum,elem,index,array) => {
 if (array[index]%2 === 0 && array[index+1]%2 === 0){
   acum += array[index] + "->";
 } else if (array[index]%2 > 0 && array[index+1]%2 > 0){
   acum += array[index] + ":"; 
 } else {acum += array[index] + ' '}
 return acum;
},'');
console.log(arrayNumbNew);
/**
 * Задание 4
 * Создайте массив из 5 чисел и найдите наибольшее число и выведите его в консоль.
 */
let arrFirst = [2000,20,1123,150,0];
let  arrWithoutDup = arrFirst
.reduce((total,element) => {
 if (element > total){
 total = 0;
 total += element;
 }
return total;
},0);
console.log(arrWithoutDup);
/**
 * Задание 5
 * Переписать сортировку позырьком, используюя методы итерирования по массиву.
 * код сортировки находится по пути lesson04/index.js
 */
let arr = [41,42,2424,12,2];
let arrDup = arr
.map((element,index,arrayElem) => arrayElem)
.reduce((acum, element, index, arrayElem) => {
  element.forEach((item, i) => {
    if (item > element[i + 1]) {
      let temp = item;
      element[i] = element[i + 1];
      element[i + 1] = temp;
    }
  });
  acum += element + ' ';
  return acum;
},[]);
console.log(arrDup);
/**
 * Задание 6
 * Написать код, который заменит регистр каждого символа на противоположны.
 * Например 'Hello world' -> 'hELLO WORLD'
 */
let arrStr = "Hello world";
arrStr = [...arrStr];
let newArrStr = [];
 arrStr.forEach((elem, index, array) => {
 if (array[index] === array[index].toLowerCase()){
  array[index] = array[index].toUpperCase();
 }
 else if (array[index] === array[index].toUpperCase()){
  array[index] = array[index].toLowerCase();
 }
 newArrStr.push(array[index]);
})
console.log(newArrStr.join(''));
/**
 * Задание 7
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
let arrOne = [31, 41, 1344, 767, 20,4234],
    arrTwo = [5235, 242, 5242, 24, 144];
    mostArr;
if (arrOne.length > arrTwo.length) { mostArr = [...arrOne] } else {mostArr = [...arrTwo]}; 
let arr3 = mostArr.reduce((acum, value, index) => {
    return acum = [...acum,(value - arrTwo[index] || value)]
},[]);
console.log(arr3);
