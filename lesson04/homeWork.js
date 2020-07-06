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
/* let wideArr = [1,1,242,"Mam",424,1,true,4,"Mam",423,44,24,44,true,4242],
arrNew = [];
for (i = 0; i < wideArr.length;i++){ 
 for (j = 0; j < wideArr.length;j++){
    let temp;
    temp = i + (j + 1);
    if (wideArr[i] === wideArr[temp]){
     wideArr.splice(temp, 1);
    }
 }
}
console.log(wideArr); */

//secondDesicion

let arrayFirst = [1,1,242,"Mam",424,1,true,4,"Mam",423,44,24,44,true,4242],
arraySecondNew = [];
for (i = 0; i <= arrayFirst.length - 1;i++){ 
 for (j = 0; j <= arrayFirst.length - 1;j++){
    if (arrayFirst[i] === arrayFirst[j] && i != j){
        arrayFirst[j] = 'dublicate';
    }
 }
 if (arrayFirst[i] != 'dublicate'){
  arraySecondNew.push(arrayFirst[i]);
}
}
console.log(arraySecondNew);

/**
 * 
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let arrOne = [31, "string", true, 767, 0],
    arrTwo = ["string", 242, 42, false],
    moreLong,
    arrFinal = [];

if (arrOne.length > arrTwo.length){
 moreLong = arrOne.length;
} else {
 moreLong = arrTwo.length;
}

for (i = 0; i < moreLong; i++){
 if (arrOne[i] === undefined && typeof(arrTwo[i]) === 'number'){
   arrOne.push(0);
 } else if (arrOne[i] === undefined && typeof(arrTwo[i]) !== 'number'){
   arrOne.push('');
 }
 if (arrTwo[i] === undefined && typeof(arrOne[i]) === 'number'){
  arrTwo.push(0);
} else if (arrTwo[i] === undefined && typeof(arrOne[i]) !== 'number'){
  arrTwo.push('');
}
 arrFinal.push(arrTwo[i] + arrOne[i]);
}
console.log(arrFinal);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
let arrDifMean = [1,1,242,"Mam",424,1,true,4,"Mam",242,44,24,44,true,4242],
objDifMean = {},
result = 0,
count;

for (i = 0; i <= arrDifMean.length-1;i++){ 
 count = 0;
 for (j = 0; j <= arrDifMean.length-1;j++){
    if (arrDifMean[i] === arrDifMean[j] && i != j){
      count++; // i = 0 , count = 2;
    }
 }
 objDifMean[arrDifMean[i]] = count;
}
console.log(objDifMean);

for (key in objDifMean){
  if (objDifMean[key] > 0){
    result++;
  }
}
console.log(result);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let arrayNum = [1, 2, 3],
    arrayNum2 = arrayNum.slice().reverse();
console.log(arrayNum2);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

let str = prompt('Полиндром?', ''),
    createArr = str.split(''), // разделить на символы
    reversedArr = createArr.slice().reverse(),// собрать массив и реверс
    reversedStr = reversedArr.join(''); // опять перевести в строку
if (str.toLowerCase() === reversedStr.toLowerCase()){
  alert('Полиндром detected');
} else {
  alert('Полиндром is not detected');
}