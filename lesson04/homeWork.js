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

let array = [1, 2, 3, 4, 5];
let resultArray = array.slice();
let resultArray1 = [];

console.log(resultArray);

for (let i = 0; i <= array.length - 1; i++) {
  resultArray1.push(array[i]);
}

console.log(resultArray1);

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

let array = [1, 2, 3, 4, 5];

let str = array.join();
let str1 = String(array);
let str2 = "";

for (let i = 0; i <= array.length - 1; i++) {
  if (i === array.length - 1) {
    str2 += array[i];
  } else {
    str2 += array[i] + ",";
  }
}

console.log(str2);

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let arr = [1, 2, 3, 4, 3, 5, 6, 7, 8, 9, 21, 1, 1, 0, 14];
let uniq = [];
console.log(arr);
for (let i = 0; i <= arr.length - 1; i++) {
  //arr[i]

  for (let j = arr.length - 1; j >= 0; j--) {
    if (i !== j && arr[i] === arr[j]) {
      arr[j] = "dublicate";
    }
  }

  if (arr[i] !== "dublicate") {
    uniq.push(arr[i]);
  }
}

console.log(uniq);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let arr1 = [12, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let result = [];

let currentArr = arr1.length > arr2.length ? arr1 : arr2;

for (let i = 0; i <= currentArr.length - 1; i++) {
  let a = Boolean(arr1[i]) ? arr1[i] : typeof arr1[i] === "string" ? "" : 0;
  let b = Boolean(arr2[i]) ? arr2[i] : typeof arr1[i] === "string" ? "" : 0;
  result[i] = a + b;
}

console.log(result);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

let arr = [1, 2, 3, 4, 5, 4, 2, 1, 1];
let result = {};
let resultCount = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  let count = 0;

  for (let j = arr.length - 1; j >= 0; j--) {
    if (i !== j && arr[i] === arr[j]) {
      count++;
    }
  }

  result[arr[i]] = count;
}

for (let key in result) {
  if (result[key] > 0) {
    resultCount++;
  }
}

console.log(resultCount);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let array = [1, 2, 3, 4, 5, 6];

let resultArray = array.slice().reverse();

console.log(array);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

//string.toUpperCase(); 'test' -> 'TEST'
//string.toLowerCase(); 'TeSt' -> 'test'

let str = prompt("Polindrom?", "test");
let arr = str.split("");
let reversedArr = arr.slice().reverse();
let reversedStr = reversedArr.join("");

if (str.toLowerCase() === reversedStr.toLowerCase()) {
  alert("Polindrom is detected");
} else {
  alert("Polindrom is not detected");
}
