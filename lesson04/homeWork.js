'use strict'
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

let firstArr = [1,'12','leather',5,'son'];
let cloneArr = firstArr.slice();
console.log(cloneArr);

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

let exOneArr = [12,'123','father',[1,2,3],{one:123,two:234}];
let exOneArrStr1 = exOneArr.join(",");
let exOneArrStr2 = String(exOneArr);
console.log(exOneArrStr1);
console.log(exOneArrStr2);

let exOneArrStr3 = '';
for(let i = 0; i <=exOneArr.length - 1; i++) {
    if( i === exOneArr.length - 1) {
    exOneArrStr3 += exOneArr[i];
    } else{
        exOneArrStr3+=exOneArr[i] + ',';
    }
};
console.log(exOneArrStr3);

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let exTwoArr = [1,2,3,4,5,2,12,3,2,32,3,1,4,5,3];
let exTwoArruniq = [];

for(let i=0; i <= exTwoArr.length-1; i++) {
    for(let j=0; j <= exTwoArr.length-1; j++){
        if(i !== j && exTwoArr[i] === exTwoArr[j]){
            exTwoArr[j] = 'duplicate';
        }
    }   
    if(exTwoArr[i] != 'duplicate') {
        exTwoArruniq.push(exTwoArr[i]);
    }
};
console.log(exTwoArruniq);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let exThreeArrOne = [1,2,3],
    exThreeArrTwo = [32,42,12,53,342,2],
    exThreeArrResult = [];

let currentArr = exThreeArrOne > exThreeArrTwo ? exThreeArrOne : exThreeArrTwo;
for(let i=0; i <=currentArr.length -1; i++){
    let a = (exThreeArrOne[i] === undefined) ? 0 : exThreeArrOne[i];
    let b = exThreeArrTwo[i];
    exThreeArrResult[i] = a + b; 
}
console.log(exThreeArrResult);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

let exFourArr = [1,2,3,4,5,2,12,3,2,32,3,1,4,5,3];
let exFourArrResult = {};
let resultCount = 0;

for(let i=0; i <= exFourArr.length-1; i++) {
    let count = 0;
    for(let j=0; j <= exFourArr.length-1; j++){
        if(i !== j && exFourArr[i] === exFourArr[j]){
            count++;
        }
    }   
    exFourArrResult[exFourArr[i]] = count;
};

for(let key in exFourArrResult){
    if(exFourArrResult[key] > 0 ){
    resultCount++;  
    }
}
console.log(resultCount);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let exFiveArr = [1,5,35,'leather'],
    reverse = exFiveArr.slice().reverse();

console.log(reverse);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

let str = prompt('Введите слово'),
  strReverse = str.split('').reverse().join('');
if (strReverse === str) {
    console.log(`Введённое слово является полиндромом`);
    } else {
    console.log(`Введённое слов не является полиндромом`)
};

let str2 = prompt('Введите слово'),
    resultEx6 = '';
for(let i=0; i < str.length; i++){
    if(str[i] === str[str.length - 1 - i]){
        resultEx6 = 'Введённое слово является полиндромом';
    } else {
        resultEx6 = 'Введённое слов не является полиндромом';
    }
}
console.log(resultEx6);
