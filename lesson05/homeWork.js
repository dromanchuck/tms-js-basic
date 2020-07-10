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
let arr = [1, 2, 3, 4, 5, 4, 4, 2, 5, 5, 5, 3];

let newArr = arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
});
console.log(newArr);

/**
 * Задание 1
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
let arr = [1, 2, 3],
    arr2 = [1, 2, 3, 4, 5];

let currentArr = arr.length > arr2.length ? arr : arr2;

let sum = arr.map(function (num, idx){
    const a = arr[idx] === undefined ? 0 : arr[idx];
    const b = arr2[idx] === undefined ? 0 : arr2[idx];
    return a + b;
});
console.log(sum);

/**
 * Задание 2
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
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
let arr = [1, 2, 3, 4, 5];
let  newarr = arr.reduce((total,element) => {
    if (element > total){
      total = element;
    }
    return total;
},0);
console.log(newarr);

/**
 * Задание 5
 * Переписать сортировку позырьком, используюя методы итерирования по массиву.
 * код сортировки находится по пути lesson04/index.js
 */
let arr = [10, 38, 48, 22];
arr.forEach(function(element, i){
  arr.forEach(function(item, j){
    if (arr[j] > arr[j + 1]){

      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  });
});
console.log(arr);

/**
 * Задание 6
 * Написать код, который заменит регистр каждого символа на противоположны.
 * Например 'Hello world' -> 'hELLO WORLD'
 */
let arr = "Hello world";
let arrStr = [...arr];
let newArr = [];
arrStr.forEach((elem, i, array) => {
    if (array[i] === array[i].toLowerCase()){
      array[i] = array[i].toUpperCase();
    }else if (array[i] === array[i].toUpperCase()){
      array[i] = array[i].toLowerCase();
    }
    newArr.push(array[i]);
})
console.log(newArr.join(''));

/**
 * Задание 7
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
let arr = [10, 23, 38],
    arr2 = [1, 2, 3, 4, 5];

let currentArr = arr.length > arr2.length ? arr : arr2;

let difference = currentArr.map(function (num, idx) {
    const a = arr[idx] === undefined ? 0 : arr[idx];
    const b = arr2[idx] === undefined ? 0 : arr2[idx];
    return a - b;
  });
console.log(difference);