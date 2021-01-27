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

let arr = [4, 7, -3, 10, -2, 5, 13];

function bubbleSort(arr) {
    let bubble;
  
    do {
      bubble = false;
      arr.forEach((item, index) => {
        if (item > arr[index + 1]) {
          let temp = item;
          arr[index] = arr[index + 1];
          arr[index + 1] = temp;
          bubble = true;
        }
      })
    } while (bubble);
  }

  bubbleSort(arr);

  console.log(arr);



/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

 let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(arr1);

 function double(arr2) {
     return arr2.map((el) => el ** 2);
 };


console.log(double(arr1));

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */

 let arr3 = [
     { name : 'Jack', sex : 'male' },
     { name : 'Mary', sex : 'female' },
     { name : 'Mike', sex : 'male' },
 ];

 let arrMale = [];
 let arrFemale = [];

 function sexSort(arr) {
     arr3.reduce(function(acc, el) {
         if (el.sex === 'male') {
             arrMale.push(el)
         } else if (el.sex === 'female') {
             arrFemale.push(el)
         }
     }, []);
 }

 sexSort(arr3);

 console.log(arrMale);
 console.log(arrFemale);

/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

 let arr4 = [6, 55, 'b', 6 + 5, 'c'];
 let value = 55;

 function findIndex(arr, val){
     return arr.findIndex((el) => el === val)
 };

 console.log(findIndex(arr4, value));

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */

 let unsortedArr = [6, -3, 55, 87, 2, 3, 47, 11];

 console.log(unsortedArr);

 let sortedArr = unsortedArr.sort(function(a,b){
     return a - b
 });

 console.log(sortedArr);

/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */


 function sum(...num){
     return num.reduce((acc, el) => acc + el, 0)
 };

 console.log(sum(5, -3, 7, 77, 39, 11));
