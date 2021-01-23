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
const array = [1, 5, 2, 3, 5, 5, 6, 15, 20];
console.log(array.join(','));
console.log(String(array));


/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */
function removeDublicate(arr) {
  return arr.filter((value, index) => index === indexOf(value))
}
console.log('task2: ' + removeDublicate([1, 5, 5, 6, 8, 9, 4, 1, 2, 3, 5, 5, 6, 15, 20]))

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */
const arr111 = [8, 95, 55, 20, 63, 5]
const arr222 = [5, 90, 50, 15]
function sum(arr1, arr2) {
  return arr1.map((el, i) => {
    if (arr2[i]) {
      return el + arr2[i]
    } else {
      return el
    }
  });
}
console.log('task 3: ' + sum(arr111, arr222))

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */
const arrayWithDublicates = [1, 5, 5, 6, 8, 9, 4, 1, 2, 3, 5, 5, 6, 15, 20, 6];
function countDublicates(arr) {
  return arr.reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 1
    } else {
      acc[value]++
    }
    return acc
  }, {})
}
console.log(countDublicates(arrayWithDublicates))

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */
const initArray = [1, 2, 3, 4, 5, 6]
const newArr = initArray.reverse();
console.log(newArr);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */
function isPalindrom(str) {
  return str.split('').reverse().join('') === str
}
console.log('task 6:' + isPalindrom('ШАЛАШ'))

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */
function changeCase(str) {
  return str
    .split('')
    .map((el) => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase())
    .join('')
}
console.log('task7: ' + changeCase('Hello world aaaaBBBBBB'))

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */
const arr11 = [8, 95, 55, 20, 63, 5]
const arr22 = [5, 90, 50, 15]
function difference(arr1, arr2) {
  const result = arr1.map((el, i) => el - arr2[i]);
  return arr1.length > arr2.length ? result.slice(0, arr2.length - arr1.length) : result;
}
console.log('task 8: ' + difference(arr11, arr22))

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */
function addСolon(number) {
  return number
    .toString()
    .split('')
    .map((el, index, arr) => {
      if (arr[index] % 2 !== 0 && arr[index + 1] % 2 !== 0 && arr[index + 1]) {
        return arr[index] += ':';
      }
      return el
    })
    .join('')
}
console.log('task9: ' + addСolon(655));

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */
const array10 = [5, 63, 85, 74, -96, 20, 30, 74, 55, -48, -6, 0,]
array10.reduce((acc, value) => acc + value, 0)
