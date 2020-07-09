'use strict'
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

// first solution
let ex0Arr = [1,2,3,4,5,6,2,8,9,5,11,2,13,3,5];
let uniq = [];
ex0Arr.forEach(function(outerItem, outerIndex) {
    ex0Arr.forEach(function(innerItem, innerIndex,array) {
        if(outerIndex !== innerIndex && outerItem === innerItem) {
            array[innerIndex] = 'dublicate';
        }
    });
    if (outerItem !== "dublicate") {
    uniq.push(outerItem);
    };
});
console.log(uniq);

//second solution
let ex0Arr = [1,2,3,4,5,6,2,8,9,5,11,2,13,3,5];
let uniq = ex0Arr.filter((element,index) => index === ex0Arr.indexOf(element));
console.log(uniq);

//third solution
let ex0Arr = [1,2,3,4,5,6,2,8,9,5,11,2,13,3,5];
let uniq = [];
ex0Arr.forEach(element => {
    if (!uniq.includes(element)) {
        uniq.push(element);
    }
});
console.log(uniq);

/**
 * Задание 1
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

///first solution
let ex1ArrOne = [1,2,3],
    ex1ArrTwo = [32,42,12,53,342,2];
let result1Arr = ex1ArrTwo.map((item, index) => {
    if(ex1ArrTwo[index] === undefined) return item;
    return item + ex1ArrOne[index]; 
});
console.log(result1Arr);

//second solution
let ex1ArrOne = [1,2,3],
    ex1ArrTwo = [32,42,12,53,342,2];
let result1Arr = ex1ArrTwo.reduce((acc, curr, i) => {return acc.concat(ex1ArrOne[i] + curr || curr)}, []);
console.log(result1Arr);

/**
 * Задание 2
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

///first solution
let ex2Arr = /* [1,2,3,4,5,6,2,8,9,5,11,2,13,33,15]; */ [1,1,242,"Mam",424,1,true,4,"Mam",242,44,24,44,true,242];
let uniq = ex2Arr.filter((element,index) => index !== ex2Arr.indexOf(element));
console.log(uniq);
let sumOfElements = uniq.length;
console.log(sumOfElements);

/**
 * Задание 3
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

///fisrt solution
let ex3Arr = [556, 566, 655, 422, 333, 65645];
let result3Arr = ex3Arr.reduce((acum,elem,index,array) => {
 if (array[index] % 2 === 0 && array[index+1] % 2 === 0){
   acum += array[index] + "->";
 } else if (array[index] % 2 > 0 && array[index+1] % 2 > 0){
   acum += array[index] + ":"; 
 } else {acum += array[index] + ' '}
 return acum;   
},'');
console.log(result3Arr);

/**
 * Задание 4
 * Создайте массив из 5 чисел и найдите наибольшее число и выведите его в консоль.
 */
///first solution
let ex4Arr = [1,2,3,4,5];

let result = ex4Arr.filter((element,index,arr) => arr[index] > arr);
console.log(result); /* возможно ли решить так ?  */

///second solution
let ex4Arr = [2000,20,1123,150,0];
let  result = ex4Arr
.reduce((total,element) => {
 if (element > total){
 total = 0;
 total += element;
 }
return total;
},0);
console.log(result);


/**
 * Задание 5
 * Переписать сортировку позырьком, используюя методы итерирования по массиву.
 * код сортировки находится по пути lesson04/index.js
 */

///fisrt solution 
let array = [19, 87, 765, 459, 12, -123];

array.forEach (function(outerElement,outerIndex,outerArr) {
  array.forEach (function(innerElement,innerIndex,innerArr) {
    if (innerArr[innerIndex] > innerArr[innerIndex + 1]) {
    
      let temp = innerArr[innerIndex + 1];
      innerArr[innerIndex + 1] = innerArr[innerIndex];
      innerArr[innerIndex] = temp;
    }
    console.log(innerArr);
  });
});

///second solution
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

///first solution
let stringEx6 = prompt('Введите текст'),
    ex6Arr = stringEx6.split("");
let  result = [];
ex6Arr.forEach(function(el,i,arr) {
    let upper = 'АБВГДЕЁЖЗКИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let lower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        if(upper.includes(arr[i])) {
        result.push(arr[i].toLowerCase());
        }
        else if(lower.includes(arr[i])) {
        result.push(arr[i].toUpperCase());
        }
        else {
            result.push(arr[i]);
        }
    return result.join('');
});

let getResult = result.toString('');
console.log(getResult);


///second solution
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

let ex1ArrOne = [1,2,3],
    ex1ArrTwo = [32,42,12,53,342,2];
let result1Arr = ex1ArrTwo.reduce((acc, curr, i) => acc = [...acc,(curr - ex1ArrOne[i] || curr)], []); /*or --- acc.concat(curr - ex1ArrOne[i] || curr) */
console.log(result1Arr);
