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

let arr = [5, 3, 9, 78, 4]
let arr1 = ''

const sum = () => {
  for (let elem of arr) {
    console.log((arr1 += elem + ','))
  }
}

const sum1 = () => {
  let sum = arr.join()
  console.log(sum)
}

sum()
sum1()

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let array = [3, 3, 3, 8, 5, 1, 8, 8, 10, 15, 15]
console.log(array)

let newArray = new Set(array)
console.log(newArray)

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let mass1 = [5, 1, 3, 1, 1, 9, 0]
let mass2 = [5, 1, 3, 7, 9, 10, 9, 10]

let sumArr = mass1.map((value, index) => {
  if (mass2[index] === undefined) {
    return value
  }
  if (mass1[index] === undefined) {
    return value
  }
  return mass1[index] + mass2[index]
})

console.log(sumArr)

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

const sameValues = (array10) => {
  let names = {}
  array10.forEach((item) => {
    names[item] = (names[item] || 0) + 1
  })
  return names
}
console.log(
  sameValues([3, 1, 3, 5, 3, 7, 9, 9, 9, 10, 10, 65, 53, 53, 53, 53, 53])
)

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

const reverseArray = (array) => {
  let reversed = array.reverse()
  console.log(reversed)
}

reverseArray([1, 2, 3])

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

let firstWord = 'РЕПЕР'

const equalWord = (word) => {
  if (word === word.split('').reverse().join('')) {
    return `${word} - полиндром`
  } else {
    return `${word} - не полиндромом`
  }
}

console.log(equalWord('РЕПЕР'))

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

const oppositeCase = (str) => {
  let oppositeWord = ''
  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      oppositeWord += letter.toLowerCase()
    } else if (letter === letter.toLowerCase()) {
      oppositeWord += letter.toUpperCase()
    }
  }
  return oppositeWord
}

console.log(oppositeCase('AaAaAaAaA'))

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

let minusArr = mass1.map((value, index) => {
  if (mass2[index] === undefined) {
    return value
  }
  if (mass1[index] === undefined) {
    return value
  }
  return mass1[index] - mass2[index]
})

console.log(minusArr)

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

const colonBetweenOddNumbers = (array) => {
  let str = array.toString()
  let result = [str[0]]
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(':', str[i])
    } else {
      result.push(str[i])
    }
  }
  return result.join('')
}

console.log(colonBetweenOddNumbers([673126437578]))
/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

let array100 = [5, 2]

const sumAcc = array100.reduce((acc, currentValue) => {
  return acc + currentValue
}, 0)

console.log(sumAcc)
