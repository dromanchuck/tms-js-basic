/**
 * Домашнее задание к занятию 5
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson05. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1 
 * Написать сортировку позырьком, от большего значения к меньшему.
 * код сортировки от меньшего к большему находится по пути lesson04/index.js (использовать любые циклы кромe for)
 */

//  let arrayBubble = [1,5,12,-5,4];

// function bubbleSort(arr) {
//     let swapped;
  
//     do {
//       swapped = false;
//       console.log(arrayBubble);
//       arr.forEach((item, index) => {
//         if (item > arr[index + 1]) {
//           let temp = item;
//           arr[index] = arr[index + 1];
//           arr[index + 1] = temp;
//           swapped = true;
//         }
//       })
//     } while (swapped);
//   }

//   console.log(bubbleSort(arrayBubble));


/**
 * Задание 2 
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

//  let array1 = [1,2,3,4,5,6,7,8,9,10];
 
//  let array2 = array1.map(function(num) {
//     return num = num ** 2;
//  })

//  console.log(array2);

/** 
 * Задание 3 
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */

// let array = [
//     {name: 'Gena', gender: 'male'},
//     {name: 'Petr', gender: 'male'},
//     {name: 'Vika', gender: 'female'},
//     {name: 'Ira', gender: 'female'},
//     {name: 'Gogi', gender: 'male'},
// ];

// let arrayMale= [];
// let arrayFemale = [];

// function genderSorting(arr){
//     array.reduce(function(acc, person) {
//     if(person.gender === 'male') {
//         arrayMale.push(person);
//     } else if (person.gender === 'female') {
//         arrayFemale.push(person);
//     }
// }, [])
// console.log(arrayMale);
// console.log(arrayFemale);
// }

// console.log(genderSorting(array));

/**
 * Задание 4 
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

//  let array = [14, 21, 190, 71];
// let number = 71;

// function returnIndex(arr, anyNumber) {
//   return array.findIndex((item) => item === anyNumber);
// }

// console.log(returnIndex(array, number));

/**
 * Задание 5 
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */

//  let array = [1,3,6,2,4,5,-1,2.5];

// array.sort(function(a, b) {
//     return a - b;
// })

// console.log(array);

/**
 * Задание 6 
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */

// function sum() {
//     let a = 1;
//     if(arguments.length === 0) {
//         return 0;
//     }
//     for (let i = 0; i < arguments.length; i++) {
//         a += arguments[i];
//     }
//     return a
//   }

//   console.log(sum(1,2,3,4,5,6,7,8));
