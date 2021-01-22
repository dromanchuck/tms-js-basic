/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

function task1_1(arr) {
  return arr.join();
}

function task1_2(arr) {
  return arr.reduce((str, el) => str + el + ',', '').slice(0, -1);
}

console.log('Task1_1:', task1_1([1, 2, 3, 4, 5]));
console.log('Task1_2:', task1_2([1, 2, 3, 4, 5]));

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

function task2(arr) {
  return arr.filter((el, index, arr) => {
    if (index === arr.lastIndexOf(el)) return el;
  });
}

console.log(
  'Task2:',
  task2([3, 6, 1, 9, 12, 6, 89, 74, 30, 74, 11, 9, 13, 15, 3])
);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

function task3(arr1, arr2) {
  let arrSum = arr1.map((el, index) =>
    arr2.length > index ? el + arr2[index] : el
  );
  if (arr2.length > arr1.length) {
    return arrSum.concat(arr2.slice(arr1.length));
  }

  return arrSum;
}

console.log('Task3:', task3([2, 3, 5], [7, 11, 13, 17, 23]));

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

function task4(arr) {
  let duplicates = 0;

  arr.map((el, index, arr) => {
    if (index !== arr.lastIndexOf(el)) duplicates++;
  });

  return duplicates;
}

console.log(
  'Task4:',
  task4([3, 6, 1, 9, 12, 6, 89, 74, 30, 74, 11, 9, 13, 15, 3])
);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

function task5(arr) {
  let arrReverse = [...arr].reverse();

  return arrReverse;
}

console.log('Task5:', task5([1, 2, 3]));

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

function task6(str) {
  return `${str}, это ${
    str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
      ? 'палиндром'
      : 'не палиндром'
  }`;
}

console.log('Task6:', task6('Шалаш'));

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

function task7(str) {
  let arr = str.split('');

  arr.forEach((el, index, arr) => {
    if (el === el.toLowerCase()) {
      arr[index] = el.toUpperCase();
    } else {
      arr[index] = el.toLowerCase();
    }
  });

  return arr.join('');
}

console.log('Task7:', task7('Hello world'));

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

function task8(arr1, arr2) {
  let arrDiff = arr1.map((el, index) =>
    arr2.length > index ? el - arr2[index] : el
  );

  if (arr2.length > arr1.length) {
    return arrDiff.concat(arr2.slice(arr1.length));
  }

  return arrDiff;
}

console.log('Task8:', task8([2, 3, 5], [7, 11, 13, 17]));

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

function task9(num) {
  let arr = num.toString().split('');

  arr.forEach((el, index, arr) => {
    if (arr[index] % 2 === 1 && arr[index + 1] % 2 === 1) arr[index] += ':';
  });

  return arr.join('');
}

console.log('Task9:', task9(556));

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

function task10(arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}

console.log(
  'Task10:',
  task10([
    3,
    6,
    1,
    9,
    12,
    6,
    89,
    74,
    30,
    74,
    11,
    9,
    13,
    15,
    3,
    -1,
    -4,
    -19,
    -2,
    -33,
  ])
);
