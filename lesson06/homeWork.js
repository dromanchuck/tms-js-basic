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

function first(condition, thisOne, orThisOne) {
    if (condition) {
        thisOne()
    }
    if (!condition) {
        orThisOne()
    }
}

function thisOne() {
    console.log(true)
}

function orThisOne() {
    console.log(false)
}

first((5 === '5'), thisOne, orThisOne)

/**
 * Задание 2
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
 * одинаковые у них элементы или нет.
 */

const arr1 = [1, 'wf', 'fwa', 5]
const arr2 = [1, 'wf', 'fwa', 5]

function compareArrays(arr1, arr2) {
    let result = false
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                result = true
            }
            else return false
        }
    }
    return result
}

console.log(compareArrays(arr1, arr2))

/**
 * Задание 3
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
 *
 */


function countInvokes() {
    let count = 0
    count++
    return function () {
        return (count++) ** 2
    }
}

let closure = countInvokes()

console.log(closure())
console.log(closure())
console.log(closure())




/**
 * Задание 4
 * Написать функцию, которая выводит количество миллисекунд с начала дня. За начало дня принимаем текущую дату и время 00:00.
 *
 */

let thisDay = new Date(2021, 0, 29)
console.log(new Date() - thisDay)


/**
 * Задание 5
 * Написать функцию, которая будет принимать число (дефолтное значение 2021) и вычисляет сумму цифр из которых состоит число.
 * Для 2021 это будет 5.
 *
 */

function calculateNum(num = 2021) {
    let nums = '' + num
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += +nums[i]
    }
    return count
}

console.log(calculateNum(2022))

/**
 * Задание 6
 * Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
 * вернет массив элементами которого являются эти части.
 * Пример функции: splitArray([1, 2, 3, 4, 2) => [[1, 2], [3, 4]]
 */

function splitArray(arr, value) {
    const result = arr.reduce((acc, val) => {
        if (acc[acc.length - 1].length === value) {
            acc.push([]);
        }

        acc[acc.length - 1].push(val)
        return acc
    }, [[]])
    return result
}

console.log(splitArray([1, 2, 3, 4, 5], 3))

/**
 * Задание 7
 * Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, 0, null.
 *
 */

function cleaning(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
        if (Boolean(arr[i]) === false) {
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(cleaning([1, false, 2, null, 3, '', 0, 6, undefined, 4, 5]))
/**
 * Задание 8 ****
 * Напишите функцию, которая принимает сколько угодное количество массивов и возвращает массив состоящий из .
 * Пример:
 *  createArrayWithUniq([1, 2], [2, 3], [2, 5]) => [2]
 *  createArrayWithUniq([1, 2, 3], [2, 3], [2, 3, 5]) => [2, 3]
 *  createArrayWithUniq([1, 3], [2, 3], [2, 3, 5]) => [3]
 */

function createArrayWithUniqueValues(...args) {
    let array = args.reduce((acc, value) => {
        acc.push(value)
        return acc
    }, [])

    let arr = array.reduce((acc, value) => acc.filter(elem => value.includes(elem)))

    return arr
}

console.log(createArrayWithUniqueValues([1, 2, 4], [1, 3, 2], [2, 5, 1], [1, 2, 3]))