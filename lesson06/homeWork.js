/**
 * Домашнее задание к занятию 6
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson05.
 * Например: dmitryR/lesson06. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Написать функцию, которая принимает первым аргументом условие,
 * вторым и третьим аргументом функции(функции могут делать все что угодно на ваш выбор).
 * Внутри если условие равно true, то выполнить первую функцию, если false, то выполнить вторую функцию.
 */

const isTrue = (condition, firstFunction, secondFunction) => {
  if (condition) {
    firstFunction()
  } else if (!condition) {
    secondFunction()
  }
}

function firstFunction() {
  console.log('Я первая функция!')
}

function secondFunction() {
  console.log('Я вторая функция!')
}

isTrue(true == false, firstFunction, secondFunction)

/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

let arr = [1, 2, 3, 4, 5, 8, 10]
let array = [1, 2, 3, 4, 5, 6, 10]

const equalArray = (firstArray, secondArray) => {
  let res = false
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        res = true
      } else {
        return false
      }
    }
  }
  return res
}
console.log(equalArray(arr, array))

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */

function countCalls() {
  let count = 0
  count++
  return function () {
    return (count++) ** 2
  }
}
let result = countCalls()

console.log(result())
console.log(result())
console.log(result())
console.log(result())
console.log(result())

/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

let start = new Date(2021, 0, 31)
let res = new Date() - start
console.log(res)

/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function digit(number) {
  let num = '' + number
  let sum = 0

  for (let i = 0; i < num.length; i++) {
    sum += +num[i]
  }

  return sum
}

console.log(digit(2021))

/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

const splitArray = (array, currentValue) => {
  const res = array.reduce(
    (acc, value) => {
      if (acc[acc.length - 1].length === currentValue) {
        acc.push([])
      }

      acc[acc.length - 1].push(value)
      return acc
    },
    [[]]
  )
  return res
}

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 10, 51, 9, 4, 10, 3], 5))

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

let array7 = []

const clearArray = (array) => {
  for (let elem of array) {
    if (Boolean(elem) != false) {
      array7.push(elem)
    }
  }
  return array7
}

console.log(
  clearArray([1, 2, 3, null, undefined, '', 0, 51, false, 100, 3, 2, 1, null])
)

/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

function equalNumberInArray(...args) {
  let array = args.reduce((acc, currentValue) => {
    acc.push(currentValue)
    return acc
  }, [])

  let arr = array.reduce((acc, currentValue) =>
    acc.filter((elem) => currentValue.includes(elem))
  )

  return arr
}

console.log(equalNumberInArray([1, 2, 3], [2, 3], [2, 3, 5]))
