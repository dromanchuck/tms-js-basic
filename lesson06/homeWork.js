/**
 * Задания на методы массивов
 */

/**
 * Задание 0
 * Создать массив из 5 чисел. Необходимо вывести числа через консоль(Используем forEach)
 */

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function (elem) {
  console.log(elem);
});

/**
 * Задание 1
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9]. (Используем map).
 */

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.map(function (elem) {
  //return elem*elem;
  // return elem ** 2;
  return Math.pow(elem, 2);
});

console.log(newArr);

/**
 * Задание 2
 * Создать массив из 15 чисел. Необходимо создать новый массив, в котором будут убраны все четные числа.
 * Например: [1,2,3] -> [1,3]. (Используем filter).
 */
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let newArr = arr.filter(function (elem) {
  if (elem % 2 === 0) {
    return false;
  }

  return true;
});

console.log(newArr);

/**
 * Задание 3
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

let arr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
];

let newArr = arr.reduce((acc, current) => {
  acc += current;
  return acc;
}, 0);

console.log(newArr);

/**
 * Задания на функции
 */

/**
 * Задание 0
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

function findIndexFromArr(arr, num) {
  let index = arr.reduce((acc, current, currentIndex) => {
    if (acc !== -1) {
      return acc;
    }

    if (current === num) {
      return currentIndex;
    }
  }, -1);

  return index;
}

let index = findIndexFromArr([1, 2, 3, 4, 5], 3);
let secondIndex = findIndexFromArr([1, 2, 3, 4, 5], 10);

console.log(index, secondIndex);

/**
 * Задание 1
 *
 * Написать функцию, которая принимает 2 числа и возвращает их сумму.
 */

let add = (a, b) => {
  return a + b;
};

let sum = add(1, 2);

/**
 * Задание 2
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort.
 */

let sortArr = (arr) => {
  return arr.sort();
};

let sortedArr = sortArr([9, 8, 6, 7, 5, 4, 3, 2, 1]);

let sortArr = (arr) => {
  return arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  });
};

let sortedArr = sortArr([9, 8, 6, 7, 32, 23, 5, 4, 3, 2, 1]);
