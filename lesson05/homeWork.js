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
    ex0Arr.forEach(function(innerItem, innerIndex) {
        if(outerIndex !== innerIndex && outerItem === innerItem) {
            innerItem = 'dublicate';
        }
    });
    if (outerItem !== "dublicate") {
    uniq.push(outerItem);
    };
});
console.log(uniq);

//second solution
let ex0Arr = [1,2,3,4,5,6,2,8,9,5,11,2,13,3,5];
let uniq = ex0Arr.filter((element,index) => index === ex0Arr.includes(element));
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

//first solution
let ex1ArrOne = [1,2,3],
    ex1ArrTwo = [32,42,12,53,342,2];
let result1Arr = ex1ArrTwo.map((item, index) => {
    if(!isNaN(ex1ArrTwo[index])) return item;
    return item + ex1ArrOne[index];    
});
console.log(result1Arr);

//second solution
let ex1ArrOne = [1,2,3],
    ex1ArrTwo = [32,42,12,53,342,2];
let result1Arr = ex1ArrTwo.reduce((acc, curr, i) => acc.concat(ex1ArrOne[i] + curr || curr), []);
console.log(result1Arr);

/**
 * Задание 2
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
/*
let ex2Arr = [1,2,3,4,5,6,2,8,9,5,11,2,13,33,15];

let sumOfElements = ex2Arr.reduce(function(){

});

console.log(sumOfElements);
*/
/**
 * Задание 3
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

/**
 * Задание 4
 * Создайте массив из 5 чисел и найдите наибольшее число и выведите его в консоль.
 */
/*let ex4Arr = [1,2,3,4,5];

*/
/**
 * Задание 5
 * Переписать сортировку позырьком, используюя методы итерирования по массиву.
 * код сортировки находится по пути lesson04/index.js
 */

/**
 * Задание 6
 * Написать код, который заменит регистр каждого символа на противоположны.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

/**
 * Задание 7
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

let ex7ArrOne = [1,2,3],
    ex7ArrTwo = [32,42,12,53,342,2],
    lengthArr = ex1ArrOne.length > ex1ArrTwo.length ? ex1ArrOne.length : ex1ArrTwo.length;

let resultArr = ;