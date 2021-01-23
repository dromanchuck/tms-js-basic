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

const mass = [1, 4, 3, 6, 7]
let together = mass.join()
console.log(together)

let str = mass.reduce((acc, value, index) => {
    return acc += value + ','
}, '')
console.log(str)

let str1 = ''
for (let char of mass) {
    str1 += char + ','
}
console.log(str1)
/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

const array = [1, 1, 2, 3, 5, 8, 13, 21, 44, 65, 99, 99, 21, 5, 8]

function getRidOfTheSameValues(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(getRidOfTheSameValues(array))


/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

let sum = firstArray.map(function (value, index) {
    if (secondArray[index] === undefined) {
        return 0
    }
    return value + secondArray[index]
})
console.log(sum)


/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

const array2 = [1, 1, 2, 3, 5, 8, 13, 21, 44, 65, 99, 99, 21, 5, 8]

function countTheSameValues(arr) {
    let newOne = []
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (!newOne.includes(arr[i])) {
            newOne.push(arr[i])
        }
        else {
            counter++
        }
    }
    return counter
}

console.log(countTheSameValues(array2))

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let arrayToReverse = [1, 2, 3, 4, 5, 6]
console.log(arrayToReverse.reverse())

let reversedArray = function (arrayToReverse) {
    let r = []
    for (let i = 0; i < arrayToReverse.length; i++) {
        r.push(arrayToReverse[i])
    }
    return r
}

console.log(reversedArray(arrayToReverse))

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

function isPolyndrom(word) {
    let w = word.split('').reverse().join('')
    if (w === word) {
        return `${word} is polyndrom`
    }
}

console.log(isPolyndrom('reper'))

/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

function changeRegister(phrase) {
    let newPhrase = ''
    for (let char of phrase) {
        if (char === char.toUpperCase()) {
            newPhrase += char.toLowerCase()
        }
        else if (char === char.toLowerCase()) {
            newPhrase += char.toUpperCase()
        }
    }
    return newPhrase
}

console.log(changeRegister('Hello World'))

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

let firstArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
let secondArray1 = [5, 7, 13, 24, 4, 12, 44, 4, 3, 2, 1]

let sum1 = firstArray1.map(function (value, index) {
    if (secondArray1[index] === undefined) {
        return 0
    }
    return value - secondArray1[index]
})
console.log(sum1)

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

function addColon(number) {
    let num = number.toString()
    let numArray = [num[0]]
    for (let i = 1; i < num.length; i++) {
        if ((num[i - 1] % 2 !== 0) && (num[i] % 2 !== 0)) {
            numArray.push(`:${num[i]}`)
        }
        else {
            numArray.push(num[i])
        }
    }
    return numArray.join('')
}

console.log(addColon(4185092303303099))

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

let arrayToReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let all = 0
let reducedArray = arrayToReduce.reduce((acc, value, index) => {
    acc.total += value
    return acc
}, { total: 0 })

console.log(reducedArray)