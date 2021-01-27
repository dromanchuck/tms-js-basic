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

let array = [5, 3, 7, 10, -10, 89, 87];

let bubbleSort = (arr) => {
    let temp;
    while (true) {
        let i = 0
        let swap = 0
        while (i < arr.length) {
            if (arr[i] < arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap++
            }
            i++
        }
        if (swap === 0) {
            break
        }
    }
    return arr;
};

console.log(bubbleSort(array))

/**
 * Задание 2
 * Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
 * Например: [1,2,3] -> [1,4,9].
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pow(arr) {
    return arr.map(elem => elem ** 2)
}
console.log(pow(arr))

/**
 * Задание 3
 * Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
 * Использовать reduce.
 */
let people = [
    {
        name: 'Helen',
        sex: 'Female',
    },
    {
        name: 'Kenny',
        sex: 'Male',
    },
    {
        name: 'Martin',
        sex: 'Male',
    },
    {
        name: 'Rebecca',
        sex: 'Female',
    },
]

let result = people.reduce((acc, value) => {
    if (value.sex === 'Female') {
        acc[0].push(value)
    }
    if (value.sex === 'Male') {
        acc[1].push(value)
    }
    return acc
},
    [[], []]
)

console.log(result)

/**
 * Задание 4
 *
 * Написать функцию, которая принимает первым аргументом массив,
 * а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf не использовать)
 */

let array4 = [2, 5, 102, 63, 25, 6]

function findI(arr, value) {
    return arr.findIndex(elem => elem === value)
}

console.log(findI(array4, 25))

/**
 * Задание 5
 * Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
 * Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою соритировку.
 */

let array5 = [1, 5, 2, 3, 6, 7]

function arrSort(arr) {
    return arr.sort((a, b) => b - a)
}

console.log(arrSort(array5))
/**
 * Задание 6
 *
 * Написать функцию, которая принимает любое количество чисел(не массив)и возвращает их сумму.
 */

function sum(...args) {
    let result = 0
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    return result
}

console.log(sum(1, 5, 2, 6))