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

let array10 = [1, 6, 3, 84, 14, 67, 35, 9, 7, 100, 101, 102, 103]
let temp

const boubleSort = (array) => {
  let i = 0
  while (i < array.length) {
    let j = 0
    while (j < array.length) {
      if (array[j + 1] > array[j]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
      j++
    }
    i++
  }
  return array
}
console.log(boubleSort(array10))

/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayExponentiation = array.map((elem) => {
  let numExp = elem ** 2
  return numExp
})

console.log(arrayExponentiation)

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */

let person = [
  {
    name: 'Gilbert',
    sex: 'male',
  },
  { name: 'Aliсe', sex: 'female' },
  { name: 'Adrian', sex: 'male' },
  { name: 'Adrian', sex: 'male' },
  { name: 'Adrian', sex: 'male' },
  { name: 'Kate', sex: 'female' },
  { name: 'Kate', sex: 'female' },
  { name: 'Kate', sex: 'female' },
]

let maleSex = []
let femaleSex = []

const sortSex = person.reduce(
  (acc, curentValue) => {
    if (curentValue.sex === 'female') {
      acc[0].push(curentValue)
    } else {
      acc[1].push(curentValue)
    }
    return acc
  },
  [[], []]
)
console.log(sortSex)

/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = 1

const euqalNum = (array, currentValue) => {
  let findInd = array.findIndex((elem) => elem === currentValue)
  return findInd
}

console.log(euqalNum(arr1, 11))

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */

const InsertionSort = (arr) => {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let v = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = v
  }
  return arr
}

console.log(InsertionSort([100, 59, 3, 45, 26, 84, 1]))

/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */

function sumNum(...args) {
  let result = 0
  for (let i = 0; i < args.length; i++) {
    result += args[i]
  }
  return result
}
console.log(sumNum(1, 5))
